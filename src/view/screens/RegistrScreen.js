import { SafeAreaView, ScrollView, StyleSheet, Text, Image } from 'react-native';

import Input from '../components/input';
import Logo from '../../images/travel.png';

const RegistrScreen = () => {
    return (
      <SafeAreaView style = {style.container}>
        <ScrollView contentContainerStyle = {style.scrollContainer}>
            <Image style = {style.image} source = {Logo}>
            </Image>
            
            <Text style = {style.textTitle}>
                Registration Form
            </Text>
            <Text style = {style.textSubtitle}>
                Enter your data for Registration
            </Text>
            

            <Input label = "Name" iconName= 'id-badge'/>
            <Input label = "SurName" iconName = 'user'/>
            <Input label = "Phone" iconName = 'phone'/>
            <Input label = "Email" iconName = 'envelope'/>
            <Input label = "Password" iconName ='key'  password/>
            <Input label = "Confirm Password" iconName = 'key' password/>
        </ScrollView>
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
    },
    textSubtitle:{
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },
    image:{
        width: 250,
        height: 250,
        alignSelf: "center",
    }
});

export default RegistrScreen;