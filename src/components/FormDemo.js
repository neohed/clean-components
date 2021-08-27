import React, {useState} from 'react';
import Checkbox from "./inputs/Checkbox";
import CleanButton from "./inputs/CleanButton";
import Select from "./inputs/Select";
import Expander from "./Expander";
import CheckBoxRange from "./inputs/CheckBoxRange";
import TitleBox from "./TitleBox";
import TextInput from "./inputs/TextInput";
import SelectAppend from "./inputs/SelectAppend";
import Paging from "./Paging";
import RatioChart from "./RatioChart";

const dividerRow = {
    padding: '10px',
    margin: '10px'
}

const selectOptions = () => ([
    {value: 1, text: 'One'},
    {value: 2, text: 'Two'},
    {value: 3, text: 'Three'},
    {value: 4, text: 'Four'}
])

const checkBoxOptions = [
    {
        label: 'first',
        value: 'first',
        isChecked: 0
    },
    {
        label: 'second',
        value: 'second',
        isChecked: 0
    },
    {
        label: '3rd',
        value: '2rd',
        isChecked: 0
    },
]

const FormDemo = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    const [items, setItems] = useState(selectOptions())
    const [selectedPage, setSelectedPage] = useState(1);

    return (
        <div>
            <div style={dividerRow}>
                <TextInput
                    label='Type Something'
                    style={{
                        width: '350px'
                    }}
                    value={''}
                    changeHandler={txt => console.log(txt)}
                />
            </div>
            <div style={dividerRow}>
                <Checkbox
                    id={'chk1'}
                    isChecked={isChecked}
                    label={'Click me!'}
                    changeHandler={(checked) => setIsChecked(checked)}
                />
            </div>
            <div style={dividerRow}>
                <CleanButton
                    text={'Clicked Button!'}
                    clickHandler={txt => console.log(txt)}
                />
            </div>
            <div style={dividerRow}>
                <Select
                    label={'A Select'}
                    options={selectOptions()}
                    selectedValue={selectedValue}
                    changeHandler={setSelectedValue}
                />
            </div>
            <div style={dividerRow}>
                <TitleBox
                    title='A Checkbox Range'
                >
                    <CheckBoxRange
                        data={checkBoxOptions}
                    />
                </TitleBox>
            </div>
            <div style={dividerRow}>
                <Expander
                    headerContent={isOpen => <div>Click to {isOpen ? 'close' : 'open'}</div>}
                >
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>consectetur</li>
                        <li>adipisicing elit.</li>
                        <li>Dolor doloribus eligendi</li>
                        <li>labore nihil</li>
                        <li>optio possimus soluta vel.</li>
                        <li>A consequuntur dolore dolorum, laborum</li>
                        <li>molestiae perferendis,</li>
                        <li>quisquam quo ratione</li>
                        <li>eprehenderit tempore tenetur?</li>
                    </ul>
                </Expander>
            </div>
            <div>
                <SelectAppend
                    options={items}
                    valueProp='value'
                    textProp='text'
                    addNewHandler={(newItem) => {
                        setItems([
                            ...items,
                            {
                                value: items.length + 1,
                                text: newItem
                            }
                        ])
                    }}
                    selectionChangedHandler={(v) => console.log(v)}
                />
            </div>
            <div
                style={dividerRow}
            >
                <Paging
                    maxPage={50}
                    currentPage={selectedPage}
                    onChange={page => setSelectedPage(page)}
                />
                <div>
                    <div>
                        Selected page: {selectedPage}
                    </div>
                </div>
            </div>
            <div
                style={{
                    ...dividerRow,
                    width: '800px',
                }}
            >
                <RatioChart
                    r1={1367}
                    r2={2134}
                    t1={'A number'}
                    t2={'Another number'}
                />
            </div>
        </div>
    )
};

export default FormDemo;
