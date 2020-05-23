import React from 'react'
import AutoComplete from "./auto_complete/AutoComplete";

const AutoCompleteDemo = () => {
    return (
        <div style={{
            padding: '20px',
        }}>
            <AutoComplete/>
        </div>
    )
};

export default AutoCompleteDemo;
/*
    TODO:

    * Close suggestions when clicking away from control.
    * Make part of autocomplete suggestion text not yet typed, bold.
    * Add search spyglass SVG icon to start of input
    * Add X SVG to end of input to clear
    * Position text li in line with start of current word.
 */
