import React, {useState, useEffect, useCallback} from 'react';
import RangeLayout from "./RangeLayout";
import Range from "./Range";
import ButtonBalance from "./ButtonBalance";
import ButtonLock from "./ButtonLock";
import ButtonUnlock from "./ButtonUnlock";
import {balanceRanges, countLockedRanges} from './utility';
import IconClose from './close.svg';
import './range-group.css';

const RangeGroup = ({
                        data,
                        itemRemovedHandler,
                        percentagesUpdatedHandler,
                        idPropName = 'id',
                        labelPropName = 'name',
                        percentagePropName = 'percentage'
                    }) => {
    const [dataItems, setDataItems] = useState([]);

    const callChangeHandler = useCallback((newDataItems) => {
        percentagesUpdatedHandler && percentagesUpdatedHandler(newDataItems.map(({id, label, percentage}) => ({
            [idPropName]: id,
            [labelPropName]: label,
            [percentagePropName]: percentage
        })))
    }, [idPropName, labelPropName, percentagePropName, percentagesUpdatedHandler])

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
    }, [data, idPropName, labelPropName, percentagePropName, callChangeHandler])

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
                    dataItems.map(({id, label, percentage, isLocked}, index) => [
                        <Range
                            key={index}
                            id={index}
                            label={label}
                            value={percentage}
                            changeHandler={rangeChangeHandler}
                            readOnly={isLocked}
                            disabled={isLocked}
                        />,
                        isLocked
                            ? <ButtonLock
                                key='lock-btn'
                                id={index}
                                clickHandler={lockButtonClickHandler}
                            />
                            : <ButtonUnlock
                                key='unlock-btn'
                                id={index}
                                clickHandler={lockButtonClickHandler}
                            />,
                        <button
                            key='remove-btn'
                            className='remove-button'
                            onClick={() => itemRemovedHandler(id, index)}
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
