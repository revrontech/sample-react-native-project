import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },

    loadingBlock: { flex: 1, justifyContent: "center" },

    text: {
        fontSize: 14,
        alignSelf: 'center',
        color: colors.white,
        paddingBottom: 10
    }
})