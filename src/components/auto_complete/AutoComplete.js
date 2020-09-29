import React, {useRef, useState, useEffect} from 'react'
import { isEscapeKeyCode, getOffsetText, getWordBehindCursor, mergeSuggestionIntoInput, formatStringForSearch } from './autoCompleteUtils'
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
    const [hideSuggestions, setHideSuggestions] = useState(true);
    const [matches, setMatches] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    const [offsetText, setOffsetText] = useState('');
    const handleSearchTextUpdate = (text, newCursorPosition) => {
        setInputText(text);
        searchTextCallback(
            formatStringForSearch(text)
        );

        //BUG The cursor position doesn't seem to get updated
        if (newCursorPosition !== undefined) {
            setCursorPosition(newCursorPosition);
            const input = searchInput.current;
            input.focus();
            input.setSelectionRange(newCursorPosition, newCursorPosition);
        }
    }

    useAddEventListener('keydown', (event) => {
        const keyCode = event.keyCode;
        if(isEscapeKeyCode(keyCode)) {
            setHideSuggestions(true)
        }
    });

    useEffect(() => {
        const searchTextBeforeCursor = inputText.substring(0, cursorPosition);
        setSearchWord(getWordBehindCursor(searchTextBeforeCursor));
        setOffsetText(getOffsetText(searchTextBeforeCursor));
    }, [inputText, cursorPosition])

    useEffect(() => {
        //console.log({searchWord})searchWord !== '' &&
        if (suggestions.length > 0) {
            const lowerSearchWord = searchWord.toLowerCase();
            const matches = suggestions.filter(({name}) => {
                if (!name) {
                    return false
                }
                const lowerName = name.toLowerCase();

                return lowerName === lowerSearchWord ||
                    lowerName.startsWith(lowerSearchWord)
            });
            setMatches(matches.length === 0
                ? suggestions
                : matches);
        }
    }, [searchWord, suggestions])

    const offsetTextWidth = useDetermineInputWidthFromText(offsetText, useGetComputedFontStyles(searchInput.current));
    const displaySuggestions = !hideSuggestions && matches.length > 0;


    const [highlightIndex, setHighlightIndex] = useState(-1);
    const keyDownHandlers = {
        ArrowDown: () => {
            setHighlightIndex(highlightIndex + 1)
        },
        ArrowUp: () => {
            if (highlightIndex > -1) {
                setHighlightIndex(highlightIndex - 1)
            }
        },
        Enter: () => {
            console.log('enter')
        },
    };

    return (
        <div
            ref={autoComplete}
            className='autocomplete-container'
            onKeyDown={({key}) => {
                if (displaySuggestions && keyDownHandlers[key]) {
                    keyDownHandlers[key]();
                }
            }}
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
                            handleSearchTextUpdate(text);
                        }}
                    />
                </div>
            </div>
            {
                !hideSuggestions &&
                <Suggestions
                    matches={matches}
                    searchWord={searchWord}
                    offsetTextWidth={offsetTextWidth}
                    updateSearchText={(name) => {
                        const newInputText = mergeSuggestionIntoInput(inputText, cursorPosition, searchWord, name);
                        const newCursorPosition = cursorPosition + newInputText.length - inputText.length;
                        handleSearchTextUpdate(newInputText, newCursorPosition);
                        setHideSuggestions(true)
                    }}
                    highlightIndex={highlightIndex}
                    setHighlightIndex={setHighlightIndex}
                />
            }
        </div>
    )
};

const Suggestions = ({
    matches,
    searchWord,
    offsetTextWidth,
    updateSearchText,
    highlightIndex,
    setHighlightIndex,
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
                onMouseOver={() => setHighlightIndex(-1)}
            >
                {
                    matches.map(({id, name}, i) =>
                        <li
                            key={id}
                            onClick={() => updateSearchText(name)}
                            style={(i === highlightIndex) ? {
                                backgroundColor:  '#ddd'
                            } : {}}
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

export default AutoComplete;
