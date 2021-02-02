import React, {useState} from 'react'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import BurgerMenu from './navigation-menu.svg';
import './header.css'

function renderHeaderContent() {
    return [
        <a href="/" className="logo">Logo</a>,

        <nav className="site-nav">
            <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact us</a></li>
            </ul>
        </nav>,

        <div className="actions">
            <a href="/" className="register-link">Register</a>

            <a href="/" className="log-in-link">Log In</a>
        </div>
    ]
}

const HeaderMobile = () => {
    const [showHeader, setShowHeader] = useState(false);

    return (
        <header
            className="site-header"
            style={(isMobile && !showHeader) ? {
                width: '50px'
            } : {}}
        >
            {
                isBrowser
                    ? renderHeaderContent()
                    : showHeader
                    ? renderHeaderContent()
                    : <img
                        style={{
                            cursor: 'pointer',
                            color: 'white',
                            width: '48px',
                            height: '48px'
                        }}
                        src={BurgerMenu}
                        alt="Burger Menu Icon"
                        onClick={() => setShowHeader(true)}
                    />
            }
        </header>
    )
};

export default HeaderMobile;
