import React from 'react'
import './cleanButton.css'

const CleanButton = ({text, clickHandler}) => (
    <button
        className={'clean-button'}
        onClick={clickHandler}
    >
        {
            text
        }
    </button>
);

export default CleanButton;
