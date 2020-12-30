import React from 'react';
import svg from './Dodecahedron_schlegel.svg';

const SvgFile = () => {
    return (
        <div>
            <img
                style={{
                    height: '100vh'
                }}
                src={svg}
                alt="dodecahedron"
            />
        </div>
    );
};

export default SvgFile;
