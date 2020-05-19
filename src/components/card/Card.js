import React from 'react'
import './card.css'

const Card = ({
        children,
        width = 320,
        borderRadius = 4,
        styles = {}
}) => (
    <div
        className={'card'}
        style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: `${borderRadius}px`,
            width: `${width}px`,
            ...styles
        }}
    >
        {
            children
        }
    </div>
);

export default Card;
