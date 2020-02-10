import React from 'react';
import ShrinkHeader from "./header/ShrinkHeader";
import background from '../image/Joshua_Tree_National_Park_Night_Sky.jpg'

const ShrinkHeaderDemo2 = () => (
    <div>
        <ShrinkHeader title={'The Header'} />
        <div style={{
            height: '1000px',
            marginTop: '200px',
            padding: '15px 15px 2500px',
            fontSize: '30px',
            backgroundSize: '100% auto'
        }}>
            Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
);

export default ShrinkHeaderDemo2;
