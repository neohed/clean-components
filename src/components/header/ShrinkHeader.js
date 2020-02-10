import React, {useRef, useState} from 'react';
import useEventListener from '../../utility/useEventListener'
import './shrinkHeader.css'

const ShrinkHeader = ({title, startStyle, scrollStyle}) => {
    const headerRef = useRef(null);
    const [headerStyle, setHeaderStyle] = useState(startStyle);

    useEventListener('scroll', () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerRef.current.className = 'shrinking-header shrunken-head';
            setHeaderStyle(scrollStyle)
        } else {
            headerRef.current.className = 'shrinking-header';
            setHeaderStyle(startStyle)
        }
    });

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

export default ShrinkHeader;
