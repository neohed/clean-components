function getSurrogatePairHex(astralCodePoint) {
    // assumes point > 0xffff
    const offset = astralCodePoint - 0x10000,
        lead = 0xd800 + (offset >> 10),
        trail = 0xdc00 + (offset & 0x3ff);
    return [lead.toString(16), trail.toString(16)];
}

function getSurrogatePairInt(astralCodePoint) {
    const highSurrogate =
        Math.floor((astralCodePoint - 0x10000) / 0x400) + 0xD800;
    const lowSurrogate = (astralCodePoint - 0x10000) % 0x400 + 0xDC00;
    return [highSurrogate, lowSurrogate];
}

function convertUnicode(input) {
    return input.replace(/\\u(\w\w\w\w)/g, function(a, b) {
        const charCode = parseInt(b,16);
        return String.fromCharCode(charCode);
    });
}

function hexToCodeUnit(i) {
    return intToCodeUnit(parseInt('0x' + i))
}

function intToCodeUnit(i) {
    return String.fromCharCode(i)
}

export {
    getSurrogatePairHex,
    getSurrogatePairInt,
    convertUnicode,
    hexToCodeUnit,
    intToCodeUnit,
}
