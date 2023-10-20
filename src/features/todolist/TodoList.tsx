import { useAppSelector } from '../../hooks/redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { data } = useAppSelector((store) => store.todoListSlice);

    return (
        <div className='todo-list'>
            {data.map((item) => (
                <TodoItem title={item.title} completed={item.completed} />
            ))}
        </div>
    );
};

export default TodoList;
