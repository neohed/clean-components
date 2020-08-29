import React from 'react';
import './headerMain.css'

const HeaderMain = ({header, main}) => {
    return (
        <div className="layout-container">
            <header
                className="box header"
            >
                {
                    header
                }
            </header>
            <main
                className="box content"
            >
                {
                    main
                }
            </main>
        </div>
    );
};

export default HeaderMain;
