import React from 'react';
import './simple-header.css'

const SimpleHeader = () => {
    return (
        <header className="site-header">
            <nav className="site-nav">
                <ul>
                    <li className="header-active"><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default SimpleHeader;
