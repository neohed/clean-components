import React, {useState, useRef, useEffect} from 'react'
import useGetComputedFontStyles from './useGetComputedFontStyles'
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

function determineInputWidthFromText(text, styles) {
    const tempElement = document.createElement("span");
    document.body.appendChild(tempElement);

    Object.entries({
        height: 'auto',
        width: 'auto',
        position: 'absolute',
        whiteSpace: 'no-wrap',
        margin: '0',
        padding: '0',
        ...styles
    }).forEach(([key, value]) =>
        tempElement.style[key] = value
    )

    tempElement.innerHTML = text;
    const width = Math.ceil(tempElement.clientWidth);
    document.body.removeChild(tempElement);

    return width
}
function formatStringForSearch(text) {
    //todo Use regex to replace multiple whitespaces with a single whitespace.
}

const AutoComplete = () => {
    const searchInput = useRef(null);
    const [inputText, setInputText] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const [canShowSuggestions, setCanShowSuggestions] = useState(true);
    const [showingSuggestions, setShowingSuggestions] = useState(false);
    const computedFontStyles = useGetComputedFontStyles(searchInput);

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
                            setCanShowSuggestions(true);
                            setInputText(text);
                        }}
                    />
                </div>
            </div>
            {
                canShowSuggestions &&
                <Suggestions
                    inputText={inputText}
                    cursorPosition={cursorPosition}
                    setCanShowSuggestions={setCanShowSuggestions}
                    setShowingSuggestions={setShowingSuggestions}
                    setInputText={setInputText}
                    searchInput={searchInput.current}
                    computedFontStyles={computedFontStyles}
                />
            }
        </div>
    )
};

const Suggestions = ({
                         inputText = '',
                         cursorPosition,
                         setShowingSuggestions,
                         setCanShowSuggestions,
                         setInputText,
                         searchInput,
                         computedFontStyles
                     }) => {
    const inputMeasure = useRef(null);
    const searchTextBeforeCursor = inputText.substring(0, cursorPosition);
    const searchWord = getWordBehindCursor(searchTextBeforeCursor);
    const offsetText = getOffsetText(searchTextBeforeCursor); //todo use this to calculate x offset for suggestions.

    useEffect(() => {
        const element = inputMeasure.current;

        if (element) {
            const width = determineInputWidthFromText(inputText, computedFontStyles)
            console.log('width: ' + width)
        }
    })
    console.log({inputText, searchWord, offsetText, cursorPosition});

    if (searchWord === '') {
        return null
    }
    const lowerSearchWord = searchWord.toLowerCase();
    const matches = searchWord === ''
        ? []
        : suggestions.filter(({name}) =>
            name === lowerSearchWord ||
            name.startsWith(lowerSearchWord)
        );

    if (matches.length === 0) {
        return null
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
                                setInputText(
                                    inputText.substring(0, inputText.lastIndexOf(searchWord)) + name + ' '
                                );
                                setCanShowSuggestions(false);
                                setShowingSuggestions(false);
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
            <span>
                <input
                    readOnly={true}
                    ref={inputMeasure}
                    value={inputText}
                    className='autocomplete-container-input-measure'
                    style={computedFontStyles}
                />
            </span>
        </div>
    )
};

export default AutoComplete;
