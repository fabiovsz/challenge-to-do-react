import React from "react";
import styles from "../components/Header.module.css";
import todoLogo from "../assets/todo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="logo-todo" />
    </header>
  );
}
