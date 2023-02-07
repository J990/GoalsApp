import { Pressable, StyleSheet, Text, View } from 'react-native';

function ModalButton({ onPress, children }) {

    return (
        <View style={styles.outerContainer}>
            <Pressable
                style={styles.innerContainer}
                onPress={onPress}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        width: "80%",
    },
    innerContainer: {
        elevation: 3,
        backgroundColor: "#20bbff",
        padding: 16,
        borderRadius: 8
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white"
    },
});

export default ModalButton;