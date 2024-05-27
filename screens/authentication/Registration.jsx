import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import { SIZES, COLORS } from '../../constants/theme'

import Button from '../../components/Buttons/button';
import Input from '../../components/Inputs/input';
import Loader from '../../components/Loader/loader';

const Registration = ({ navigation }) => {
    const [input, setInputs] = React.useState({
        email: "",
        surname: "",
        password: "",
        pconfirm: "",
    })

    const [errors, setErrors] = React.useState({})
    const [loading, setLoader] = React.useState(false)

    const validate = () => {
        console.log("validate");
        console.log(input);
        let isValid = true;

        if(!input.surname){
            handleError("Please enter the Username", "surname")
            isValid = false
        }
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
        if(!input.pconfirm){
            handleError("Please confirm your password", "pconfirm")
            isValid = false
        }
        else if(input.pconfirm != input.password){
            handleError("Password are not the same. Try again", "pconfirm")
            isValid = false
        }

        if (isValid) register();
    }

    const register = () => {
        console.log("register!");
        console.log(input);
        
        setLoader(true);
        setTimeout(() => {
            try {
                setLoader(false);
                AsyncStorage.setItem("userData", JSON.stringify(input));
                
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS, 
                    title: "Success",
                    textBody: "Congrats! this is dialog box success",
                    button: "close",
                    onHide: () => {
                        navigation.navigate("Login")
                    },
                });
            } catch (error) {
                Dialog.show({
                    type: ALERT_TYPE.DANGER, 
                    title: "Error",
                    textBody: error,
                    button: "close"
                });
            }
        }, 1000);
    };

    const handleError = (text, input) => {
        setErrors((prevState) => ({ ...prevState, [input] : text}));
    };

    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input] : text}));
    };

    return (
      <SafeAreaView style = {style.container}>
        <AlertNotificationRoot>
            <Loader visible = {loading}/>
            <ScrollView contentContainerStyle = {style.scrollContainer}>

            <Input  
                iconName = 'user'  
                placeholder = "Enter your Username"
                onChangeText = {(text) => handleOnChange(text, "surname")}
                onFocus = {() => handleError(null, "surname")}
                error = {errors.surname}
            />
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
            <Input 
                iconName = 'key' 
                password placeholder = "Confirm your Password"
                onChangeText = {(text) => handleOnChange(text, "pconfirm")}
                onFocus = {() => handleError(null, "pconfirm")}
                error = {errors.pconfirm}
            />

            <Button
              onPress = {validate}
              title={"Register"} 
              width={(SIZES.width - 40)} 
              backgroundColor={COLORS.blue} 
              borderColor={COLORS.blue} 
              borderWidth={0}
              textColor={COLORS.white}
            />
            </ScrollView>
        </AlertNotificationRoot>
      </SafeAreaView>
    );
  }

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    scrollContainer: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    textTitle:{
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
});

export default Registration;