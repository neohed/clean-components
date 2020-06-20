import React from 'react';
import CenterBox from "./layout/CenterBox";

function renderDivs() {
    const divs = []

    for (let i = 20; i > 0; i--) {
        divs.push(
            <div
                key={i}
                style={{
                    position: 'relative',
                    margin: '10px',
                    padding: '8px',
                    width: '200px',
                    height: '200px',
                    backgroundColor: '#eaeaea',
                    borderRadius: '6px',
                }}>
                <h4>A Div</h4>
                <p>
                    bla bla bla
                </p>
            </div>
        )
    }

    return divs
}

const CenterBoxDemo = () => (
    <div style={{
        backgroundColor: '#dedede',
    }}>
        <CenterBox
            style={{
                backgroundColor: 'white',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
            {
                renderDivs()
            }
        </CenterBox>
    </div>
);

export default CenterBoxDemo;
