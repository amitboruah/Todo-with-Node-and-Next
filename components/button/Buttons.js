import React, { useEffect } from "react";
import styles from "./button.module.css"

const Buttons = ({createTodo}) => {
  return <button className={styles.btn} onClick={()=>createTodo()}>Add task</button>;
};

export default Buttons;
