import React from 'react';

const CenterElement = ({children, ...rest}) => {
    return (
        <div style={{
            margin: 'auto',
            width: '200px',
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
