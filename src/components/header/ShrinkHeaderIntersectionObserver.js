import React, {useRef, useState, useEffect} from 'react';
import useIntersectionObserver from "./useIntersectionObserver";
import './shrinkHeader.css'

const ShrinkHeaderIntersectionObserver = ({title, startStyle, scrollStyle}) => {
    const headerRef = useRef(null);
    const [headerStyle, setHeaderStyle] = useState(startStyle);

    const elementRef = useRef(null);
    const [inView, entry] = useIntersectionObserver(elementRef, {
        threshold: 0.4
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);

    return (
        <header
            style={headerStyle}
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
