import React, {useState, useEffect} from 'react';
import RangeLayout from "./RangeLayout";
import Range from "./Range";
import ButtonBalance from "./ButtonBalance";
import ButtonLock from "./ButtonLock";
import ButtonUnlock from "./ButtonUnlock";
import {balanceRanges, countLockedRanges} from './utility';
import IconClose from '../../img/close.svg';
import './range-group.css';

const RangeGroup = ({
                        data,
                        changeHandler,
                        idPropName = 'id',
                        labelPropName = 'name',
                        percentagePropName = 'percentage'
                    }) => {
    const [dataItems, setDataItems] = useState([]);

    const callChangeHandler = (newDataItems) => {
        changeHandler && changeHandler(newDataItems.map(({id, label, percentage}) => ({
            [idPropName]: id,
            [labelPropName]: label,
            [percentagePropName]: percentage
        })))
    }

    useEffect(() => {
        const newDataItems = balanceRanges(data.reduce((acc, item) => {
            acc.push({
                id: item[idPropName],
                label: item[labelPropName],
                percentage: item[percentagePropName],
                isLocked: false
            });

            return acc
        }, []));

        setDataItems(newDataItems);
        callChangeHandler(newDataItems)
    }, [data, idPropName, labelPropName, percentagePropName])

    const lockButtonClickHandler = (index) => {
        const {id, label, percentage, isLocked} = dataItems[index];
        if (!isLocked && countLockedRanges(dataItems) + 2 === dataItems.length) {
            return // Always need at least 2 sliders unlocked.
        }
        const copy = dataItems.slice();
        copy[index] = {
            id,
            label,
            percentage,
            isLocked: !isLocked
        };
        setDataItems(copy)
    }

    const rangeChangeHandler = (index, percentage) => {
        const newData = balanceRanges(dataItems, index, percentage);
        setDataItems(newData);
        callChangeHandler(newData)
    }
    const balanceRangesClickHandler = () => setDataItems(balanceRanges(dataItems));

    return (
        <div>
            <RangeLayout>
                <ButtonBalance
                    id='balance'
                    clickHandler={balanceRangesClickHandler}
                    style={{
                        visibility: (dataItems.length < 2) ? 'hidden' : 'visible'
                    }}
                />
                {
                    dataItems.map(({label, percentage, isLocked}, i) => [
                        <Range
                            key={i}
                            id={i}
                            label={label}
                            value={percentage}
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
                            />,
                        <button
                            key='remove-btn'
                            className='remove-button'
                            onClick={() => {
                                const newDataItems = dataItems.slice();
                                newDataItems.splice(i, 1);
                                const balancedData = balanceRanges(newDataItems);

                                setDataItems(balancedData);
                                callChangeHandler(balancedData)
                            }}
                        >
                            <img
                                style={{
                                    width: '28px',
                                }}
                                src={IconClose}
                                alt="X close icon"
                            />
                        </button>
                    ])
                }
            </RangeLayout>
        </div>
    );
};

export default RangeGroup;
