import React from 'react';
import HeaderMain from './layout/HeaderMain'

const LayoutHeaderMainDemo = () => {
    return (
        <HeaderMain
            header={
                <h1>Header</h1>
            }
            main={
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, autem.</p>
            }
        />
    );
};

export default LayoutHeaderMainDemo;
