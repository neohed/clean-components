import React from 'react'
import CardTemplate1 from './CardTemplate1'
import image1 from '../../image/crazy-thoughts.jpeg'
import image2 from '../../image/sat-at-computer-2048.jpg'

const CardDemo = () => (
    <div
        style={{
            padding: '40px',
            display: 'flex'
        }}
    >
        <CardTemplate1
            title={'This Card'}
            image={image1}
            altText={'A man with sparks flying from his head'}
            body={<p>Some text, bla bla bla!</p>}
            footer={<p>Some links.</p>}
            url={'https://www.neohed.com/'}
        />
        <CardTemplate1
            title={'That Card'}
            image={image2}
            altText={'A woman sat with laptop on yoga mat'}
            body={<p>Some text, bla bla bla!</p>}
            footer={<p>Some links.</p>}
            url={'https://www.neohed.com/'}
        />
    </div>
);

export default CardDemo;
