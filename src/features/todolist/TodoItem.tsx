import { FC } from 'react';
import { ITodo } from '../../types/todo';
import { useAppDispatch } from '../../hooks/redux';
import { changeStatus } from '../../redux/slices/todoListSlice';

type TodoItemIndex = {
    index: number;
};

type TodoItem = Pick<ITodo, 'title' | 'completed'> & TodoItemIndex;

const TodoItem: FC<TodoItem> = ({ index, title, completed }) => {
    const dispatch = useAppDispatch();

    const changeStatusComplete = (index: number) => {
        dispatch(changeStatus(index));
    };

    return (
        <div>
            <div>title: {title}</div>
            <div>{completed ? <div>{'completed: done'}</div> : <button onClick={() => changeStatusComplete(index)}>complete</button>}</div>
            <hr />
        </div>
    );
};

export default TodoItem;
