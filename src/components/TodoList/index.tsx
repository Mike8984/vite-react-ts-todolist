import { type FC } from "react";
import TodoItem from "../TodoItem";
import { useAppSelector } from "../../redux/hooks";

interface IProps {}

const TodoList: FC<IProps> = () => {
  const { list } = useAppSelector((state) => state.todos);

  return (
    <div>
      {!list.length ? (
        <p>No todos</p>
      ) : (
        list.map((item) => <TodoItem key={item.id} todo={item} />)
      )}
    </div>
  );
};

export default TodoList;
