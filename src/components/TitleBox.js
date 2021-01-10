import React from 'react';
import './title-box.css';

const TitleBox = ({title, children}) => {
    return (
        <div
            className='title-box'
        >
            <h1>
                <span>
                {
                    title
                }
                </span>
            </h1>
            {
                children
            }
        </div>
    );
};

export default TitleBox;
