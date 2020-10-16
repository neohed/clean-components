import React, {useEffect, useState, useRef} from 'react';
import useEventListener from "../../utility/useEventListener";
import './scroll-parallax.css'

function offset(el) {
    const rect = el.getBoundingClientRect();

    return {
        top: rect.top,
        left: rect.left
    }
}

const imageHeight = 3361;
const imageOffset = -190;

//TODO Create reverse effect: image starts at end and scrolls up not down (offsetY at max negative and reduces)

const ScrollParallax = () => {
    const viewportRef = useRef();
    const [initialTop, setInitialTop] = useState(0);
    const [backgroundPositionY, setBackgroundPositionY] = useState(imageOffset)

    useEffect(() => {
        if (viewportRef.current) {
            const vp = viewportRef.current;
            const {top} = offset(vp);
            setInitialTop(top)
        }
    }, [viewportRef])

    useEventListener('scroll', () => {
        if (viewportRef.current) {
            const vp = viewportRef.current;
            const {top} = offset(vp);
            const viewportHeight = vp.clientHeight;

            if (top + viewportHeight > 0) {
                const remainingImageHeight = imageHeight + imageOffset - viewportHeight;
                const ratio = remainingImageHeight / (initialTop + viewportHeight);
                const offset = Math.floor(-(remainingImageHeight - (initialTop + top) * ratio) + imageOffset);
                setBackgroundPositionY(offset);
            }
        }
    });

    return (
        <div>
            <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque
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
