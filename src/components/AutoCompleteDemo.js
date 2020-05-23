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
    * Add X SVG to end of input to clear
 */
