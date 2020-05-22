import React, {useState, useRef, useEffect} from 'react'
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
    {id: 14, name: "applause"},
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
    const searchInput = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const [suggestionsShowing, setSuggestionsShowing] = useState(false);

    useEffect(() => {
        const searchInputStyles = window.getComputedStyle(searchInput.current);
        const computedFontSize = searchInputStyles.getPropertyValue("font-size");
        const computedPadding = searchInputStyles.getPropertyValue("padding");

        console.log({computedFontSize, computedPadding})
    }, [searchInput])

    return (
        <div className='autocomplete-container'>
            <div className='autocomplete-input-container' style={suggestionsShowing ? {
                borderBottomRightRadius: '0',
                borderBottomLeftRadius: '0',
                borderBottom: 'none'
            } : {}}>
                <div style={suggestionsShowing ? {borderBottom: '1px solid #dedede'} : {}}>
                    <input
                        className='autocomplete-input'
                        ref={searchInput}
                        type='text'
                        value={searchText}
                        onChange={({target}) => {
                            const text = target.value;
                            setCursorPosition(target.selectionStart);
                            setSearchText(text)
                        }}
                    />
                </div>
            </div>
            <Suggestions
                searchText={searchText}
                cursorPosition={cursorPosition}
                setSuggestionsShowing={setSuggestionsShowing}
            />
        </div>
    )
};

const Suggestions = ({searchText = '', cursorPosition, setSuggestionsShowing}) => {
    const searchTextBeforeCursor = searchText.substring(0, cursorPosition);
    const searchWord = getWordBehindCursor(searchTextBeforeCursor);
    const offsetText = getOffsetText(searchTextBeforeCursor); //todo use this to calculate x offset for suggestions.

    console.log({searchText, searchWord, offsetText, cursorPosition});

    if (searchWord === '') {
        return null
    }
    const lowerSearchWord = searchWord.toLowerCase();
    const matches = suggestions.filter(({name}) =>
        name === lowerSearchWord ||
        name.startsWith(lowerSearchWord)
    );
    setSuggestionsShowing(matches.length > 0)

    return (
        <div className='autocomplete-suggestions-container'>
            <ul
                className='autocomplete-suggestions-list'
                style={{ marginBlockStart: '0' }}
            >
                {
                    matches.map(({id, name}) =>
                        <li
                            key={id}
                            onClick={() => {
                                setSuggestionsShowing(false)
                            }}
                        >
                            {
                                name
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default AutoComplete;
