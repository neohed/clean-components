import React from 'react';
import CenterElement from "./layout/CenterElement";

const CenterDemo = () => (
    <CenterElement>
        <button>
            Click Me
        </button>
        <div style={{width: '80px'}}>
            A div
        </div>
        <p style={{width: '80px'}}>A p tag</p>
    </CenterElement>
);

export default CenterDemo;
