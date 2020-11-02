import React from 'react';
import useParallax from "./useParallax";
import './scroll-parallax.css'

const imageHeight = 3361;
const imageOffset = 0; // -190;
const direction = -1; // -1 == scroll image up, 1 === scroll image down.
const speed = 1;

const ScrollParallax = () => {
    const [viewportRef, backgroundPositionY] = useParallax(imageHeight, imageOffset, direction, speed);

    return (
        <div>
            <div className="top-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque
                debitis fugiat impedit molestias.
            </div>
            <div
                style={{
                    backgroundPositionY
                }}
                ref={viewportRef}
                className="content parallax-viewport"
            >Alias asperiores aspernatur ipsam, laboriosam maiores odit officia reiciendis rem
                saepe sunt veritatis vero voluptatem!
            </div>
            <div className="content">Adipisci consequatur delectus illo ipsa perspiciatis quibusdam quisquam,
                repellendus vel veritatis! Blanditiis libero unde voluptas.
            </div>
            <div className="content">Itaque minima nam obcaecati pariatur quam temporibus. Accusantium debitis delectus
                doloremque illo illum magni? Voluptatibus!
            </div>
            <div className="content">Ad aliquid beatae cupiditate ducimus ea iusto mollitia nihil pariatur quasi,
                ratione reiciendis repudiandae, tempore.
            </div>
            <div className="content">Adipisci consequatur delectus illo ipsa perspiciatis quibusdam quisquam,
                repellendus vel veritatis! Blanditiis libero unde voluptas.
            </div>
            <div className="content">Itaque minima nam obcaecati pariatur quam temporibus. Accusantium debitis delectus
                doloremque illo illum magni? Voluptatibus!
            </div>
            <div className="content">Ad aliquid beatae cupiditate ducimus ea iusto mollitia nihil pariatur quasi,
                ratione reiciendis repudiandae, tempore.
            </div>
        </div>
    );
};

export default ScrollParallax;
