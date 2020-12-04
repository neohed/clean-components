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
                htmlFor={id}
            >
                {
                    labelText
                }
            </label>,
            <select
                id={id}
                name={id}
                onChange={changeHandler}
            >
                {
                    !selectedValue && <option disabled selected value/>
                }
                {
                    options.map(option => {
                        const value = option[valueProp];
                        const text = option[textProp];

                        return <option
                            key={value}
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
