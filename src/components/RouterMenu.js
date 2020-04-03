import React from 'react';
import {
    Link
} from 'react-router-dom';

function RouterMenu() {
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="tabs">Tabs</Link>
                </li>
                <li>
                    <Link to="form">Form</Link>
                </li>
                <li>
                    <Link to="scroller">Scroll</Link>
                </li>
                <li>
                    <Link to="flexbox-header">Flexbox Header</Link>
                </li>
                <li>
                    <Link to="header-shrink-1">Header Transparent</Link>
                </li>
                <li>
                    <Link to="header-shrink-2">Header Padding</Link>
                </li>
                <li>
                    <Link to="two-columns">Two Columns</Link>
                </li>
                <li>
                    <Link to="center">Center</Link>
                </li>
                <li>
                    <Link to="auto-complete">Auto-Complete</Link>
                </li>
            </ul>
        </div>
    );
}

export default RouterMenu;
