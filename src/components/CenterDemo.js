import React from 'react';
import CenterElement from "./layout/CenterElement";
import FakeButton from "./inputs/FakeButton";

const CenterDemo = () => (
    <CenterElement
        style={{
            border: '1px solid black',
            width: '250px',
            padding: '8px',
            marginTop: '24px',
            borderRadius: '3px',
        }}>
        <button>
            Click Me
        </button>
        <FakeButton
            text={'Clickable'}
        />
        <div>
            A div
        </div>
        <p>
            A p tag
        </p>
    </CenterElement>
);

export default CenterDemo;
