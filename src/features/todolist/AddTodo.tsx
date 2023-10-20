import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { addTodo } from '../../redux/slices/todoListSlice';

const AddTodo = () => {
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('');

    const handleAddTodo = () => {
        dispatch(addTodo({ title: title, completed: false }));
    };

    return (
        <div className='add-todo'>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
            <button onClick={handleAddTodo}>add todo</button>
        </div>
    );
};

export default AddTodo;
