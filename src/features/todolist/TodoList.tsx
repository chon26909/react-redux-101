import { useAppSelector } from '../../hooks/redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { data } = useAppSelector((store) => store.todoListSlice);

    return (
        <div className='todo-list'>
            {data.map((item, index) => (
                <TodoItem key={index} index={index} title={item.title} completed={item.completed} />
            ))}
        </div>
    );
};

export default TodoList;
