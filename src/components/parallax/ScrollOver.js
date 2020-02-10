import React from 'react'
import img1 from '../../image/PIA23606.jpg'
import './scrollOver.css'

const ScrollOver = () => (
    <div id="scroll-wrapper">
        <div id="scroll-fixed" className="scroll-panel">
            Some content here...
        </div>
        <div id="scroll-relative" className="scroll-panel">
            <div>
                <img src={img1} alt="jupiter storm"/>
            </div>
            <div>
                <div>Some other stuff!</div>
                <div>Some other stuff!</div>
                <div>Some other stuff!</div>
                <div>Some other stuff!</div>
            </div>
            <div>
                <img src={img1} alt="jupiter storm"/>
            </div>
            <div>
                <div>Some other stuff!</div>
                <div>Some other stuff!</div>
                <div>Some other stuff!</div>
                <div>Some other stuff!</div>
            </div>
        </div>
    </div>
);

export default ScrollOver;
