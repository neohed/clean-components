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
    {id: 17, name: "zoetrope"},
    {id: 18, name: "yantra"},
    {id: 19, name: "xylophone"},
    {id: 20, name: "wolf"},
    {id: 21, name: "vole"},
    {id: 22, name: "utonagan"},
    {id: 23, name: "tarantula"},
    {id: 24, name: "scorpion"},
    {id: 25, name: "rabbit"},
    {id: 26, name: "quail"},
    {id: 27, name: "pony"},
    {id: 28, name: "orange"},
    {id: 29, name: "nightshade"},
    {id: 30, name: "karaoke"},
    {id: 31, name: "jeep"},
    {id: 32, name: "igloo"},
    {id: 33, name: "hotel"},
    {id: 34, name: "gerund"},
    {id: 35, name: "fox"},
    {id: 36, name: "emu"},
    {id: 37, name: "egret"},
    {id: 38, name: "dog"},
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
