import React from 'react'

const Card = ({
                  children,
                  width = 320,
                  borderRadius = 4,
                  styles = {}
}) => (
    <div
        style={{
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
