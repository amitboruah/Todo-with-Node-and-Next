import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Todolist from "../components/todos/Todolist";
import Buttons from "../components/button/Buttons";
import axios from "axios";

const index = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [flag, setFlag] = useState(true)

  const createTodo = () => {
    let task = {
      title: title,
      desc: body,
    };
    axios.post("http://localhost:5000/api/todo", task).then((response) => {
      console.log(response);
      setTitle("");
      setBody("");
      setFlag(!flag)
    });
  };


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Todolist flag={flag} setFlag={setFlag}/>
        <input
          type="text"
          placeholder="Title"
          className={styles.title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className={styles.desc}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Buttons createTodo={createTodo} />
      </div>
    </div>
  );
};

export default index;
