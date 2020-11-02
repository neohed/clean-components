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
        imageOverlap: imageHeight,
        ratio: 1
    });
    const [backgroundPositionY, setBackgroundPositionY] = useState(0);

    useEffect(() => {
        if (viewportRef.current) {
            const {top, height} = getElementInfo(viewportRef);
            const imageOverlap = imageHeight + imageOffset - height;
            setParallaxConstants({
                top,
                imageOverlap,
                ratio: imageOverlap / (top + height) * speed
            })
            setBackgroundPositionY(direction === -1 ? imageOffset : height - imageHeight);
        }
    }, [
        viewportRef
    ]);

    useEventListener('scroll', () => {
        if (viewportRef.current) {
            const {top, height} = getElementInfo(viewportRef);
            if (top + height > 0) {
                const delta = (parallaxConstants.top - top) * parallaxConstants.ratio;
                const offset = direction === -1
                    ? delta
                    : parallaxConstants.imageOverlap - delta;
                const floorOffset = Math.floor(offset);

                if (floorOffset < parallaxConstants.imageOverlap) {
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
