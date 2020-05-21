import React, {useState} from 'react'
import TextInput from '../inputs/TextInput'
import './autoComplete.css'

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
    {id: 13, name: "applause"},
];

function showSuggestions(text = '') {
    return text.length > 0
}

function getOffsetText(text = '') {
    const lastSpaceIndex = text.lastIndexOf(' ');
    if (!lastSpaceIndex) {
        return ''
    }

    return text.substr(0, lastSpaceIndex + 1)
}

function getWordBehindCursor(text = '') {
    if (text === '' || text[text.length - 1] === ' ') {
        return ''
    }

    return text.substring(text.lastIndexOf(' ') + 1)
}

function formatStringForSearch(text) {
    //todo Use regex to replace multiple whitespaces with a single whitespace.
}

const AutoComplete = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className='autocomplete-container'>
            <TextInput
                value={searchText}
                changeHandler={({target}) => {
                    const text = target.value;
                    setSearchText(text);
                }}
            />
            <Suggestions searchText={searchText}/>
        </div>
    )
};

const Suggestions = ({searchText = ''}) => {
    const searchWord = getWordBehindCursor(searchText);
    const offsetText = getOffsetText(searchText); //todo use this to calculate suggestions box x offset.

    console.log({searchText, searchWord, offsetText});

    if (searchWord === '') {
        return ''
    }
    const lowerSearchWord = searchWord.toLowerCase();
    const matches = suggestions.filter(element =>
        element.name === lowerSearchWord ||
        element.name.startsWith(lowerSearchWord)
    );

    return (
        <ul>
            {
                matches.map(({id, name}) => <li key={id}>{name}</li>)
            }
        </ul>
    )
};

export default AutoComplete;
