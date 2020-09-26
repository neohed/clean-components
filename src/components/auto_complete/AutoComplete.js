import React, {useRef, useState, useEffect} from 'react'
import { isEscapeKeyCode, getOffsetText, getWordBehindCursor } from './autoCompleteUtils'
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

    useAddEventListener('keydown', (event) => {
        const keyCode = event.keyCode;
        if(isEscapeKeyCode(keyCode)) {
            setHideSuggestions(true)
        }
    });
    useAddEventListener('click', (event) => {
        if (autoComplete.current.contains(event.target)) {
            setHideSuggestions(true)
        }
    });

    const searchTextBeforeCursor = inputText.substring(0, cursorPosition);
    const searchWord = getWordBehindCursor(searchTextBeforeCursor);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        if (searchWord !== '' && suggestions.length > 0) {
            const lowerSearchWord = searchWord.toLowerCase();
            setMatches(suggestions.filter(({name}) =>
                    name === lowerSearchWord ||
                    name.startsWith(lowerSearchWord)
                ));
        }
    }, [searchWord, suggestions])

    const offsetText = getOffsetText(searchTextBeforeCursor);
    const offsetTextWidth = useDetermineInputWidthFromText(offsetText, useGetComputedFontStyles(searchInput.current));
    const displaySuggestions = !hideSuggestions && matches.length > 0;

    return (
        <div
            ref={autoComplete}
            className='autocomplete-container'
        >
            <div className='autocomplete-input-container' style={displaySuggestions ? {
                borderBottomRightRadius: '0',
                borderBottomLeftRadius: '0',
                borderBottom: 'none'
            } : {}}>
                <div style={displaySuggestions ? { borderBottom: '1px solid #9AA0A6' } : {}}>
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
