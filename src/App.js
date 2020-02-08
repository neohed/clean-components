import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import TabDemo from './components/TabDemo'
import FormDemo from './components/FormDemo'
import './App.css';
import RouterMenu from "./components/RouterMenu";
import ScrollOver from "./components/ScrollOver";

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
                </Switch>
            </Router>
        </div>
    );
}

export default App;
