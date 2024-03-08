import {View, Text, StyleSheet, useWindowDimensions} from "react-native";
import {BarIndicator, DotIndicator} from "react-native-indicators";

const Loader = ({visible = false}) => {
    const {width, height} = useWindowDimensions();
    return (
        visible && (
            <View style = {[styles.container, {width, height}]}>
                <View style = {styles.loader}>
                    <DotIndicator color = "blue"> </DotIndicator>
                    <Text style = {styles.text}> Please Wait ... </Text>
                </View>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    loader: {
        height: 90, 
        backgroundColor: "white",
        marginHorizontal: 50, 
        borderRadius: 5, 
        paddingHorizontal: 20,
        alignItems: "center",
    },

    container: {
        position: "absolute",
        zIndex: 10, 
        backgroundColor: "rgba(0,0,0, .5)", 
        justifyContent: "center"
    },

    text: {
        marginBottom: 10, 
        fontSize: 16, 
        color: "blue"
    },
});

export default Loader;