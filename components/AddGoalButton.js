import { Pressable, StyleSheet, View, Text } from 'react-native';

function AddGoalButton(props) {

    function addGoal() {
        props.createGoal();
    }

    return (
        <View style={styles.outerContainer}>
            <Pressable
                onPress={addGoal}>
                <Text style={styles.text}>Add Goal</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: "#4c4c4c",
        padding: 12,
        borderRadius: 16,
    },
    text: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    },
});

export default AddGoalButton;