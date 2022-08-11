import { CheckCircle, Circle, Trash } from "phosphor-react";
import React from "react";
import styles from "./CreatedTasks.module.css";

export default function CreatedTasks({
  todo,
  onDeleteTodo,
  onToggleCompletedTodo,
}) {
  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  function handleToggleCompleteTodo() {
    onToggleCompletedTodo(todo.id);
  }

  return (
    <div className={styles.toDoContainer}>
      <button
        className={styles.checkboxContainer}
        onClick={handleToggleCompleteTodo}
      >
        {todo.isCompleted ? <CheckCircle weight="fill" /> : <div />}
      </button>
      <span className={todo.isCompleted ? styles.completedTodo : undefined}>
        {todo.content}
      </span>
      <button className={styles.deleteButton} onClick={handleDeleteTodo}>
        <Trash size={20} />
      </button>
    </div>
  );
}
