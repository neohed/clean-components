const ESCAPE = 27;

function isEscapeKeyCode(keyCode) {
    return keyCode === ESCAPE
}

function getOffsetText(text = '') {
    const lastSpaceIndex = text.lastIndexOf(' ');
    if (!lastSpaceIndex) {
        return ''
    }

    return text.substr(0, lastSpaceIndex + 1)
}

function getWordBehindCursor(text = '') {
    if (text === '' || text[text.length - 1] === ' ') {
        return ''
    }

    return text.substring(text.lastIndexOf(' ') + 1)
}

function determineInputWidthFromText(text, styles) {
    const tempElement = document.createElement("span");
    document.body.appendChild(tempElement);

    Object.entries({
        height: 'auto',
        width: 'auto',
        position: 'absolute',
        whiteSpace: 'no-wrap',
        margin: '0',
        padding: '0',
        ...styles
    }).forEach(([key, value]) =>
        tempElement.style[key] = value
    )

    tempElement.innerHTML = text;
    const width = Math.ceil(tempElement.clientWidth);
    document.body.removeChild(tempElement);

    return width
}

function formatStringForSearch(text = '') {
    return text
        .trim()
        .replace(/\s+/g, ' ')
}

export {
    ESCAPE,
    isEscapeKeyCode,
    getOffsetText,
    getWordBehindCursor,
    determineInputWidthFromText,
    formatStringForSearch,
}
