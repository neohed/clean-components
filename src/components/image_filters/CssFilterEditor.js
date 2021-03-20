import React, {useState, useEffect} from 'react';
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

const CssFilterEditor = ({onCssChanged}) => {
    const [cssFilters, setCssFilters] = useState({});
    const css = Object.values(cssFilters).join();
    useEffect(() => {
        onCssChanged && onCssChanged(css)
    }, [css])

    return (
        <div
            className='css-filter-editor'
        >
            {
                filters.map(filter => <CssFilterRow
                    {...filter}
                    addCss={setCssFilters}
                />)
            }
            <div>
                {
                    css
                }
            </div>
        </div>
    );
};

const CssFilterRow = ({name, template, unit, addCss}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [value, setValue] = useState(0);

    return (
        <div>
            <input
                type="checkbox"
                value={isEnabled}
                onChange={() => {
                    if (!isEnabled) {
                        addCss(name, template(value))
                    }
                    setIsEnabled(!isEnabled)
                }}
            />
            <label
                htmlFor={name}
            >
                {
                    name
                }
            </label>
            <input
                name={name}
                type="text"
                value={value}
                onChange={({target}) => {
                    const {value} = target;
                    addCss(name, template(value))
                    setValue(parseInput(value, unit))
                }}
            />
            <span>
                {
                    unit
                }
            </span>
        </div>
    )
}

export default CssFilterEditor;
