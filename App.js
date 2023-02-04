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
      <Text style={styles.title}>Today's Goals</Text>
      <View style={styles.goalsContainer}>
        <Goal name={"Goal 1"} />
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
          cursorColor="red"
          placeholder="New Goal"/>
        <AddGoalButton createGoal={addGoal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginTop: 64,
    fontSize: 36,
    textAlign: "center"
  },
  goalsContainer: {
    flex: 1,
    backgroundColor: "orange"
  },
  newGoalContainer: {
    margin: 8,
  },
  goalInput: {
    marginBottom: 8,
    borderBottomColor: "red",
    borderBottomWidth: 2
  },
});
