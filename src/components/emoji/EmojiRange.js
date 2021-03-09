import React, {useState} from 'react';
import {getSurrogatePairInt, intToCodeUnit} from './unicode';
import './emoji-range.css';

const dingbats = {
    from: 0x2702,
    to: 0x27B0,
};

const enclosed = {
    from: 0x24C2,
    to: 0x1F251,
};

const ranges = {
    emoticons: {
        from: 0x1F600,
        to: 0x1F636,
    },
    transport: {
        from: 0x1F680,
        to: 0x1F6C5,
    },
    other: {
        from: 0x1F30D,
        to: 0x1F567,
    }
}

function toEmoji(i) {
    const [a, b] = getSurrogatePairInt(i);
    return intToCodeUnit(a) + intToCodeUnit(b)
}

const EmojiRange = () => {
    const [selected, setSelected] = useState('');
    const codes = [];
    const keys = Object.keys(ranges);

    keys.forEach(key => {
        codes.push(
            <h4
                key={key}
            >
                {
                    key
                }
            </h4>
        )
        const {from, to} = ranges[key];
        for (let i = from; i <= to; i++) {
            codes.push(<div
                key={i}
                onClick={() => {
                    setSelected(i)
                }}
            >
                {
                    toEmoji(i)
                }
            </div>)
        }
    })

    return (
        <div>
            {
                toEmoji(selected)
            }
            <div
                className='emoji-container'
            >
                {
                    codes
                }
            </div>
        </div>
    );
};

export default EmojiRange;
