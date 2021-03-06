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
import UploadTest from "./components/file_selector/UploadTest";
import SvgFile from "./components/svg/SvgFile";
import SvgTag from "./components/svg/SvgTag";
import RangeGroupDemo from "./components/RangeGroupDemo";
import FilterListDemo from "./components/FilterListDemo";
import HeaderMobileDemo from "./components/HeaderMobileDemo";
import EmojiRange from "./components/emoji/EmojiRange";
import DemoCssFilters from "./components/DemoCssFilters";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <RouterMenu />
                    </Route>
                    <Route path="/file-upload">
                        <UploadTest/>
                    </Route>
                    <Route path="/svg-tag">
                        <SvgTag/>
                    </Route>
                    <Route path="/svg-file">
                        <SvgFile/>
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
                    <Route path="/mobile-header">
                        <HeaderMobileDemo/>
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
                    <Route path="/range-group">
                        <RangeGroupDemo />
                    </Route>
                    <Route path="/filter-list">
                        <FilterListDemo />
                    </Route>
                    <Route path="/emojis">
                        <EmojiRange />
                    </Route>
                    <Route path="/css-filters">
                        <DemoCssFilters />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
