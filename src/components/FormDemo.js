import React, {useState} from 'react';
import Checkbox from "./Checkbox";
import CleanButton from "./CleanButton";

const FormDemo = () => {
    const [isChecked, setIsChecked] = useState(false);

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
        </div>
    )
};

export default FormDemo;
