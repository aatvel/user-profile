import React, { useState } from "react";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Сделать тестовое задание от Makeunion", completed: true },
    { text: "Получить оффер", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.todo_container}>
      <h2>To do:</h2>
      <form className={styles.todo_input}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Введите новое задание"
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </form>
      <ul className={styles.todo_list}>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? styles.completed : ""}>
            <span onClick={() => handleToggleTodo(index)}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(index)}> &#10006;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
