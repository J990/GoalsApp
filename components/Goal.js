import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from './Checkbox';

function Goal(props) {

    // Can remove state later
    // Only used to change the goal name
    // Which we won't need to do
    const [isChecked, setChecked] = useState(false);
    const [textStyle, setTextStyle] = useState(styles.text);

    function clear() {
        setChecked(true);
        setTextStyle([styles.text, styles.pressed]);
    }

    function unclear() {
        setChecked(false);
        setTextStyle(styles.text);
    }

    return (
        <View style={styles.container}>
            <Text style={textStyle}>{props.name}</Text>
            <Checkbox enable={clear} disable={unclear} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // borderColor: "white",
        // borderWidth: 2,
        maxWidth: "75%",
        width: "75%",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        padding: 0,
        width: "80%",
        color: "#ee8ac0",
        fontWeight: "bold"
    },
    pressed: {
        textDecorationLine: "line-through",
    }
});

export default Goal;