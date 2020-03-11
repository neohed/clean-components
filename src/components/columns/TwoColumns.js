import React from 'react';
import './columns.css'

const TwoColumns = () => {
    return (
        <div className='some-page-wrapper'>
            <div className='row'>
                <div className='column-1'>
                    First column
                </div>
                <div className='column-1 silver'>
                    Second column
                </div>
            </div>
        </div>
    )
};

export default TwoColumns;
