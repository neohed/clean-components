import React from 'react';
import useParallax from "./useParallax";
import './scroll-parallax.css'

/*
 * Todo - get image height programmatically
 *  var imageSrc = document
                    .getElementById('hello')
                     .style
                      .backgroundImage
                       .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
                        .split(',')[0];

    var image = new Image();
    image.src = imageSrc;

    var width = image.width,
        height = image.height;
 */
const ScrollParallax = () => {
    const [viewportRef, backgroundPositionY] = useParallax(3361, 0, 1, 1);

    const [viewportRef2, backgroundPositionY2] = useParallax(3084, 0, -1, 1);
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
                className="image-content parallax-viewport"
            >Alias asperiores aspernatur ipsam, laboriosam maiores odit officia reiciendis rem
                saepe sunt veritatis vero voluptatem!
            </div>
            <div className="spacer-content">Adipisci consequatur delectus illo ipsa perspiciatis quibusdam quisquam,
                repellendus vel veritatis! Blanditiis libero unde voluptas.
            </div>
            <div
                style={{
                    backgroundPositionY: backgroundPositionY2
                }}
                ref={viewportRef2}
                className="image-content parallax-viewport-2"
            >Itaque minima nam obcaecati pariatur quam temporibus. Accusantium debitis delectus
                doloremque illo illum magni? Voluptatibus!
            </div>
            <div className="spacer-content">Ad aliquid beatae cupiditate ducimus ea iusto mollitia nihil pariatur quasi,
                ratione reiciendis repudiandae, tempore.
            </div>
            <div className="spacer-content">Adipisci consequatur delectus illo ipsa perspiciatis quibusdam quisquam,
                repellendus vel veritatis! Blanditiis libero unde voluptas.
            </div>
            <div className="spacer-content">Itaque minima nam obcaecati pariatur quam temporibus. Accusantium debitis delectus
                doloremque illo illum magni? Voluptatibus!
            </div>
            <div className="spacer-content">Ad aliquid beatae cupiditate ducimus ea iusto mollitia nihil pariatur quasi,
                ratione reiciendis repudiandae, tempore.
            </div>
        </div>
    );
};

export default ScrollParallax;
