import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import TabDemo from './components/TabDemo'
import FormDemo from './components/FormDemo'
import './App.css';
import RouterMenu from "./components/RouterMenu";
import ScrollOver from "./components/parallax/ScrollOver";
import ShrinkHeaderDemo from "./components/ShrinkHeaderDemo";
import ShrinkHeaderDemo2 from "./components/ShrinkHeaderDemo2";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <RouterMenu />
                        <p>Click a link to see demo</p>
                    </Route>
                    <Route path="/tabs">
                        <TabDemo/>
                    </Route>
                    <Route path="/form">
                        <FormDemo/>
                    </Route>
                    <Route path="/scroller">
                        <ScrollOver/>
                    </Route>
                    <Route path="/header">
                        <ShrinkHeaderDemo/>
                    </Route>
                    <Route path="/header2">
                        <ShrinkHeaderDemo2/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
