import {StyleSheet} from "react-native";
import { COLORS } from '../../constants/theme'

const home = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },

    box : {
        backgroundColor: COLORS.white,
        width: 40, 
        height: 40, 
        borderRadius: 12, 
        alignItems: "center",
        justifyContent: "center"
    }
})

export default home