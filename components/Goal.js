import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function Goal(props) {

    // Can remove state later
    // Only used to change the goal name
    // Which we won't need to do
    const [isChecked, setChecked] = useState(false);
    const [textStyle, setTextStyle] = useState(styles.text);
    const [symbol, setSymbol] = useState("☐");

    function clear() {
        setChecked(true);
        setTextStyle([styles.text, styles.pressed]);
        setSymbol("☑");
    }

    function unclear() {
        setChecked(false);
        setTextStyle(styles.text);
        setSymbol("☐");
    }

    function check() {
        if (isChecked) unclear();
        else clear();
        setChecked(!isChecked);
    }

    function openDeleteModal() {
        
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.pressableArea} onPress={check} onLongPress={openDeleteModal}>
                <Text style={textStyle}>{props.name}</Text>
                {/* <Checkbox enable={clear} disable={unclear} /> */}
                <Text style={styles.checkbox}>{symbol}</Text>
            </Pressable>
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
    pressableArea: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center",
        padding: 2,
    },
    text: {
        fontSize: 24,
        width: "80%",
        // color: "#ee8ac0",
        color: "white",
        fontWeight: "bold",
    },
    pressed: {
        textDecorationLine: "line-through",
    },
    checkbox: {
        fontSize: 36,
        color: "white",
    },
});

export default Goal;