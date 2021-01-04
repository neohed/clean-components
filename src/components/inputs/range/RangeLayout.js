import React from 'react';
import './range-layout.css';

const RangeLayout = ({children}) => {
    return (
        <div
            className='range-layout'
        >
            {
                children
            }
        </div>
    );
};

export default RangeLayout;
