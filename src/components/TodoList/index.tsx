import { type FC } from "react";
import TodoItem from "../TodoItem";
import { useTodos } from "../../store/useTodos";

interface IProps {}

const TodoList: FC<IProps> = () => {

  const todos = useTodos((state) => state.todos);

  return (
    <div>
      {!todos.length ? (
        <p>No todos</p>
      ) : (
        todos.map((item) => <TodoItem key={item.id} todo={item} />)
      )}
    </div>
  );
};

export default TodoList;
