import React, {useState, useEffect} from 'react';
import RangeLayout from "./RangeLayout";
import Range from "./Range";
import ButtonBalance from "./ButtonBalance";
import ButtonLock from "./ButtonLock";
import ButtonUnlock from "./ButtonUnlock";
import './range-group.css';

const summariseLockedRanges = (dataItems) => dataItems.reduce(([sum, count], item) => {
    if (item.isLocked) {
        return [sum + item.value, count + 1]
    }

    return [sum, count]
}, [0, 0]);
//TODO rangeChangeHandler should adjust unlocked ranges proportionally so their relative ratios are maintained.
const balanceRanges = (dataItems, id = -1, value = 0) => {
    const [sumLocked, countLocked] = summariseLockedRanges(dataItems);
    const range1 = 100 - sumLocked;
    const validatedValue = Math.min(Math.max(0, value), range1);
    const range2 = range1 - validatedValue;
    const unlockedRanges = dataItems.length - (countLocked + (id > -1 ? 1 : 0));
    const quotient = Math.floor(range2 / unlockedRanges);
    let remainder = range2 % unlockedRanges;

    return dataItems.map(({label, isLocked, value}, i) => ({
        label,
        isLocked,
        value: (i === id)
            ? validatedValue
            : (isLocked) // Brackets not needed and likely transpiled away but make code more readable by emphasising conditions.
                ? value
                : quotient + (remainder-- > 0 ? 1 : 0) // Equitably split the remainder.
    }))
}

const RangeGroup = ({data, labelPropName, valuePropName}) => {
    const [dataItems, setDataItems] = useState([]);

    useEffect(() => {
        setDataItems(balanceRanges(data.reduce((acc, item) => {
            acc.push({
                label: item[labelPropName],
                value: item[valuePropName],
                isLocked: false
            });

            return acc
        }, [])))
    }, [data, labelPropName, valuePropName])

    const lockButtonClickHandler = (id) => {
        const {label, value, isLocked} = dataItems[id];
        const copy = dataItems.slice();
        copy[id] = {
            label,
            value,
            isLocked: !isLocked
        };
        setDataItems(copy)
    }

    const rangeChangeHandler = (id, value) => setDataItems(balanceRanges(dataItems, id, value));
    const balanceRangesClickHandler = () => setDataItems(balanceRanges(dataItems));

    return (
        <div>
            <ButtonBalance id='balance' clickHandler={balanceRangesClickHandler} />
            <RangeLayout>
                {
                    dataItems.map(({label, value, isLocked}, i) => [
                        <Range
                            key={i}
                            id={i}
                            label={label}
                            value={value}
                            changeHandler={rangeChangeHandler}
                            readOnly={isLocked}
                            disabled={isLocked}
                        />,
                        isLocked
                            ? <ButtonLock
                                key='lock-btn'
                                id={i}
                                clickHandler={lockButtonClickHandler}
                            />
                            : <ButtonUnlock
                                key='unlock-btn'
                                id={i}
                                clickHandler={lockButtonClickHandler}
                            />
                    ])
                }
            </RangeLayout>
        </div>
    );
};

export default RangeGroup;
