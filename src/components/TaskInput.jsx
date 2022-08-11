import { PlusCircle } from "phosphor-react";
import React from "react";
import { useState } from "react";
import styles from "./TaskInput.module.css";

export default function TaskInput({ onAddTodo }) {
  const [todoContent, setTodoContent] = useState("");

  function handleCreateTodo(event) {
    event.preventDefault();
    onAddTodo(todoContent);
    setTodoContent("");
  }

  function onChangeContent(event) {
    event.target.setCustomValidity("");
    setTodoContent(event.target.value);
  }

  function onInvalidContent(event) {
    event.target.setCustomValidity("Campo Vazio");
  }

  return (
    <form className={styles.taskContainer} onSubmit={handleCreateTodo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={onChangeContent}
        value={todoContent}
        onInvalid={onInvalidContent}
        required
      />
      <button type="submit" className={styles.createTaskButton}>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
