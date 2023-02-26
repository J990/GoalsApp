import * as SQLite from 'expo-sqlite';

const goalTableName = "Goal";
const dayTableName = "Day";
const goalDayTableName = "GoalDay";

export const getDBConnection = () => {
    return SQLite.openDatabase("goal-data.db");
}

export const createTables = (db) => {

    const goalQ = `CREATE TABLE IF NOT EXISTS ${goalTableName}(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    ); `;

    const dayQ = `CREATE TABLE IF NOT EXISTS ${dayTableName}(
        id INTEGER PRIMARY KEY AUTINCREMENT,
        date DATE NOT NULL
    ); `;

    const goalDayQ = `CREATE TABLE IF NOT EXISTS ${goalDayTableName}(
        dayID INTEGER NOT NULL,
        goalID INTEGER NOT NULL,
        checked BIT NOT NULL,
        PRIMARY KEY (dayID, goalID)
    ); `;

    db.transaction(tx => {
        tx.executeSql(goalQ);
    }, (err) => {console.log(err);});

    db.transaction(tx => {
        tx.executeSql(dayQ);
    }, (err) => {console.log(err);});

    db.transaction(tx => {
        tx.executeSql(goalDayQ);
    }, (err) => {console.log(err);});

}
