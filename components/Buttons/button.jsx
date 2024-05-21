import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from "react";
import { SIZES } from "../../constants/theme"

const Button = ({title, textColor, onPress, width, backgroundColor, borderWidth, borderColor}) => {
    return(
        <TouchableOpacity 
            onPress = {onPress} 
            style = {style.btnStyle(
                width,
                backgroundColor,
                borderWidth,
                borderColor
            )}
        >
            <Text style = {style.title(textColor)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const style = StyleSheet.create({
    title: (textColor) => ({
        fontFamily: "medium",
        fontSize: SIZES.medium,
        color: textColor
    }),
    btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
        width: width, 
        backgroundColor: backgroundColor, 
        alignItems: "center",
        justifyContent: "center",
        height: 45, 
        borderRadius: SIZES.small, 
        borderColor: borderColor, 
        borderWidth: borderWidth
    }),
});