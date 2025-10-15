import { useState, type ChangeEvent } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useAppDispatch } from "./redux/hooks";
import { addTodo } from "./redux/todos/todoSlice";

const App = () => {
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = (title: string) => {
    if (!title.trim()) {
      alert("Values should not be empty");
    }

    dispatch(addTodo(title));

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
