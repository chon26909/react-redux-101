import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../../types/todo';

interface ITodoStore {
    data: ITodo[];
}

const initialState: ITodoStore = {
    data: []
};

const todoListSlice = createSlice({
    name: 'todolist',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            console.log('action', action);
            state.data.push(action.payload);
        },
        changeStatus: (state, action: PayloadAction<number>) => {
            const todoIndex = action.payload;
            state.data[todoIndex].completed = true;
        }
    }
});

export const { addTodo, changeStatus } = todoListSlice.actions;

export default todoListSlice.reducer;
