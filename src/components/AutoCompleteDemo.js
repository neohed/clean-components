import React from 'react'
import AutoComplete from "./auto_complete/AutoComplete";

const suggestions = [
    {id: 1, name: "apples"},
    {id: 2, name: "pears"},
    {id: 3, name: "bananas"},
    {id: 4, name: "mangoes"},
    {id: 5, name: "lemons"},
    {id: 6, name: "apricots"},
    {id: 7, name: "melons"},
    {id: 8, name: "applause"},
    {id: 9, name: "bandannas"},
    {id: 10, name: "mangroves"},
    {id: 11, name: "leopards"},
    {id: 12, name: "apprise"},
    {id: 13, name: "melting"},
    {id: 14, name: "apparent"},
    {id: 15, name: "lotus"},
    {id: 16, name: "peony"},
];

const AutoCompleteDemo = () => {
    return (
        <div style={{
            padding: '20px',
        }}>
            <AutoComplete
                suggestions={suggestions}
                searchTextCallback={console.log}
            />
        </div>
    )
};

export default AutoCompleteDemo;
