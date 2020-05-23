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
    {id: 14, name: "apparent"},
];

//todo move these functions to autoCompleteUtil.js file
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

function setCaretPosition(element, caretPos) {
    if (element.createTextRange) {
        const range = element.createTextRange();
        range.move('character', caretPos);
        range.select();
    } else {
        if (element.selectionStart) {
            element.focus();
            element.setSelectionRange(caretPos, caretPos);
        } else
            element.focus();
    }
}

function formatStringForSearch(text) {
    //todo Use regex to replace multiple whitespaces with a single whitespace.
}

const AutoComplete = () => {
    const searchInput = useRef(null);
    const [inputText, setInputText] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const [showingSuggestions, setShowingSuggestions] = useState(false);

    //todo finish this then extract to custom hook.
    useEffect(() => {
        const searchInputStyles = window.getComputedStyle(searchInput.current);
        const computedFontSize = searchInputStyles.getPropertyValue("font-size");
        const computedFontFamily = searchInputStyles.getPropertyValue("font-family");

        console.log({computedFontSize, computedFontFamily})
    }, [searchInput])

    return (
        <div className='autocomplete-container'>
            <div className='autocomplete-input-container' style={showingSuggestions ? {
                borderBottomRightRadius: '0',
                borderBottomLeftRadius: '0',
                borderBottom: 'none'
            } : {}}>
                <div style={showingSuggestions ? { borderBottom: '1px solid #dedede' } : {}}>
                    <input
                        className='autocomplete-input'
                        type='text'
                        ref={searchInput}
                        value={inputText}
                        onChange={({target}) => {
                            const text = target.value;
                            setCursorPosition(target.selectionStart);
                            setInputText(text);
                        }}
                    />
                </div>
            </div>
            <Suggestions
                inputText={inputText}
                cursorPosition={cursorPosition}
                setShowingSuggestions={setShowingSuggestions}
                setInputText={setInputText}
                searchInput={searchInput.current}
            />
        </div>
    )
};

const Suggestions = ({
                         inputText = '',
                         cursorPosition,
                         setShowingSuggestions,
                         setInputText,
                         searchInput
                     }) => {
    const searchTextBeforeCursor = inputText.substring(0, cursorPosition);
    const searchWord = getWordBehindCursor(searchTextBeforeCursor);
    const offsetText = getOffsetText(searchTextBeforeCursor); //todo use this to calculate x offset for suggestions.

    console.log({inputText, searchWord, offsetText, cursorPosition});

    if (searchWord === '') {
        //return null
    }
    const lowerSearchWord = searchWord.toLowerCase();
    const matches = searchWord === ''
        ? []
        : suggestions.filter(({name}) =>
            name === lowerSearchWord ||
            name.startsWith(lowerSearchWord)
        );

    if (matches.length === 0) {
        //return null
    }
    setShowingSuggestions(true)

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
                                const newInputText = inputText.substring(0, inputText.lastIndexOf(searchWord)) + name + ' ';
                                setInputText(newInputText);
                                setShowingSuggestions(false);
                                setCaretPosition(searchInput, newInputText.length);
                                searchInput.focus()
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
