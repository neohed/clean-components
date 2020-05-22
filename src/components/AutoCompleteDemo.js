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
    TODO

    * Standardise font size in search input and suggestions list.
    * Find way to communicate to parent component when suggestions are showing.
    * When suggestions showing, change search input border radius to top corners only and change bottom border to not
      full width, like google.
    * Make part of autocomplete suggestion text not yet typed, bold - like google.
    * Add search spyglass SVG icon to start of input
    * Add X SVG to end of input to clear
 */
