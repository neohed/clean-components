import React from 'react';

const Select = ({
    options,
    id,
    changeHandler,
    selectedValue,
    labelText,
    valueProp = 'value',
    textProp = 'text'
}) => {
    return (
        [
            labelText && <label
                key={id + '_lbl'}
                htmlFor={id}
            >
                {
                    labelText
                }
            </label>,
            <select
                key={id + '_select'}
                id={id}
                name={id}
                onChange={changeHandler}
            >
                {
                    !selectedValue && <option disabled selected value/>
                }
                {
                    options.map((option,i) => {
                        const value = option[valueProp];
                        const text = option[textProp];

                        return <option
                            key={i}
                            value={value}
                            selected={value === selectedValue}
                        >
                            {
                                text
                            }
                        </option>
                    })
                }
            </select>
        ]
    );
};

export default Select;
