import React, {useState} from 'react';
import Select from "./Select";
import './select-append.css';

const SelectAppend = ({options, textProp, valueProp = 'value', selectionChangedHandler, addNewHandler, selectedValue}) => {
    const [selectMode, setSelectMode] = useState(true);
    const [newItem, setNewItem] = useState('');
    const addNew = ' - Add New - ';
    const optionsAppend = [
        ...options,
        {
            [textProp]: addNew,
            [valueProp]: addNew,
        }
    ]
    const onChangeHandler = ({target}) => {
        const {value} = target;

        if (value === addNew) {
            setSelectMode(false)
        } else {
            selectionChangedHandler(value)
        }
    }
    return (
        <div
            className='select-append'
        >
            {
                selectMode
                    ? <Select
                        textProp={textProp}
                        valueProp={valueProp}
                        options={optionsAppend}
                        changeHandler={onChangeHandler}
                        selectedValue={selectedValue}
                    />
                    : <div>
                        <input
                            type="text"
                            value={newItem}
                            onChange={({target}) => setNewItem(target.value)}
                        />
                        <button
                            onClick={() => {
                                addNewHandler(newItem);
                                setNewItem('');
                                setSelectMode(true)
                            }}
                        >
                            Add
                        </button>
                        <button
                            onClick={() => {
                                setNewItem('');
                                setSelectMode(true)
                            }}
                        >
                            Cancel
                        </button>
                    </div>
            }
        </div>
    );
};

export default SelectAppend;
