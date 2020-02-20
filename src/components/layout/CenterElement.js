import React from 'react';
import './centerElement.css'

const CenterElement = ({children}) => {
    return (
        <div className='center'>
            {
                children
            }
        </div>
    )
};

export default CenterElement;
