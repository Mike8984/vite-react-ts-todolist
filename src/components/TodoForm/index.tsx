import { type ChangeEvent, type FC } from "react";
import styles from "./TodoForm.module.scss";


interface IProps {
    title: string;
    searchValue: string;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    addTodo: (title: string) => void;
}

const TodoForm: FC<IProps> = ({ title, searchValue, handleSearch, handleChange, addTodo }) => {
    return (
        <div className={styles.root}>
            <input
                type="text"
                placeholder="Enter your task"
                value={title}
                onChange={handleChange}
                className={styles.rootInput}
            />
            <button
                onClick={() => addTodo(title)}
                className={styles.rootButton}
            >
                Add Todo
            </button>
            <div>
                <input
                    type="search"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearch}
                    className={styles.rootSearch}
                />
            </div>
        </div>
    );
};

export default TodoForm;
