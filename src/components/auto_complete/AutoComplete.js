import React, {useRef, useState, useCallback} from 'react'
import { ESCAPE, isEscapeKeyCode, getOffsetText, getWordBehindCursor } from './autoCompleteUtils'
import useGetComputedFontStyles from './useGetComputedFontStyles'
import useDetermineInputWidthFromText from "./useDetermineInputWidthFromText";
import useAddEventListener from "./useAddEventListener";
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
    const autoComplete = useRef();
    const searchInput = useRef();
    const [inputText, setInputText] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const [canShowSuggestions, setCanShowSuggestions] = useState(true);
    const [showingSuggestions, setShowingSuggestions] = useState(false);
    const [lastKeyCode, setLastKeyCode] = useState(0);
    const computedFontStyles = useGetComputedFontStyles(searchInput);

    const escapePressedCallback = useCallback((event) => {
        const keyCode = event.keyCode;
        setLastKeyCode(keyCode);
        if(isEscapeKeyCode(keyCode)) {
            setCanShowSuggestions(false)
        }
    }, [])

    const mouseClickCallback = useCallback((event) => {
        if (autoComplete.current.contains(event.target)) {
            setLastKeyCode(ESCAPE) // HACK Use the same logic path as pressing the scape key.
            setCanShowSuggestions(false)
        }
    }, [])

    useAddEventListener('keydown', escapePressedCallback);
    useAddEventListener('click', mouseClickCallback);

    const useSuggestionsStyle = !isEscapeKeyCode(lastKeyCode)
        && showingSuggestions
        && inputText.length > 0;

    return (
        <div
            ref={autoComplete}
            className='autocomplete-container'
        >
            <div className='autocomplete-input-container' style={useSuggestionsStyle ? {
                borderBottomRightRadius: '0',
                borderBottomLeftRadius: '0',
                borderBottom: 'none'
            } : {}}>
                <div style={useSuggestionsStyle ? { borderBottom: '1px solid #9AA0A6' } : {}}>
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
                    computedFontStyles={computedFontStyles}
                    searchInput={searchInput.current}
                    setShowingSuggestions={setShowingSuggestions}
                    setInputText={setInputText}
                />
            }
        </div>
    )
};

const Suggestion = ({searchWord, suggestionWord}) => {
    const searchWordLength = searchWord.length;

    return <>
        {
            searchWord
        }
        {
            searchWordLength < suggestionWord.length &&
            <span style={{fontWeight: 'bold'}}>
                {
                    suggestionWord.substring(searchWordLength)
                }
            </span>
        }
    </>
}

const Suggestions = ({
                         inputText = '',
                         cursorPosition,
                         setShowingSuggestions,
                         setInputText,
                         searchInput,
                         computedFontStyles
                     }) => {
    const searchTextBeforeCursor = inputText.substring(0, cursorPosition);
    const searchWord = getWordBehindCursor(searchTextBeforeCursor);
    const offsetText = getOffsetText(searchTextBeforeCursor);
    const offsetTextWidth = useDetermineInputWidthFromText(offsetText, computedFontStyles);

    //TIP: console.log isn't just for debugging. It's also useful to watch important variables during development.
    console.debug({inputText, searchWord, offsetText, offsetTextWidth, cursorPosition});

    //Sentinel value "empty string" indicates early termination.
    if (searchWord === '') {
        return null // return null, not "empty string" which would cause React to render an empty text node.
    }
    const lowerSearchWord = searchWord.toLowerCase();
    const matches = searchWord === ''
        ? []
        : suggestions.filter(({name}) =>
            name === lowerSearchWord ||
            name.startsWith(lowerSearchWord)
        );
console.log('here')
    //Sentinel value of empty array indicates early termination.
    if (matches.length === 0) {
console.log('about to exit')
        setShowingSuggestions(false)
        return null
    }
    setShowingSuggestions(true)

    return (
        <div className='autocomplete-suggestions-container'>
            <ul
                className='autocomplete-suggestions-list'
                style={{
                    marginBlockStart: '0',
                    paddingLeft: `${Math.min(260, 28 + offsetTextWidth)}px`
                }}
            >
                {
                    matches.map(({id, name}) =>
                        <li
                            key={id}
                            onClick={() => {
                                setInputText(
                                    inputText.substring(0, inputText.lastIndexOf(searchWord))
                                    + name
                                    + ' '
                                );
                                setShowingSuggestions(false);
                                searchInput.focus()
                            }}
                        >
                            <Suggestion
                                searchWord={searchWord}
                                suggestionWord={name}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default AutoComplete;
