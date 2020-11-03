import {useEffect, useRef, useState} from 'react';
import useEventListener from "../../utility/useEventListener";

function getElementInfo({current}) {
    const rect = current.getBoundingClientRect();

    return {
        top: rect.top,
        height: current.clientHeight
    }
}

function calculateOffset(imageOverlap, top, ratio) {
    return Math.floor(imageOverlap - top * ratio);
}

function useParallax(imageHeight, imageOffset, direction, speed) {
    const viewportRef = useRef();
    const [ratio, setRatio] = useState(1);
    const [over, setOver] = useState(1);
    const [backgroundPositionY, setBackgroundPositionY] = useState(0);

    useEffect(() => {
        if (viewportRef.current) {
            const windowTop  = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
            const {top, height} = getElementInfo(viewportRef);

            const rangeTop = Math.min(windowTop + top, documentHeight);
            const rangeBottom = Math.max(windowTop - windowHeight + top + height, 0);
            const range = rangeTop - rangeBottom;
            const imageOverlap = imageHeight + imageOffset - height;
            const ratio = imageOverlap / range * speed;
            setOver(imageOverlap)
            setRatio(ratio)

            setBackgroundPositionY(imageOffset - calculateOffset(imageOverlap, Math.min(Math.max(top, 0), windowHeight), ratio));
            // direction === -1 ? imageOffset : height - imageHeight
        }
    }, [
        viewportRef,
        imageHeight,
        imageOffset,
        direction,
        speed
    ]);

    useEventListener('scroll', () => {
        if (viewportRef.current) {
            const {top, height} = getElementInfo(viewportRef);
            const windowHeight = window.innerHeight;

            if (top > 0 && (top + height) < windowHeight) {
                /*
                const delta = (parallaxConstants.top - top) * parallaxConstants.ratio;
                const offset = direction === -1
                    ? delta
                    : parallaxConstants.imageOverlap - delta;
                const floorOffset = Math.floor(offset);
                 */

                const offset = calculateOffset(imageOffset, top, ratio);

                setBackgroundPositionY(direction === -1
                    ? offset
                    : over - offset);
            }
        }
    });

    return [
        viewportRef,
        backgroundPositionY
    ]
}

export default useParallax;
