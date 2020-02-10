import React from 'react'
import './cleanButton.css'

const CleanButton = ({text, id, clickHandler}) => (
    <button
        value={id}
        className={'clean-button'}
        onClick={() => clickHandler(id)}
    >
        {
            text
        }
    </button>
);

export default CleanButton;
