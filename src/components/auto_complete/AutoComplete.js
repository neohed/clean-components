import React, {useState, useRef} from 'react'
import { getOffsetText, getWordBehindCursor } from './autoCompleteUtils'
import useGetComputedFontStyles from './useGetComputedFontStyles'
import useDetermineInputWidthFromText from "./useDetermineInputWidthFromText";
import SearchIcon from "./SearchIcon";
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
    {id: 15, name: "lotus"},
    {id: 16, name: "peony"},
];

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
                <div style={showingSuggestions ? { borderBottom: '1px solid #9AA0A6' } : {}}>
                    <SearchIcon />
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

function renderSuggestion(searchWord, suggestionWord) {
    const searchWordLength = searchWord.length;

    if (searchWordLength === suggestionWord.length) {
        return suggestionWord
    } else {
        return <>
            {
                searchWord
            }
            <span style={{fontWeight: 'bold'}}>
                {
                    suggestionWord.substring(searchWordLength)
                }
            </span>
        </>
    }
}

const Suggestions = ({
                         inputText = '',
                         cursorPosition,
                         setShowingSuggestions,
                         setCanShowSuggestions,
                         setInputText,
                         searchInput,
                         computedFontStyles
                     }) => {
    const searchTextBeforeCursor = inputText.substring(0, cursorPosition);
    const searchWord = getWordBehindCursor(searchTextBeforeCursor);
    const offsetText = getOffsetText(searchTextBeforeCursor);
    const offsetTextWidth = useDetermineInputWidthFromText(offsetText, computedFontStyles);

    //TIP: console.log isn't just for debugging. It is also useful to keep an eye on key variables while we develop our code.
    console.log({inputText, searchWord, offsetText, offsetTextWidth, cursorPosition});

    //Sentinel value empty string indicates early termination.
    if (searchWord === '') {
        return null // Not empty string which would cause React to render an empty text node.
    }
    const lowerSearchWord = searchWord.toLowerCase();
    const matches = searchWord === ''
        ? []
        : suggestions.filter(({name}) =>
            name === lowerSearchWord ||
            name.startsWith(lowerSearchWord)
        );

    //Sentinel value of empty array indicates early termination.
    if (matches.length === 0) {
        return null
    }

    setShowingSuggestions(true)

    return (
        <div className='autocomplete-suggestions-container'>
            <ul
                className='autocomplete-suggestions-list'
                style={{
                    marginBlockStart: '0',
                    paddingLeft: `${Math.min(260, 38 + offsetTextWidth)}px`
                }}
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
                                renderSuggestion(searchWord, name)
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default AutoComplete;
