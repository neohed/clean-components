import React from 'react'

// This component eliminates having to repeat type='text', but the main reason is setting a default value of empty
// string.  This prevents the React "uncontrolled input" error!
const TextInput = ({
        id,
        value = '',
        changeHandler,
        type = 'text'
}) => (
    <input
        id={id}
        name={id}
        key={id + 'txt'}
        type={type}
        value={value}
        onChange={changeHandler}
    />
);

export default TextInput;
