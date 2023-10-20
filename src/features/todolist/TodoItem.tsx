import { FC } from 'react';
import { ITodo } from '../../types/todo';

type TodoItem = Pick<ITodo, 'title' | 'completed'>;

const TodoItem: FC<TodoItem> = ({ title, completed }) => {
    return (
        <div>
            <div>title: {title}</div>
            <div>{completed ? 'completed: done' : ''}</div>
            <hr />
        </div>
    );
};

export default TodoItem;
