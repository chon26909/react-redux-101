import { ChangeEvent, useRef, useState } from 'react';
// import Input from '../../components/Input';

const Login = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // const [task, setTask] = useState('');

    const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        const pattern = /[a-zA-Z0-9]/;
        let arrayCharacter = [...value]; // array characters let value = chon@ => [...value] จะได้ ["c", "h", "o", "n", "@"]
        arrayCharacter = arrayCharacter.map((character) => (pattern.test(character) ? character : character.replace(character, '')));
        value = arrayCharacter.join('');
        setUsername(value);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        // maximum length
        // Upercase
        // Spacial characters
        // Confirm password

        const pattern = /[a-zA-Z]/;
        let value = event.target.value;
        value = [...value].map((c) => (pattern.test(c) ? c : c.replace(c, ''))).join('');
        setPassword(value);
    };

    // email validation

    const focusInput = (element: React.RefObject<HTMLInputElement>) => {
        if (element.current) {
            element.current.focus();
        }
    };

    const submit = () => {
        if (username.trim().length === 0) {
            focusInput(usernameRef);
            setUsernameError('Please enter a username');
            return;
        }
        if (password.trim().length === 0) {
            focusInput(passwordRef);
            setPasswordError('Please enter a password');
            return;
        }

        setUsernameError('');
        setPasswordError('');

        const data = {
            username,
            password
        };

        console.log('submit ', data);
    };

    return (
        <div>
            <div>
                <label htmlFor='username'>username</label>
                <div>
                    <input type='text' ref={usernameRef} value={username} onChange={onChangeUsername} />
                </div>
                <div>{usernameError}</div>
            </div>

            <hr />
            <div>
                <label htmlFor='password'>password</label>
                <div>
                    <input type='password' ref={passwordRef} value={password} onChange={onChangePassword} />
                </div>
                <div>{passwordError}</div>
            </div>

            <hr />
            <button onClick={submit}> Submit </button>
            {/* <Input id='username' label='username' value={task} onChange={handleOnchangeInput} errorMessage='user not found' /> */}
            {/* <button onClick={handleFocusUsernameInput}>on focus username input</button> */}
        </div>
    );
};

export default Login;
