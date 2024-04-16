import React from "react";
import { StyleSheet, SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Buttons/button';
import Input from '../../components/Inputs/input';
import Loader from '../../components/Loader/loader';
import Logo from '../../assets/images/logo.png';

const LoginScreen = ({navigation}) => {

  const [input, setInputs] = React.useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = React.useState({})
  const [loading, setLoader] = React.useState(false)

  const validate = async () => {
    console.log("validate");
    console.log(input);
    let isValid = true;

    if(!input.email){
        handleError("Please enter the email", "email")
        isValid = false
    }else if(!input.email.match(/\S+@\S+\.\S+/)){
        handleError("Please enter the valid email", "email")
        isValid = false
    }
    if(!input.password){
        handleError("Please enter the password", "password")
        isValid = false
    }else if (input.password.length < 8){
        handleError("Minimal password length is 8", "password")
        isValid = false
    }

    if (isValid) login();
  };

  const handleError = (text, input) => {
    setErrors((prevState) => ({ ...prevState, [input] : text}));
  };

  const handleOnChange = (text, input) => {
      setInputs((prevState) => ({ ...prevState, [input] : text}));
  };
  
  const login = () => {
    console.log("login!");
    console.log(input) ;
    
    setLoader(true);
    setTimeout(async() => {
        try {
            setLoader(false);
            let userData = await AsyncStorage.getItem("userData");

            if(userData){
              userData = JSON.parse(userData);
              console.log("userData");
              console.log(userData);

              if(input.email == userData.email &&
                input.password == userData.password)
              {
                navigation.navigate("Bottom");
                AsyncStorage.setItem(
                  "userData",
                  JSON.stringify({...userData, loggedIn: true})
                )
              }
              else 
              {
                console.log("No such account");
                Dialog.show({
                  type: ALERT_TYPE.DANGER, 
                  title: "Error",
                  textBody: "Incorrect email/password!",
                  button: "close"
                }); 
              }
            }else {
              console.log("No such account");
              Dialog.show({
                type: ALERT_TYPE.DANGER, 
                title: "Error",
                textBody: "No account found!",
                button: "close"
              });
            }
        } catch (error) {
          console.log("Error");
            Dialog.show({
                type: ALERT_TYPE.DANGER, 
                title: "Error",
                textBody: error,
                button: "close"
            });
        }
    }, 1000);
  };

    return (
      <AlertNotificationRoot style={style.container}>
        <SafeAreaView style={style.container}>
        <Loader visible = {loading}/>
          <ScrollView style = {style.svContainer}>
            <Image style = {style.image} source = {Logo}></Image>
            
            <View style = {style.viewContainer}>
            <Input 
                iconName = 'envelope'
                placeholder = "Enter your Email"
                onChangeText = {(text) => handleOnChange(text, "email")}
                onFocus = {() => handleError(null, "email")}
                error = {errors.email}
            />
            <Input 
                iconName ='key'  
                password placeholder = "Enter your Password"
                onChangeText = {(text) => handleOnChange(text, "password")}
                onFocus = {() => handleError(null, "password")}
                error = {errors.password}
            />
            </View>
            <Button title = "Login" onPress = {validate}/>
            <Text style = {style.signin} onPress = {() => 
              navigation.navigate("Register")}>Sign in</Text>
          </ScrollView>
        </SafeAreaView>
      </AlertNotificationRoot>
    );
  }

  const style = StyleSheet.create({
    container: { 
      flex: 1, 
      backgroundColor: "white",
    },
    svContainer: {
      paddingTop: 20, 
      paddingHorizontal: 20,
    },
    viewContainer: {
      paddingTop: 20,
    },
    textTitle:{
      paddingTop: 20, 
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
      alignSelf: "center",
    },
    image:{
      width: 250,
      height: 250,
      alignSelf: "center",
    },
    signin: {
      textAlign: "center",
      fontSize: 16,
      color: "black",
      fontWeight: "bold",
    },
  });

export default LoginScreen;