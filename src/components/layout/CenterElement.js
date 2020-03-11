import React from 'react';
import './centerElement.css'

const CenterElement = ({children, ...rest}) => {
    return (
        <div className='center' {...rest}>
            {
                children
            }
        </div>
    )
};

export default CenterElement;
