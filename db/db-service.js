import * as SQLite from 'expo-sqlite';

const goalsTableName = "Goals";
const daysTableName = "Days";
const goalDaysTableName = "GoalDays";

export const getDBConnection = () => {
    return SQLite.openDatabase("goal-data.db");
}

export const createTables = (db) => {

    const goalsQ = `CREATE TABLE IF NOT EXISTS ${goalsTableName}(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    ); `;

    const daysQ = `CREATE TABLE IF NOT EXISTS ${daysTableName}(
        id INTEGER PRIMARY KEY AUTINCREMENT,
        date DATE NOT NULL
    ); `;

    const goalDaysQ = `CREATE TABLE IF NOT EXISTS ${goalDaysTableName}(
        dayID INTEGER NOT NULL,
        goalID INTEGER NOT NULL,
        checked BIT NOT NULL,
        PRIMARY KEY (dayID, goalID)
    ); `;

    db.transaction(tx => {
        tx.executeSql(goalsQ);
    }, (err) => {console.log(err);});

    db.transaction(tx => {
        tx.executeSql(daysQ);
    }, (err) => {console.log(err);});

    db.transaction(tx => {
        tx.executeSql(goalDaysQ);
    }, (err) => {console.log(err);});

}
