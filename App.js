import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import AddGoalButton from './components/AddGoalButton';
import Goal from './components/Goal';
import { initialiseGoalsData, initialiseID, setGoalsData, getGoalsData, getID, incrementID } from './data/data-service';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [newGoalName, setNewGoalName] = useState("");
  const [isInitialised, setInitialised] = useState(false);

  async function addGoal() {
    if (newGoalName == "") return;
    const newID = await incrementID();
    let tempGoals = goals;
    console.log(goals);
    console.log(tempGoals);
    tempGoals.push({id: newID, name: newGoalName, ticked: false});
    const newGoals = tempGoals;
    setGoals(newGoals);
    await setGoalsData(newGoals);
    setNewGoalName("");
  }

  function removeGoal(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => {return id != goal.id});
    });
  }

  function updateGoalInput(text) {
    setNewGoalName(text);
  }

  useEffect(() => {
    if (!isInitialised) {
      if (!getGoalsData()) initialiseGoalsData();
      else setGoals(getGoalsData());
      if (!getID()) initialiseID();
      setInitialised(true);
    }
  }, [() => {}])

  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='#20bbff' />
      <View style={styles.goalsContainer}>
        <Text style={styles.title}>Today's Goals</Text>
        <FlatList
          data={goals}
          renderItem={(data) => {
            return <Goal name={data.item.name} id={data.item.id} onDelete={removeGoal}/>;
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
    marginBottom: 8,
    margin: 16
  },
  goalInput: {
    marginBottom: 8,
    borderBottomColor: "white",
    color: "white",
    borderBottomWidth: 2,
    fontSize: 24,
    paddingBottom: 8,
    fontWeight: "bold",
  },
});
