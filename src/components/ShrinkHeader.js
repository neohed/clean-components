import React, {useRef, useEffect} from 'react';
import useEventListener from '../utility/useEventListener'
import './shrinkHeader.css'

const ShrinkHeader = ({title}) => {
    const headerRef = useRef(null);

    useEventListener('scroll', () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerRef.current.className = 'shrinking-header shrunken-head'
        } else {
            headerRef.current.className = 'shrinking-header'
        }
    });

    return (
        <header
            className='shrinking-header'
            ref={headerRef}
        >
            {
                title
            }
        </header>
    )
};

export default ShrinkHeader;
