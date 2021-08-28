import React, {useCallback, useEffect, useRef, useState} from 'react';
import useEventListener from "../utility/useEventListener";
import './ratio-chart.css'

const RatioChart = ({title1, ratio1, title2, ratio2}) => {
    const containerRef = useRef();
    const [ratios, setRatios] = useState([0, 0]);

    const updateDimensions = useCallback(() => {
        if (containerRef.current) {
            const {offsetWidth} = containerRef.current;
            const x = offsetWidth / Math.max(ratio1, ratio2);

            setRatios([
                Math.floor(ratio1 * x),
                Math.floor(ratio2 * x)
            ])
        }
    }, [ratio1, ratio2])

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
                title={title1}
                css={{
                    backgroundColor: 'rgb(255, 255, 179)',
                    marginBottom: '4px',
                }}
                quantity_label={ratio1}
            />
            <Ratio
                width={ratios[1]}
                title={title2}
                css={{
                    backgroundColor: 'rgb(141, 211, 199)',
                }}
                quantity_label={ratio2}
            />
        </div>
    );
}

export default RatioChart;

const Ratio = ({width, title, css, quantity_label}) => (
    <div
        style={{
            width: width + 'px',
            ...css
        }}
    >
        <div
            className='title'
        >
            {
                title
            }
        </div>
        <div
            className='quantity'
        >
            {
                quantity_label
            }
        </div>
    </div>
)
