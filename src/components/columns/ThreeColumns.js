import React from 'react';

const ThreeColumns = () => {
    return (
        <div className='some-page-wrapper'>
            <div className='row'>
                <div className='column-1'>
                    First column
                </div>
                <div className='column-3 silver'>
                    Second column
                </div>
                <div className='column-1'>
                    Third column
                </div>
            </div>
        </div>
    )
};

export default ThreeColumns;
