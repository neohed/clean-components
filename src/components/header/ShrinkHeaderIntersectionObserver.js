import React, {useRef, useEffect} from 'react';
import useIntersectionObserver from "./useIntersectionObserver";
import './shrinkHeader.css'

const ShrinkHeaderIntersectionObserver = ({title, startStyle}) => {
    const headerRef = useRef(null);

    const elementRef = useRef(null);
    const [inView] = useIntersectionObserver(elementRef, {
        threshold: 0.4
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);

    return (
        <header
            style={startStyle}
            className='shrinking-header'
            ref={headerRef}
        >
            {
                title
            }
        </header>
    )
};

export default ShrinkHeaderIntersectionObserver;
