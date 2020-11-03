import {useEffect, useRef, useState} from 'react';
import useEventListener from "../../utility/useEventListener";

function getElementInfo({current}) {
    const rect = current.getBoundingClientRect();

    return {
        top: rect.top,
        height: current.clientHeight
    }
}

function useParallax(imageHeight, imageOffset, direction, speed) {
    const viewportRef = useRef();
    const [parallaxConstants, setParallaxConstants] = useState({
        top: 0,
        rangeTop: 0,
        rangeBottom: 0,
        imageOverlap: imageHeight,
        ratio: 1
    });
    const [backgroundPositionY, setBackgroundPositionY] = useState(0);

    const windowTop  = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    useEffect(() => {
        if (viewportRef.current) {
            const {top, height} = getElementInfo(viewportRef);

            const rangeTop = Math.min(windowTop + top, documentHeight);
            const rangeBottom = Math.max(windowTop - windowHeight + top + height, 0);
            const range = rangeTop - rangeBottom;
            const imageOverlap = imageHeight + imageOffset - height;
            console.log('*************************')
            console.log({top, windowTop, imageOverlap})
            console.log({rangeTop, rangeBottom, range, ratio: imageOverlap / range * speed})
            setParallaxConstants({
                top,
                rangeTop,
                rangeBottom,
                imageOverlap,
                ratio: imageOverlap / range * speed
            })
            setBackgroundPositionY(direction === -1 ? imageOffset : height - imageHeight);
        }
    }, [
        viewportRef,
        documentHeight,
        imageHeight,
        imageOffset,
        direction,
        speed
    ]);

    useEventListener('scroll', () => {
        if (viewportRef.current) {
            const {top, height} = getElementInfo(viewportRef);
//console.log({top, rangeTop: parallaxConstants.rangeTop, rangeBottom: parallaxConstants.rangeBottom, ratio: parallaxConstants.ratio, windowTop})
            if (top > 0 && (top + height) < windowHeight) {

                /*
                const delta = (parallaxConstants.top - top) * parallaxConstants.ratio;
                const offset = direction === -1
                    ? delta
                    : parallaxConstants.imageOverlap - delta;
                const floorOffset = Math.floor(offset);
                 */
                const x = parallaxConstants.imageOverlap - (top) * parallaxConstants.ratio; //  - parallaxConstants.rangeBottom
                const floorOffset = Math.floor(x);
//console.log({top, ratio: parallaxConstants.ratio, floorOffset})
//console.log({floorOffset, Y: imageOffset - floorOffset, topRatio: top * parallaxConstants.ratio})
                if (true || floorOffset < parallaxConstants.imageOverlap) {
                    setBackgroundPositionY(imageOffset - floorOffset);
                }
            }
        }
    });

    return [
        viewportRef,
        backgroundPositionY
    ]
}

export default useParallax;
