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
        borderWidth: 2,
        borderColor: "red",
        padding: 12,
        margin: 8
    },
    text: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "red"
    },
});

export default AddGoalButton;