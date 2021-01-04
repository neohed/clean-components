import React, {useState, useEffect} from 'react';
import RangeLayout from "./RangeLayout";
import Range from "./Range";
import ButtonWrapper from "../ButtonWrapper";
import IconLock from './lock.svg';
import UnlockIcon from './unlock.svg';
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
    <img src={UnlockIcon} alt="unlocked padlock icon"/>
</ButtonWrapper>

const RangeGroup = ({data, labelPropName, valuePropName}) => {
    const [dataItems, setDataItems] = useState({});

    useEffect(() => {
        setDataItems(data.reduce((acc, item, i) => {
            acc[i] = {
                label: item[labelPropName],
                value: item[valuePropName],
                isLocked: false
            };

            return acc
        }, {}))
    }, [data])

    const lockButtonClickHandler = (id) => {
        const {label, value, isLocked} = dataItems[id];
        setDataItems({
            ...dataItems,
            [id]: {
                label,
                value,
                isLocked: !isLocked
            }
        })
    }

    const rangeChangeHandler = (id, value) => {
        const validatedValue = Math.min(Math.max(0, value), 100);
        const {label, isLocked} = dataItems[id];
        setDataItems({
            ...dataItems,
            [id]: {
                label,
                isLocked,
                value: validatedValue
            }
        })
    }

    return (
        <RangeLayout>
            {
                Object.values(dataItems).map(({label, value, isLocked}, i) => [
                    <Range
                        key={i}
                        id={i}
                        label={label}
                        value={value}
                        changeHandler={rangeChangeHandler}
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
    );
};

export default RangeGroup;
