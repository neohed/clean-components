import React from 'react'
import './text-input.css';

// This component eliminates having to repeat type='text', but the main reason is setting a default value of empty
// string.  This prevents the React "uncontrolled input" error!
const TextInput = ({
    id,
    value = '',
    changeHandler,
    type = 'text',
    label,
    ...rest
}) => (
    <div
        className='text-input-row'
        {...rest}
    >
        <label htmlFor={id}>
            {
                label
            }
        </label>
        <input
            id={id}
            name={id}
            key={id + 'txt'}
            type={type}
            value={value}
            onChange={changeHandler}
        />
    </div>
);

export default TextInput;
