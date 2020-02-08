import React from 'react'
import './scrollOver.css'

const ScrollOver = () => (
    <div id="scroll-wrapper">
        <div id="scroll-fixed" className="scroll-panel">
            Some content here...
        </div>
        <div id="scroll-panel-1" className="scroll-panel">
            Scrolling-Panel 1
        </div>
        <div id="scroll-panel-2" className="scroll-panel">
            Scrolling-Panel 2
        </div>
        <div id="scroll-panel-3" className="scroll-panel">
            Scrolling-Panel 3
        </div>
    </div>
);

export default ScrollOver;
