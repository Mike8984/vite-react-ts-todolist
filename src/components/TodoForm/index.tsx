import { type ChangeEvent, type FC } from "react";
import styles from "./TodoForm.module.scss";

interface IProps {
  title: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addTodo: (title: string) => void;
}

const TodoForm: FC<IProps> = ({ title, handleChange, addTodo }) => {
  const isDisabled = !title.trim();

  const handleSubmit = () => {
    if (!isDisabled) {
      addTodo(title);
    }
  };

  return (
    <div className={styles.root}>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        className={styles.rootInput}
        placeholder="Введите задачу..."
      />
      <button
        onClick={handleSubmit}
        className={styles.rootButton}
        disabled={isDisabled}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
