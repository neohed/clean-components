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
        template: (percent) => `-webkit-filter:brightness(${percent}%); filter:brightness(${percent}%);`,
        unit: '%',
    },
    {
        name: 'contrast',
        template: (percent) => `-webkit-filter:contrast(${percent}%); filter:contrast(${percent}%);`,
        unit: '%',
    },
    {
        name: 'blur',
        template: (pixel) => `-webkit-filter:blur(${pixel}px); filter:blur(${pixel}px);`,
        unit: 'px',
    },
    {
        name: 'grayscale',
        template: (percent) => `-webkit-filter:grayscale(${percent}%); filter:grayscale(${percent}%);`,
        unit: '%',
    },
    {
        name: 'hue-rotate',
        template: (degrees) => `-webkit-filter:hue-rotate(${degrees}deg); filter:hue-rotate(${degrees}deg);`,
        unit: 'deg',
    },
    {
        name: 'invert',
        template: (percent) => `-webkit-filter:invert(${percent}%); filter:invert(${percent}%);`,
        unit: '%',
    },
    {
        name: 'opacity',
        template: (percent) => `-webkit-filter:opacity(${percent}%); filter:opacity(${percent}%);`,
        unit: '%',
    },
    {
        name: 'sepia',
        template: (percent) => `-webkit-filter:sepia(${percent}%); filter:sepia(${percent}%);`,
        unit: '%',
    },
    {
        name: 'saturate',
        template: (percent) => `-webkit-filter:saturate(${percent}%); filter:saturate(${percent}%);`,
        unit: '%',
    },
]

const reducer = (state, {name, value}) => ({
    ...state,
    [name]: value
})

const CssFilterEditor = ({onCssChanged}) => {
    const [cssFilters, dispatch] = useReducer(reducer, {});
    const css = Object.keys(cssFilters).reduce((filters, key) => filters + cssFilters[key], '')
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

const CssFilterRow = ({name, template, unit, dispatch}) => {
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
                        value: isEnabled ? '' : template(value)
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
                        value: template(value)
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
