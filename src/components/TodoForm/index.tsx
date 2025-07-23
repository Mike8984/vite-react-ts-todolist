import { type ChangeEvent, type FC } from "react";
import styles from './TodoForm.module.scss'

interface IProps {
    title: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    addTodo: (title: string) => void;
}

const TodoForm: FC<IProps> = ({ title, handleChange, addTodo }) => {
    return (
        <div className={styles.root}>
            <input type="text" value={title} onChange={handleChange} className={styles.rootInput} />
            <button onClick={() => addTodo(title)} className={styles.rootButton}>Add Todo</button>
        </div>
    );
};

export default TodoForm;
