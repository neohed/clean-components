const summariseLockedRanges = (dataItems) => dataItems.reduce(([sum, count], item) => {
    if (item.isLocked) {
        return [sum + item.value, count + 1]
    }

    return [sum, count]
}, [0, 0]);

//TODO rangeChangeHandler should adjust unlocked ranges proportionally so their relative ratios are maintained.
const balanceRanges = (dataItems, index = -1, value = 0) => {
    const [sumLocked, countLocked] = summariseLockedRanges(dataItems);
    const range1 = 100 - sumLocked;
    const validatedValue = Math.min(Math.max(0, value), range1);
    const range2 = range1 - validatedValue;
    const unlockedRanges = dataItems.length - (countLocked + (index > -1 ? 1 : 0));
    const quotient = Math.floor(range2 / unlockedRanges);
    let remainder = range2 % unlockedRanges;

    return dataItems.map(({label, isLocked, value}, i) => ({
        label,
        isLocked,
        value: (i === index)
            ? validatedValue
            : (isLocked) // Brackets not needed and likely transpiled away but make code more readable by emphasising conditions.
                ? value
                : quotient + (remainder-- > 0 ? 1 : 0) // Equitably split the remainder.
    }))
}

const countLockedRanges = (dataItems) => dataItems.reduce((count, item) => count + item.isLocked, 0);

export {
    balanceRanges,
    countLockedRanges,
}
