import React, {useState, useEffect} from 'react';
import RangeLayout from "./RangeLayout";
import Range from "./Range";
import ButtonWrapper from "../ButtonWrapper";
import IconLock from './lock.svg';
import IconUnlock from './unlock.svg';
import IconScales from './scales.svg';
import './range-group.css';

const LockButton = ({clickHandler, id}) => <ButtonWrapper
    id={id}
    clickHandler={clickHandler}
    className='range-lock-button'
>
    <img src={IconLock} alt="locked padlock icon"/>
</ButtonWrapper>

const UnlockButton = ({clickHandler, id}) => <ButtonWrapper
    id={id}
    clickHandler={clickHandler}
    className='range-lock-button'
>
    <img src={IconUnlock} alt="unlocked padlock icon"/>
</ButtonWrapper>

const BalanceButton = ({clickHandler, id}) => <ButtonWrapper
    id={id}
    clickHandler={clickHandler}
    className='scales-button'
>
    <img src={IconScales} alt="balanced scales icon"/>
</ButtonWrapper>

const countLockedRanges = (dataItems) => dataItems.reduce((count, item) => count + item.isLocked, 0);
const summariseLockedRanges = (dataItems, id) => dataItems.reduce(([sum, count], item, i) => {
    if (item.isLocked || i === id) {
        return [sum + item.value, count + 1]
    }

    return [sum, count]
}, [0, 0])

const RangeGroup = ({data, labelPropName, valuePropName}) => {
    const [dataItems, setDataItems] = useState([]);

    useEffect(() => {
        setDataItems(data.reduce((acc, item, i) => {
            acc.push({
                label: item[labelPropName],
                value: item[valuePropName],
                isLocked: false
            });

            return acc
        }, []))
    }, [data, labelPropName, valuePropName])

    const lockButtonClickHandler = (id) => {
        const lockedItemCount = countLockedRanges(data);
        if (lockedItemCount + 2 >= dataItems.length) {
            return // Makes no sense to have only 1 locked item.
        }
        const {label, value, isLocked} = dataItems[id];
        const copy = dataItems.slice();
        copy[id] = {
            label,
            value,
            isLocked: !isLocked
        };
        setDataItems(copy)
    }

    const rangeChangeHandler = (id, value) => {
        const validatedValue = Math.min(Math.max(0, value), 100);
        const [sumLocked, countLocked] = summariseLockedRanges(dataItems, id);
        const rem = (100 - sumLocked) / (dataItems.length - countLocked);

        setDataItems(dataItems.map(({label, isLocked, value}, i) => ({
            label,
            isLocked,
            value: (i === id)
                ? validatedValue
                : (isLocked) // Brackets not needed and likely transpiled away but make code more readable by emphasising conditions.
                    ? value
                    : rem
        })))
    }

    const balanceClickHandler = () => {
        const [sumLocked, countLocked] = summariseLockedRanges(dataItems, -1); //HACK we don't have an "in use" range.
        const rem = (100 - sumLocked) / (dataItems.length - countLocked);

        setDataItems(dataItems.map(({label, isLocked, value}) => ({
            label,
            isLocked,
            value: isLocked
                ? value
                : rem
        })))
    }

    return (
        <div>
            <BalanceButton id='balance' clickHandler={balanceClickHandler} />
            <RangeLayout>
                {
                    dataItems.map(({label, value, isLocked}, i) => [
                        <Range
                            key={i}
                            id={i}
                            label={label}
                            value={value}
                            changeHandler={rangeChangeHandler}
                            readonly={isLocked}
                        />,
                        isLocked
                            ? <LockButton
                                key='lock-btn'
                                id={i}
                                clickHandler={lockButtonClickHandler}
                            />
                            : <UnlockButton
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
