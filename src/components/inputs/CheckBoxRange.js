import React, {useState, useEffect} from 'react';
import Checkbox from "./Checkbox";

const CheckBoxRange = ({
                           data,
                           labelPropName = 'label',
                           valuePropName = 'value',
                           isCheckedPropName = 'isChecked'
}) => {
    const [dataItems, setDataItems] = useState([]);

    useEffect(() => {
        setDataItems(data.map((item) => ({
            value: item[valuePropName],
            label: item[labelPropName],
            isChecked: !!item[isCheckedPropName] ?? false
        })))
    }, [data, labelPropName, valuePropName, isCheckedPropName])

    return (
        <div
            className='checkbox-range'
        >
            {
                dataItems.map(({value, label, isChecked}, i) => <Checkbox
                    key={i}
                    id={value}
                    label={label}
                    isChecked={isChecked}
                    changeHandler={(isChecked) => {
                        const copy = dataItems.slice();
                        const originalItem = dataItems[i];
                        copy[i] = {
                            ...originalItem,
                            isChecked
                        }
                        setDataItems(copy)
                    }}
                />)
            }
        </div>
    );
};

export default CheckBoxRange;
