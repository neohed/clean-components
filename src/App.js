import React from 'react';
import Tabs from './components/Tabs'
import './App.css';
import CleanButton from "./components/CleanButton";

function App() {
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
      <br/>
      <CleanButton
          text={'Clicked Button!'}
          clickHandler={txt => console.log(txt)}
      />
    </div>
  );
}

export default App;
