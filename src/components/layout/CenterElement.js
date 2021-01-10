import React from 'react';

const CenterElement = ({children, width = 200, ...rest}) => {
    return (
        <div style={{
            margin: 'auto',
            width: width + 'px',
            textAlign: 'center',
            ...rest
        }}>
            {
                children
            }
        </div>
    )
};

export default CenterElement;
