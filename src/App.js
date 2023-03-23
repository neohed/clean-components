import React from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';
import TabDemo from './components/TabDemo'
import FormDemo from './components/FormDemo'
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
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<RouterMenu/>} />
                <Route path="/file-upload" element={<UploadTest/>} />
                <Route path="/svg-tag" element={<SvgTag/>} />
                <Route path="/svg-file" element={<SvgFile/>} />
                <Route path="/tabs" element={<TabDemo/>} />
                <Route path="/form" element={<FormDemo/>} />
                <Route path="/scroller" element={<ScrollOver/>} />
                <Route path="/scroll-parallax" element={<ScrollParallax/>} />
                <Route path="/simple-header" element={<SimpleHeader/>} />
                <Route path="/mobile-header" element={<HeaderMobileDemo/>} />
                <Route path="/flexbox-header" element={<HeaderDemo/>} />
                <Route path="/header-shrink-1" element={<ShrinkHeaderDemo/>} />
                <Route path="/header-shrink-2" element={<ShrinkHeaderDemo2/>} />
                <Route path="/header-shrink-3" element={<ShrinkHeaderDemo3/>} />
                <Route path="/two-columns" element={<TwoColumns/>} />
                <Route path="/center-box" element={<CenterBoxDemo/>} />
                <Route path="/center" element={<CenterDemo/>} />
                <Route path="/auto-complete" element={<AutoCompleteDemo/>} />
                <Route path="/card" element={<CardDemo/>} />
                <Route path="/layout-header-main" element={<LayoutHeaderMainDemo/>} />
                <Route path="/as-many-as-fit" element={<AsManyAsFitDemo/>} />
                <Route path="/timeline" element={<TimeLineDemo/>} />
                <Route path="/background-offset" element={<BackgroundOffset/>} />
                <Route path="/range-group" element={<RangeGroupDemo/>} />
                <Route path="/filter-list" element={<FilterListDemo/>} />
                <Route path="/emojis" element={<EmojiRange/>} />
                <Route path="/css-filters" element={<DemoCssFilters/>} />
            </Routes>
        </div>
    );
}

export default App;
