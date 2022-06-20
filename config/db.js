const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Creole@123",
  database: "todo",
});

const connectDB = async () => {
  await db.connect(function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("DB Connected!");
    }
  });
};

exports.db = db;
exports.connectDB = connectDB;
