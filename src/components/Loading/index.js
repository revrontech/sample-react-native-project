import { ActivityIndicator, Text, View } from "react-native"
import { SafeAreaView } from "react-native"
import colors from "../../config/colors"
import styles from "./style"

const LoadingView = ({ content = 'Processing', visibility }) => {
    return visibility ? <SafeAreaView style={styles.container} >
        <View style={styles.loadingBlock}>
            <Text style={styles.text}>{content}</Text>
            <ActivityIndicator color={colors.white} size={'large'} />
        </View>
    </SafeAreaView> : <></>
}

export default LoadingView