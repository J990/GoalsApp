import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import AddGoalButton from './components/AddGoalButton';
import Goal from './components/Goal';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [newGoalName, setNewGoalName] = useState("");

  function addGoal() {
    if (newGoalName == "") return;
    setGoals((currentGoals => [
      ...currentGoals,
      {text: newGoalName, id: Math.random().toString()}
    ]));
    setNewGoalName("");
  }

  function updateGoalInput(text) {
    setNewGoalName(text);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='#20bbff' />
      <View style={styles.goalsContainer}>
        <Text style={styles.title}>Today's Goals</Text>
        <FlatList
          data={goals}
          renderItem={(data) => {
            return <Goal name={data.item.text} id={data.item.id}/>;
          }} />
      </View>
      <View style={styles.newGoalContainer}>
        <TextInput
          style={styles.goalInput}
          onChangeText={updateGoalInput}
          value={newGoalName}
          cursorColor="white"
          placeholder="New Goal"
          placeholderTextColor="#ffffff"
          returnKeyLabel="go"
          returnKeyType="go"
          onSubmitEditing={addGoal} />
        <AddGoalButton createGoal={addGoal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20bbff"
  },
  title: {
    marginTop: 32,
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginBottom: 8
  },
  goalsContainer: {
    flex: 1,
    backgroundColor: "#007fb7",
    paddingTop: 32,
    paddingBottom: 16
  },
  newGoalContainer: {
    margin: 8,
  },
  goalInput: {
    marginBottom: 8,
    borderBottomColor: "white",
    color: "#ee8ac0",
    borderBottomWidth: 2,
    fontSize: 24,
    paddingBottom: 8,
    fontWeight: "bold",
  },
});
