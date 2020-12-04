import React, {useState} from 'react';
import Checkbox from "./inputs/Checkbox";
import CleanButton from "./inputs/CleanButton";
import Select from "./inputs/Select";

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
        </div>
    )
};

export default FormDemo;
