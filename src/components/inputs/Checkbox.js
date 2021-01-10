import React from 'react'

const Checkbox = ({isChecked, id, label, changeHandler}) => (
    [
        <input
            type="checkbox"
            key={id + '_chk'}
            id={id}
            name={id}
            checked={isChecked}
            onChange={({target}) => changeHandler(!isChecked, target.value)}
        />,
        <label
            key={id + '_lbl'}
            htmlFor={id}
        >
            {
                label
            }
        </label>
    ]
);

export default Checkbox;
