import React from 'react';
import {getSurrogatePairInt, intToCodeUnit} from './unicode';

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

const EmojiRange = () => {
    const codes = [];
    const keys = Object.keys(ranges);

    keys.forEach(key => {
        codes.push(<li key={key}>
            <h4>
                {
                    key
                }
            </h4>
        </li>)
        const {from, to} = ranges[key];
        for (let i = from; i <= to; i++) {
            const [a, b] = getSurrogatePairInt(i);

            codes.push(<li key={i}>
                {
                    intToCodeUnit(a) + intToCodeUnit(b)
                }
            </li>)
        }
    })
    
    return (
        <div>
            <h4>
                Emojis
            </h4>
            <ul>
                {
                    codes
                }
            </ul>
        </div>
    );
};

export default EmojiRange;
