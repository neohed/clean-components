import React from 'react';
import './fake-button.css';

const FakeButton = ({text}) => (
    <div className={'fake-button'}>
        {text}
    </div>
);

export default FakeButton;
