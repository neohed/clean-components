import React from 'react';
import './asManyAsFit.css'

const AsManyAsFit = () => {
    return (
        <div className="layout-container">
            <header
                className="box header"
            >
            </header>
            <main
                className="box content"
            >
                <div className="panel">Panel A</div>
                <div className="panel">Panel B</div>
                <div className="panel tall-panel">Panel C</div>
                <div className="panel">Panel D</div>
                <div className="panel">Panel E</div>
                <div className="panel">Panel F</div>
                <div className="panel tall-panel">Panel G</div>
                <div className="panel tall-panel">Panel H</div>
                <div className="panel">Panel I</div>
                <div className="panel">Panel J</div>
            </main>
        </div>
    );
};

export default AsManyAsFit;
