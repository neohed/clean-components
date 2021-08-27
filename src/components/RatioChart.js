import React, {useCallback, useEffect, useRef, useState} from 'react';
import useEventListener from "../utility/useEventListener";
import './ratio-chart.css'

const RatioChart = ({t1, r1, t2, r2}) => {
    const containerRef = useRef();
    const [ratios, setRatios] = useState([0, 0]);

    const updateDimensions = useCallback(() => {
        if (containerRef.current) {
            const {offsetWidth} = containerRef.current;
            const x = offsetWidth / Math.max(r1, r2);

            setRatios([
                Math.floor(r1 * x),
                Math.floor(r2 * x)
            ])
        }
    }, [r1, r2])

    useEffect(() => { // Initial load
        updateDimensions()
    }, [updateDimensions])

    useEventListener('resize', () => { // Resize update
        updateDimensions()
    });

    return (
        <div
            ref={containerRef}
            className='ratio-chart'
        >
            <Ratio
                width={ratios[0]}
                title={t1}
                css={{
                    backgroundColor: 'rgb(255, 255, 179)',
                    marginBottom: '4px',
                }}
                n={r1}
            />
            <Ratio
                width={ratios[1]}
                title={t2}
                css={{
                    backgroundColor: 'rgb(141, 211, 199)',
                }}
                n={r2}
            />
        </div>
    );
}

export default RatioChart;

const Ratio = ({width, title, css, n}) => (
    <div
        style={{
            width: width + 'px',
            ...css
        }}
    >
        {
            title
        }
        <div>
            {
                n
            }
        </div>
    </div>
)
