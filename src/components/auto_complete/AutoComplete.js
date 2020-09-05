import React, {useRef, useState, useCallback, useEffect} from 'react'
import { ESCAPE, isEscapeKeyCode, getOffsetText, getWordBehindCursor } from './autoCompleteUtils'
import useGetComputedFontStyles from './useGetComputedFontStyles'
import useDetermineInputWidthFromText from "./useDetermineInputWidthFromText";
import useAddEventListener from "./useAddEventListener";
import SearchIcon from "./SearchIcon";
import './autoComplete.css'

const AutoComplete = ({
    searchTextCallback,
    suggestions = [],
}) => {
    const autoComplete = useRef();
    const searchInput = useRef();
    const [inputText, setInputText] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const [hideSuggestions, setHideSuggestions] = useState(false);
    const [lastKeyCode, setLastKeyCode] = useState(0);

    const escapePressedCallback = useCallback((event) => {
        const keyCode = event.keyCode;
        setLastKeyCode(keyCode);
        if(isEscapeKeyCode(keyCode)) {
            setHideSuggestions(true)
        }
    }, [])

    const mouseClickCallback = useCallback((event) => {
        if (autoComplete.current.contains(event.target)) {
            setLastKeyCode(ESCAPE) // HACK Use the same logic path as pressing the scape key.
            setHideSuggestions(true)
        }
    }, [])

    useAddEventListener('keydown', escapePressedCallback);
    useAddEventListener('click', mouseClickCallback);

    const searchTextBeforeCursor = inputText.substring(0, cursorPosition);
    const searchWord = getWordBehindCursor(searchTextBeforeCursor);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        if (searchWord !== '' && suggestions.length > 0) {
            const lowerSearchWord = searchWord.toLowerCase();
            setMatches(searchWord === ''
                ? []
                : suggestions.filter(({name}) =>
                    name === lowerSearchWord ||
                    name.startsWith(lowerSearchWord)
                ));
        }
    }, [searchWord, suggestions, setMatches])

    const displaySuggestions = useCallback(() => {
        console.log({escape: isEscapeKeyCode(lastKeyCode), hideSuggestions, matches: matches.length})
        return !isEscapeKeyCode(lastKeyCode)
            && !hideSuggestions
            && matches.length > 0
    }, [lastKeyCode, hideSuggestions, matches])

    const offsetText = getOffsetText(searchTextBeforeCursor);
    const offsetTextWidth = useDetermineInputWidthFromText(offsetText, useGetComputedFontStyles(searchInput.current));

    return (
        <div
            ref={autoComplete}
            className='autocomplete-container'
        >
            <div className='autocomplete-input-container' style={displaySuggestions() ? {
                borderBottomRightRadius: '0',
                borderBottomLeftRadius: '0',
                borderBottom: 'none'
            } : {}}>
                <div style={displaySuggestions() ? { borderBottom: '1px solid #9AA0A6' } : {}}>
                    <SearchIcon />
                    <input
                        className='autocomplete-input'
                        type='text'
                        ref={searchInput}
                        value={inputText}
                        onChange={({target}) => {
                            const text = target.value;
                            setCursorPosition(target.selectionStart);
                            setHideSuggestions(false);
                            setInputText(text);
                        }}
                    />
                </div>
            </div>
            {
                !hideSuggestions &&
                <Suggestions
                    matches={matches}
                    inputText={inputText}
                    searchWord={searchWord}
                    offsetTextWidth={offsetTextWidth}
                    searchInput={searchInput.current}
                    setHideSuggestions={setHideSuggestions}
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
    matches,
    inputText = '',
    searchWord,
    offsetTextWidth,
    setHideSuggestions,
    setInputText,
    searchInput,
}) => {
    return (
        <div
            style={{visibility: matches.length > 0 ? 'visible' : 'hidden'}}
            className='autocomplete-suggestions-container'
        >
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
                                setHideSuggestions(true);
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
