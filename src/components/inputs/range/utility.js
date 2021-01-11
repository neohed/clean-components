const summariseLockedRanges = (dataItems) => dataItems.reduce(([sum, count], item) => {
    if (item.isLocked) {
        return [sum + item.value, count + 1]
    }

    return [sum, count]
}, [0, 0]);

//TODO rangeChangeHandler should adjust unlocked ranges proportionally so their relative ratios are maintained.
const balanceRanges = (dataItems, index = -1, newPercentage = 0) => {
    const [sumLocked, countLocked] = summariseLockedRanges(dataItems);
    const range1 = 100 - sumLocked;
    const validatedValue = Math.min(Math.max(0, newPercentage), range1);
    const range2 = range1 - validatedValue;
    const unlockedRanges = dataItems.length - (countLocked + (index > -1 ? 1 : 0));
    const quotient = Math.floor(range2 / unlockedRanges);
    let remainder = range2 % unlockedRanges;

    return dataItems.map(({id, label, percentage, isLocked}, i) => ({
        id,
        label,
        isLocked,
        percentage: (i === index)
            ? validatedValue
            : (isLocked) // Brackets not needed and likely transpiled away but make code more readable by emphasising conditions.
                ? newPercentage
                : quotient + (remainder-- > 0 ? 1 : 0) // Equitably split the remainder.
    }))
}

const countLockedRanges = (dataItems) => dataItems.reduce((count, item) => count + item.isLocked, 0);

export {
    balanceRanges,
    countLockedRanges,
}
