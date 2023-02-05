import { useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

function Checkbox({ enable, disable }) {

    const [checked, setChecked] = useState(false);
    const [symbol, setSymbol] = useState("☐");

    function check() {
        setChecked(!checked);
        if (checked) {
            disable();
            setSymbol("☐");
        }
        else {
            enable();
            setSymbol("☑")
        }
    }

    return (
        <View style={styles.outerContainer}>
            <Pressable style={styles.pressableArea} onPress={check}>
                <Text style={styles.symbol}>{symbol}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {

    },
    pressableArea: {
        padding: 0
    },
    symbol: {
        fontSize: 48,
        color: "white",
    },
});

export default Checkbox;