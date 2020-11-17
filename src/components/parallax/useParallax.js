import {useEffect, useRef, useState} from 'react';
import useEventListener from "../../utility/useEventListener";
import {easing} from "../../utility/easingFunctions";

function getElementInfo({current}) {
    const rect = current.getBoundingClientRect();

    return {
        top: rect.top,
        height: current.clientHeight
    }
}

//TODO Parameterise easing function.
function calculateOffset(imageOffset, top, ratio, direction, imageRemaining, range) {
    const offset = Math.floor(imageOffset - top * ratio);
    const easedOffset = offset * easing.easeInOutSine(-offset / range)

    return direction === -1
        ? easedOffset
        : -(imageRemaining + easedOffset)
}

function useParallax(imageHeight, imageOffset, direction, speed) {
    const viewportRef = useRef();
    const [ratio, setRatio] = useState(1);
    const [imageRemaining, setImageRemaining] = useState(1);
    const [backgroundPositionY, setBackgroundPositionY] = useState(0);
    const [range, setRange] = useState(0);

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
            const r = imageOverlap / range * speed;
            setImageRemaining(imageOverlap);
            setRange(range * r);
            setRatio(r);

            const t = Math.min(Math.max(top, 0), windowHeight - height);
            setBackgroundPositionY(calculateOffset(imageOffset, t, r, direction, imageOverlap,range * r));
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
                const offset = calculateOffset(imageOffset, top, ratio, direction, imageRemaining, range);

                setBackgroundPositionY(offset);
            }
        }
    });

    return [
        viewportRef,
        backgroundPositionY
    ]
}

export default useParallax;
