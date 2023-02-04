import { useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

function Checkbox({ enable, disable }) {

    const [checked, setChecked] = useState(false);
    const [symbol, setSymbol] = useState("Unchecked");

    function check() {
        setChecked(!checked);
        if (checked) {
            disable(); setSymbol("Unchecked");
        }
        else {
            enable();
            setSymbol("Checked")
        }
    }

    return (
        <View style={styles.outerContainer}>
            <Pressable onPress={check}>
                <Text>{symbol}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {

    }
});

export default Checkbox;