import React, {useState} from 'react';
import Tabs from './components/Tabs'
import CleanButton from "./components/CleanButton";
import Checkbox from "./components/Checkbox";
import './App.css';

function App() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="App">
            <Tabs>
                <div label="Gator">
                    See ya later, <em>Alligator</em>!
                </div>
                <div label="Croc">
                    After 'while, <em>Crocodile</em>!
                </div>
                <div label="Sarcosuchus">
                    Nothing to see here, this tab is <em>extinct</em>!
                </div>
            </Tabs>
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
    );
}

export default App;
