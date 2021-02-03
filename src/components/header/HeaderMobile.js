import React, {useState} from 'react'
import BurgerMenu from './navigation-menu.svg';
import './header.css'
import './header-mobile.css'

/*
 * TODO:
 *  Change to render prop pattern.
 */

const HeaderMobile = () => {
    const [showHeader, setShowHeader] = useState(false);

    return ([
        <header
            key='site-header'
            className="site-header"
            style={(showHeader)
                ? {
                    visibility: 'visible'
                }
                : {}
            }
        >
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
        </header>,
        <header
            key='site-header-sm'
            className="site-header-sm"
            style={(showHeader)
                ? {
                    visibility: 'hidden'
                }
                : {}
            }
        >
            <div
                className='burger-menu'>
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
        </header>
    ])
};

export default HeaderMobile;
