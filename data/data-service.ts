import AsyncStorage from '@react-native-async-storage/async-storage';
import { goal } from './data-objects';

const goalsKey = "@goals";
const initialGoals = JSON.stringify({goals: []});

const IDkey = "@id";
const initialID = 0;

export const deleteAll = async() => {
  initialiseGoalsData();
  initialiseID();
}

export const initialiseGoalsData = async () => {
  try {
    await AsyncStorage.setItem(goalsKey, initialGoals);
  } catch (e) {
    console.log("Error Saving");
  }
}

export const setGoalsData = async (value: goal[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(goalsKey, jsonValue);
  } catch (e) {
    console.log("Error Saving");
  }
}

export const getGoalsData = async () => {
  try {
    const stringValue = await AsyncStorage.getItem(goalsKey);
    return stringValue != null ? JSON.parse(stringValue) : null;
  } catch (e) {
    console.log("Error Loading Data");
  }
}

export const initialiseID = async() => {
  try {
    await AsyncStorage.setItem(IDkey, initialID.toString());
  } catch (e) {
    console.log("Error Saving");
  }
}

const setID = async (value: number) => {
  try {
    await AsyncStorage.setItem(IDkey, value.toString());
  } catch (e) {
    console.log("Error Saving");
  }
}

export const getID = async () => {
  try {
    const stringValue = await AsyncStorage.getItem(goalsKey);
    return stringValue != null ? parseInt(stringValue) : null;
  } catch (e) {
    console.log("Error Loading Data");
  }
}

export const incrementID = async() => {
  const freeID = await getID();
  if (!freeID) return null
  else {
    setID(freeID + 1);
    return freeID;
  }
}