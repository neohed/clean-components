import React, {useState} from 'react';
import Checkbox from "./inputs/Checkbox";
import CleanButton from "./inputs/CleanButton";
import Select from "./inputs/Select";
import Expander from "./Expander";

const FormDemo = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState();

    return (
        <div>
            <br/>
            <hr/>
            <Checkbox
                id={'chk1'}
                isChecked={isChecked}
                label={'Click me!'}
                changeHandler={(ctrl, checked) => setIsChecked(checked)}
            />
            <hr/>
            <br/>
            <CleanButton
                text={'Clicked Button!'}
                clickHandler={txt => console.log(txt)}
            />
            <hr/>
            <br/>
            <Select
                label={'A Select'}
                options={[
                    {value: 1, text: 'One'},
                    {value: 2, text: 'Two'},
                    {value: 3, text: 'Three'},
                    {value: 4, text: 'Four'}
                ]}
                selectedValue={selectedValue}
                changeHandler={setSelectedValue}
            />
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
    )
};

export default FormDemo;
