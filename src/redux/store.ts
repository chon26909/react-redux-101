import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from './slices/todoListSlice';

const store = configureStore({
    devTools: true,
    reducer: {
        todoListSlice
    }
});

export default store;
