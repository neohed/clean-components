import React from 'react';
import './range.css';

const Range = ({id, min = 1, max = 100, label, value, changeHandler, ...rest}) => {
    const onChange = ({target}) => {
        const {value} = target;

        changeHandler(id, value)
    }

    return (
        [
            <label
                key={id + '_lbl'}
                htmlFor={id + '_txt'}
                className="range-lbl"
            >
                {
                    label
                }
            </label>,
            <input
                key={id + '_slider'}
                id={id + '_slider'}
                type="range"
                min={min}
                max={max}
                value={value}
                className="range-slider"
                onChange={onChange}
                {...rest}
            />,
            <input
                key={id + '_txt'}
                id={id + '_txt'}
                type='number'
                min={min}
                max={max}
                value={value}
                className="range-number"
                onChange={onChange}
                {...rest}
            />
        ]
    );
};

export default Range;
