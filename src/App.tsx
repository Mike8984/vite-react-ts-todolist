import { useState, type ChangeEvent } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./store/useTodos";

const App = () => {
  const [title, setTitle] = useState("");

  const addTodo = useTodos((state) => state.addTodo);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = (title: string) => {
    if (!title.trim()) {
      alert("Values should not be empty");
    }

    addTodo(title);

    setTitle("");
  };

  return (
    <div className="todo-wrapper">
      <TodoForm
        title={title}
        handleChange={handleChange}
        addTodo={handleAddTodo}
      />
      <TodoList />
    </div>
  );
};

export default App;
