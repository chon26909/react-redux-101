import { Provider } from 'react-redux';
import TodoList from './pages/todos/TodoListPage';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
};

export default App;

// import { useState } from "react";
// // import Input from "./components/Input";

// const App = () => {
//     const [count, setCount] = useState(0);
//     // const [user, setUser] = useState({
//     //     isActive: false,
//     //     name: "winny"
//     // });

//     const increaseCount = () => {
//         setCount((state) => (state += 1));
//     };

//     const decreaseCount = () => {
//         setCount((state) => (state -= 1));
//     };

//     const htmlArray = [<div>1</div>, <div>2</div>];

//     return (
//         <div>
//             <h1>Counter </h1>
//             <div>{count}</div>
//             <button onClick={increaseCount}>+</button>
//             <button onClick={decreaseCount}>-</button>
//             {/* <pre>{JSON.stringify(user, null, 5)}</pre>
//             <div>{JSON.stringify(user, null, 5)}</div> */}
//             <div>{htmlArray}</div>
//             {/* <Input /> */}
//         </div>
//     );
// };

// export default App;
