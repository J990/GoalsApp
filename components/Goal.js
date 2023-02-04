import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from './Checkbox';

function Goal({ name }) {

    const [goalName, setName] = useState(name);

    function clear() {
        setName("cleared");
    }

    function unclear() {
        setName("uncleared");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{goalName}</Text>
            <Checkbox enable={clear} disable={unclear} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    text: {

    },
});

export default Goal;