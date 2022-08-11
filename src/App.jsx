import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import styles from "./App.module.css";
import "./global.css";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Tasks />
      </div>
    </div>
  );
}

export default App;
