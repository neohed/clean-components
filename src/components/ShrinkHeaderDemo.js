import React from 'react';
import ShrinkHeader from "./header/ShrinkHeader";
import background from '../image/Joshua_Tree_National_Park_Night_Sky.jpg'

const ShrinkHeaderDemo = () => (
    <div>
        <ShrinkHeader
            title={'Night Sky'}
            startStyle={{
                color: 'lemonchiffon'
            }}
            scrollStyle={{
                color: 'black',
                backgroundColor: 'lavender'
            }}
        />
        <div style={{
            height: '1000px',
            padding: '15px 15px 2500px',
            fontSize: '30px',
            background: `LIGHTYELLOW url(${background}) no-repeat`,
            backgroundSize: '100% auto'
        }}>
        </div>
    </div>
);

export default ShrinkHeaderDemo;
