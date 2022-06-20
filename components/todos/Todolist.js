import React, { useEffect, useState } from "react";
import styles from "./todo.module.css";
import axios from "axios";

const Todolist = ({ flag, setFlag }) => {
  const [tasks, setTasks] = useState([]);

  const getTodos = async () => {
    await axios.get("http://localhost:5000/api/todo").then((response) => {
      setTasks(response.data);
    });
  };

  const deleteTask = (data) => {
    let task = {
      id: data,
    };
    axios.post("http://localhost:5000/api/todo/2", task).then((response) => {
      setFlag(!flag);
    });
  };

  useEffect(() => {
    getTodos();
  }, [flag]);

  return (
    <div className={styles.todo}>
      {tasks.map((ele, ky) => {
        return (
          <div className={styles.body}>
            <div
              className={styles.task}
              key={ky}
              onClick={() => {
                let tmp = tasks;
                tasks[ky] = {
                  ...tasks[ky],
                  done: !!!tasks[ky].done,
                };
                setTasks([...tmp]);
                // console.log(tmp);
              }}
              style={{ textDecoration: `${ele.done ? "line-through" : ""}` }}
            >
              <span className={styles.title}>{ele.Task} :</span>
              <span className={styles.desc}>{ele.Description} </span>
            </div>
            <button className={styles.btn} onClick={() => deleteTask(ele.id)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
