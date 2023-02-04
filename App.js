import { StyleSheet, Text, View } from 'react-native';
import AddGoalButton from './components/AddGoalButton';
import Goal from './components/Goal';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Goals</Text>
      <View style={styles.goalsContainer}>
        <Goal name={"Goal 1"} />
      </View>
      <View style={styles.addGoalContainer}>
        <AddGoalButton createGoal={() => {}} />
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
  addGoalContainer: {
    
  },
});
