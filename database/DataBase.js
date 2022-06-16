import * as SQLite from "expo-sqlite";
import Item from "../models/Item";

const db = SQLite.openDatabase("items.db");

export const initDB = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL,
        name TEXT, info TEXT)`,
        [],
        (tx, res) =>resolve(res),
        (tx, err) => reject(err)
      );
    });
  });
};

export const findAll = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        `SELECT * FROM items`,
        [],
        (tx, res) =>
          resolve(
            res
            .rows._array.map(
              (items) => new Item(items.id, items.name, items.info)
      )),
        (tx, err) => reject(err)
          );
    });
  });
};

export const insert = (items) => {

  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
         `INSERT INTO items (name, info )VALUES (?, ?)`,
        [items.name, items.info],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
      );
    });
  });
 };

export const deleteById = (id) => {
return new Promise ((resolve, reject) => {
  db.transaction((transaction) => {
    transaction.executeSql(
      `DELETE FROM items WHERE id = ?`, [id],
      (tx, res) => resolve(res),
      (tx, err) => reject(err)
      )
  })
})
}