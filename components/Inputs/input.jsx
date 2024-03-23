import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = ({label, iconName, error, password, ... props}) => {
    const [hidePassword, setHidePassword] = React.useState(password);

    return(
        <View style = {style.container}>
            <Text>{label}</Text>
            <View style = {[style.input,]}>
                <Icon name = {iconName} style = {style.icon}></Icon>
                <TextInput 
                    style = {style.textInput} 
                    secureTextEntry = {hidePassword}
                    {... props}
                />
                {password && (
                     <Icon
                     onPress = {() => setHidePassword(!hidePassword)}
                     name = {hidePassword ? "eye" : "eye-slash"} 
                     style = {style.iconEye}
                     />
                     )
                }
            </View>
            {error && <Text style = {style.textError}> {error} </Text>}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: "lightcyan",
        height: 55,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderWidth: 0.75,
        alignItems: "center",
        borderRadius: 200,
        borderWidth: 1,
    },
    icon:{
        fontSize: 25,
        color: "darkblue",
    },
    iconEye:{
        fontSize: 20,
        color: "darkblue",
    },
    textInput: {
        color: "darkblue",
        flex: 1,
        marginLeft: 10,
    },
    textError: {
        color: "red",
        fontSize: 12,
        marginTop: 7,
    }
});

export default Input;