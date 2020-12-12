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
import HeaderDemo from "./components/HeaderDemo";
import ShrinkHeaderDemo from "./components/ShrinkHeaderDemo";
import ShrinkHeaderDemo2 from "./components/ShrinkHeaderDemo2";
import TwoColumns from "./components/columns/TwoColumns";
import CenterDemo from './components/CenterDemo'
import AutoCompleteDemo from "./components/AutoCompleteDemo";
import CardDemo from './components/card/CardDemo'
import CenterBoxDemo from './components/CenterBoxDemo'
import LayoutHeaderMainDemo from './components/LayoutHeaderMainDemo'
import AsManyAsFitDemo from "./components/AsManyAsFitDemo";
import SimpleHeader from "./components/header/SimpleHeader";
import ScrollParallax from "./components/parallax/ScrollParallax";
import TimeLineDemo from "./components/TimeLineDemo";
import BackgroundOffset from "./components/backgrounds/BackgroundOffset";
import ShrinkHeaderDemo3 from "./components/ShrinkHeaderDemo3";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <RouterMenu />
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
                    <Route path="/scroll-parallax">
                        <ScrollParallax/>
                    </Route>
                    <Route path="/simple-header">
                        <SimpleHeader/>
                    </Route>
                    <Route path="/flexbox-header">
                        <HeaderDemo/>
                    </Route>
                    <Route path="/header-shrink-1">
                        <ShrinkHeaderDemo/>
                    </Route>
                    <Route path="/header-shrink-2">
                        <ShrinkHeaderDemo2/>
                    </Route>
                    <Route path="/header-shrink-3">
                        <ShrinkHeaderDemo3 />
                    </Route>
                    <Route path="/two-columns">
                        <TwoColumns/>
                    </Route>
                    <Route path="/center-box">
                        <CenterBoxDemo/>
                    </Route>
                    <Route path="/center">
                        <CenterDemo/>
                    </Route>
                    <Route path="/auto-complete">
                        <AutoCompleteDemo/>
                    </Route>
                    <Route path="/card">
                        <CardDemo/>
                    </Route>
                    <Route path="/layout-header-main">
                        <LayoutHeaderMainDemo />
                    </Route>
                    <Route path="/as-many-as-fit">
                        <AsManyAsFitDemo />
                    </Route>
                    <Route path="/timeline">
                        <TimeLineDemo />
                    </Route>
                    <Route path="/background-offset">
                        <BackgroundOffset />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
