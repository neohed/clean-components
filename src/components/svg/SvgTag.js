import React from 'react';

// https://en.wikipedia.org/wiki/Scalable_Vector_Graphics
const SvgTag = () => {
    return (
        <svg width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#fff" stroke="#000" x="-70" y="-70" width="390" height="390"/>
            <g opacity="0.8">
                <rect x="25" y="25" width="200" height="200" fill="green" strokeWidth="4" stroke="pink" />
                <circle cx="125" cy="125" r="75" fill="orange" />
                <polyline points="50,150 50,200 200,200 200,100" stroke="red" strokeWidth="4" fill="none" />
                <line x1="50" y1="50" x2="200" y2="200" stroke="blue" strokeWidth="4" />
            </g>
        </svg>
    );
};

export default SvgTag;
