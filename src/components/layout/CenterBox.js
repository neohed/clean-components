import React from 'react';

const CenterBox = ({children, ...rest}) => {
    return (
        <div style={{
            width: '100%',
            maxWidth: '90vw',
            margin: '0 auto',
            padding: '40px',
        }} {...rest}>
            {
                children
            }
        </div>
    )
};

export default CenterBox;
