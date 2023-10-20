import { FC, InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string;
}

// interface IInput {
//     errorMessage?: string;
// }

const Input: FC<IInput> = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <div>
                <input {...props} />
            </div>
            <div>{props.errorMessage}</div>
        </div>
    );
};

export default Input;
