import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddGoalButton from './components/AddGoalButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.goalsContainer}></View>
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
  goalsContainer: {
    flex: 1
  },
  addGoalContainer: {
    
  },
});
