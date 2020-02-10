import React from 'react'
import './header.css'

const Header = () => {

    return (
        <header className="site-header">
            <a href="#0" className="logo">Logo</a>

            <nav className="site-nav">
                <ul>
                    <li className="active"><a href="#0">Home</a></li>
                    <li><a href="#0">About</a></li>
                    <li><a href="#0">Clients</a></li>
                    <li><a href="#0">Contact us</a></li>
                </ul>
            </nav>

            <div className="actions">
                <div className="dropdown">
                    Settings [ User @ Company ]
                    <ul>
                        <li><a href="#0">Sub Item 1</a></li>
                        <li><a href="#0">Sub Item 2</a></li>
                        <li><a href="#0">Sub Item 3</a></li>
                    </ul>
                </div>

                <a href="#0" className="sign-out-link">Sign Out</a>
            </div>
        </header>
    )
};

export default Header;
