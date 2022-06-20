const { db } = require("../config/db");

exports.getAllTodos = (req, res) => {
  db.query("SELECT * FROM Todo", (err, result) => {
    if (err) {
      console.error(err.message);
      res.send(err.message);
    } else {
      res.send(result);
    }
  });
};

exports.createTask = (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;

  db.query(
    `INSERT INTO Todo (Task,Description) VALUES (?,?)`,
    [title, desc],
    (err, result) => {
      if (err) {
        console.error(err.message);
        res.send(err.message);
      } else {
        db.query("SELECT * FROM Todo", (err, result) => {
          if (err) {
            console.error(err.message);
            res.send(err.message);
          } else {
            res.send(result);
          }
        });
      }
    }
  );
};

exports.updateTask = (req, res) => {
  const id = req.body.id;  
  const title = req.body.title;
  const desc = req.body.desc;

  db.query(
    `UPDATE Todo SET Task= ? , Description = ? WHERE id= ?`,
    [title, desc, id],
    (err, result) => {
      if (err) {
        console.error(err.message);
        res.send(err.message);
      } else {
        res.send("Task Updated !");
      }
    }
  );
};

exports.deleteTask = (req, res) => {
  const id = req.body.id;

  db.query(`DELETE FROM Todo WHERE id= ?`, [id], (err, result) => {
    if (err) {
      console.error(err.message);
      res.send(err.message);
    } else {
      res.send("Task Deleted !");
    }
  });
};
