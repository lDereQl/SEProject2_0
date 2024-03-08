import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = ({label, iconName, password}) => {
    const [hidePassword, setHidePassword] = React.useState(password);

    return(
        <View style = {style.container}>
            <Text>{label}</Text>
            <View style = {style.input}>
                <Icon name = {iconName} style = {style.icon}></Icon>
                <TextInput style = {style.textInput} 
                secureTextEntry = {hidePassword}/>
                {
                    password && (
                        <Icon
                          onPress = {() => setHidePassword(!hidePassword)}
                          name = {hidePassword ? "eye" : "eye-slash"} 
                          style = {style.iconEye}
                         />
                    )
                }
            </View>
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
});

export default Input;