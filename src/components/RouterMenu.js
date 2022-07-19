import React from 'react';
import {
    Link
} from 'react-router-dom';

function RouterMenu() {
    return (
        <div className="menu">
            <h4>Click a link to see demo</h4>
            <ul>
                <li>
                    <Link to="scroll-parallax">Scroll Parallax</Link>
                </li>
                <li>
                    <Link to="tabs">Tabs</Link>
                </li>
                <li>
                    <Link to="auto-complete">Auto Complete</Link>
                </li>
                <li>
                    <Link to="timeline">Timeline</Link>
                </li>
                <li>
                    <Link to="emojis">Emojis</Link>
                </li>
                <li>
                    <Link to="header-shrink-1">Header Transparent</Link>
                </li>
                <li>
                    <Link to="header-shrink-2">Header Padding</Link>
                </li>
                <li>
                    <Link to="header-shrink-3">Header IntersectionObserver</Link>
                </li>
                <li>
                    <Link to="card">Card</Link>
                </li>
                <li>
                    <Link to="file-upload">File Upload</Link>
                </li>
                <li>
                    <Link to="filter-list">Filter List</Link>
                </li>
                <li>
                    <Link to="form">Form</Link>
                </li>
                <li>
                    <Link to="scroller">Scroll Over</Link>
                </li>
                <li>
                    <Link to="mobile-header">Mobile Header</Link>
                </li>
                <li>
                    <Link to="simple-header">Simple Flexbox Header</Link>
                </li>
                <li>
                    <Link to="flexbox-header">Flexbox Header</Link>
                </li>
                <li>
                    <Link to="two-columns">Two Columns</Link>
                </li>
                <li>
                    <Link to="center-box">Center Box</Link>
                </li>
                <li>
                    <Link to="center">Center</Link>
                </li>
                <li>
                    <Link to="layout-header-main">Layout Header Main</Link>
                </li>
                <li>
                    <Link to="as-many-as-fit">Layout AsManyAsFit</Link>
                </li>
                <li>
                    <Link to="background-offset">Background Offset</Link>
                </li>
                <li>
                    <Link to="svg-file">SVG from file</Link>
                </li>
                <li>
                    <Link to="svg-tag">SVG tag</Link>
                </li>
                <li>
                    <Link to="range-group">Range Group</Link>
                </li>
                <li>
                    <Link to="css-filters">CSS Filters</Link>
                </li>
            </ul>
        </div>
    );
}

export default RouterMenu;
