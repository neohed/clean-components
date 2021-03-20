import React, {useReducer, useState, useEffect} from 'react';
import './css-filter-editor.css';

//https://www.w3schools.com/CSSref/css3_pr_filter.asp

function safeParseInt(v, defaultValue = 0) {
    const n = parseInt(v);

    if (isNaN(n)) {
        return defaultValue
    }

    return n
}

const parseInput = (x, type) => {
    const n = Math.max(safeParseInt(x), 0);

    switch (type) {
        case 'deg':
            return Math.min(n, 360)
        default:
            return n
    }
}

const filters = [
    {
        name: 'brightness',
        unit: '%',
    },
    {
        name: 'contrast',
        unit: '%',
    },
    {
        name: 'blur',
        unit: 'px',
    },
    {
        name: 'grayscale',
        unit: '%',
    },
    {
        name: 'hue-rotate',
        unit: 'deg',
    },
    {
        name: 'invert',
        unit: '%',
    },
    {
        name: 'opacity',
        unit: '%',
    },
    {
        name: 'sepia',
        unit: '%',
    },
    {
        name: 'saturate',
        unit: '%',
    },
]

const reducer = (state, {name, value}) => ({
    ...state,
    [name]: value
})

const CssFilterEditor = ({onCssChanged}) => {
    const [cssFilters, dispatch] = useReducer(reducer, {});
    //const css = Object.keys(cssFilters).reduce((filters, key) => filters + cssFilters[key], '')
    const css = Object.values(cssFilters).join(' ');
    useEffect(() => {
        onCssChanged && onCssChanged(css)
    }, [css])

    return (
        <div
            className='css-filter-editor'
        >
            {
                filters.map(filter => <CssFilterRow
                    key={filter.name}
                    {...filter}
                    dispatch={dispatch}
                />)
            }
        </div>
    );
};

const CssFilterRow = ({name, unit, dispatch}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [value, setValue] = useState(0);

    return (
        [
            <input
                key='chk'
                type="checkbox"
                checked={isEnabled}
                onChange={() => {
                    dispatch({
                        name,
                        value: isEnabled ? '' : `${name}(${value}${unit})`
                    })

                    setIsEnabled(!isEnabled)
                }}
            />,
            <label
                key='lbl'
                htmlFor={name}
            >
                {
                    name
                }
            </label>,
            <input
                key='txt'
                name={name}
                type="text"
                value={value}
                onChange={({target}) => {
                    const {value} = target;
                    dispatch({
                        name,
                        value: `${name}(${value}${unit})`
                    })
                    setValue(parseInput(value, unit));
                    setIsEnabled(true)
                }}
            />,
            <span
                key='span'
            >
                {
                    unit
                }
            </span>
        ]
    )
}

export default CssFilterEditor;
