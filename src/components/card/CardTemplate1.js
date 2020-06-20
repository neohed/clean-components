import React from 'react'
import Card from './Card'

const CardTemplate1 = ({
                           title,
                           image,
                           altText,
                           body,
                           footer,
                           url
                       }) => (
    <Card styles={{
        boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
        backgroundColor: 'white',
        margin: '0 30px 30px 0',
    }}
          borderRadius={6}
    >
        <a
            style={{
                height: '100%',
                flex: '1',
                textDecoration: 'none',
                color: 'inherit'
            }}
            href={url}
        >
            <h2 style={{
                padding: '8px',
                margin: '0',
                textAlign: 'center'
            }}>
                {
                    title
                }
            </h2>
            <img
                src={image}
                alt={altText}
                style={{
                    maxWidth: '100%'
                }}
            />
            <div style={{
                padding: '8px'
            }}>
                {
                    body
                }
            </div>
        </a>
        <div style={{
            borderTop: '1px solid #ccc',
            padding: '4px 0 4px 8px',
            backgroundColor: '#efefef',
            color: '#555',
        }}>
            {
                footer
            }
        </div>
    </Card>
);

export default CardTemplate1;
