import { useState } from "react";

const UseTodolist = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
    };

    setTodos([...todos, newTask]);
    setTask("");
    setEdit(null);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTask = () => {
    if (edit === null) return;
    setTodos(
      todos.map((todo) => (todo.id === edit ? { ...todo, text: task } : todo)),
    );

    setTask("");
    setEdit(null);
  };

  return {
    task,
    setTask,
    todos,
    addTask,
    deleteTask,
    updateTask,
    setEdit,
    edit,
  };
};

export default UseTodolist;
