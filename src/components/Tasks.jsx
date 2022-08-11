import React, { useState } from "react";
import styles from "./Tasks.module.css";
import clipboard from "../assets/clipboard.svg";
import CreatedTasks from "./CreatedTasks";
import TaskInput from "./TaskInput";
import cryptoRandomString from "crypto-random-string";

export default function Tasks() {
  const [todos, setTodos] = useState([]);
  const emptyTodos = todos.length == 0;

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  function addTodo(todoContent) {
    setTodos([
      ...todos,
      {
        id: cryptoRandomString({ length: 10 }),
        content: todoContent,
        isCompleted: false,
      },
    ]);
  }

  function deleteTodoById(todoId) {
    const todosWithoutDeletedOne = todos.filter((todo) => {
      return todo.id != todoId;
    });
    setTodos(todosWithoutDeletedOne);
  }

  function toggleCompletedTodoById(todoId) {
    const todoCompleted = todos.map((todo) => {
      if (todo.id == todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(todoCompleted);
  }

  return (
    <div className={styles.taskContainer}>
      <TaskInput todo={todos} onAddTodo={addTodo} />
      <header>
        <div className={styles.tasksHeaderWrapper}>
          <span className={styles.createdTasksText}>Tarefas Criadas</span>
          <span className={styles.taskCounter}>{totalTodos}</span>
        </div>
        <div className={styles.tasksHeaderWrapper}>
          <span className={styles.completedTasksText}>Concluídas</span>
          <span className={styles.taskCounter}>
            {completedTodos} de {totalTodos}
          </span>
        </div>
      </header>
      <main>
        {emptyTodos ? (
          <div className={styles.emptyTaskContent}>
            <img src={clipboard}></img>
            <div className={styles.emptyTasksText}>
              <p>Você ainda não possui tarefas cadastradas</p>
              <p>Crie tarefas e organize seus items a fazer</p>
            </div>
          </div>
        ) : (
          <div className={styles.createdTasksContainer}>
            {todos.map((todo) => {
              return (
                <CreatedTasks
                  todo={todo}
                  key={todo.id}
                  onDeleteTodo={deleteTodoById}
                  onToggleCompletedTodo={toggleCompletedTodoById}
                />
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
