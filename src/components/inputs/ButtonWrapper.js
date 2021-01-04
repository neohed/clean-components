import React from 'react';

const ButtonWrapper = ({id, children, clickHandler, ...rest}) => {
    return (
        <button
            id={id}
            onClick={() => clickHandler(id)}
            {...rest}
        >
            {
                children
            }
        </button>
    );
};

export default ButtonWrapper;
