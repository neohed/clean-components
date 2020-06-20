import React from 'react';
import './centerBox.css'

const CenterBox = ({children, ...rest}) => {
    return (
        <div className='center-box-container' {...rest}>
            {
                children
            }
        </div>
    )
};

export default CenterBox;
