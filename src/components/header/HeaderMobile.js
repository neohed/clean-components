import React, { useState } from 'react'
import {
    isBrowser,
    isMobile
} from "react-device-detect";
import BurgerMenu from './navigation-menu.svg';
import './header.css'
import './header-mobile.css'
/*
 * TODO:
 *  On mobile make menu full screen.
 *  After clicking the menu close it back to burger menu.
 *  Change to render prop pattern.
 */
//const isMobile = true;

function renderHeaderMenu() {
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
                (isBrowser || showHeader)
                    ? renderHeaderMenu()
                    : <div
                        className='burger-menu'
                    >
                        <img
                            style={{
                                width: '48px',
                                height: '48px'
                            }}
                            src={BurgerMenu}
                            alt="Burger Menu Icon"
                            onClick={() => setShowHeader(true)}
                        />
                    </div>
            }
        </header>
    )
};

export default HeaderMobile;
