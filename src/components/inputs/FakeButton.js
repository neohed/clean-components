import React from 'react';
import './fakeButton.css';

const FakeButton = ({text}) => (
    <div className={'fake-button'}>
        {text}
    </div>
);

export default FakeButton;
