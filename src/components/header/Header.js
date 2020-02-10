import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header className="site-header">
            <a href="/" className="logo">Logo</a>

            <nav className="site-nav">
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact us</a></li>
                </ul>
            </nav>

            <div className="actions">
                <a href="/" className="register-link">Register</a>

                <a href="/" className="log-in-link">Log In</a>
            </div>
        </header>
    )
};

export default Header;
