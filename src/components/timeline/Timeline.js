import React, {useState, useEffect, useRef} from 'react';
import useEventListener from "../../utility/useEventListener";
import {DateTime} from 'luxon';

/*
 * https://adrianroselli.com/2017/11/hey-its-still-ok-to-use-tables.html
 * https://www.the-art-of-web.com/html/table-markup/
 */

function makeHeader(dateOrigin, cellCount) {
    const monthCells = [], dayCells = [];
    const start = dateOrigin.minus({days: Math.floor(cellCount * showPrevDays)});
    let currentMonth = start.month, monthIndex = 0;
    for (let i = 0; i < cellCount; i++) {
        const newDate = start.plus({days: i});
        dayCells.push(
            <th>{
                newDate.toFormat('dd')
            }</th>
        );

        if (newDate.month !== currentMonth || i === cellCount - 1) {
            monthCells.push(
                <th colSpan={i - monthIndex}>
                    {
                        newDate.minus({
                            month: (newDate.month !== currentMonth) ? 1 : 0
                        }).toFormat('MMMM y')
                    }
                </th>
            );
            currentMonth = newDate.month;
            monthIndex = i
        }
    }

    return <thead>
    <tr>
        {
            monthCells
        }
    </tr>
    <tr>
        {
            dayCells
        }
    </tr>
    </thead>
}

const showPrevDays = .2;
const cellWidth = 60;
//const tomorrow = now.plus({days: 1});

const Timeline = ({dateOrigin}) => {
    const [cellCount, setCellCount] = useState(0);
    const containerRef = useRef();

    function updateDimensions() {
        if (containerRef.current) {
            const {offsetWidth} = containerRef.current;
            setCellCount(Math.floor(offsetWidth / cellWidth))
        }
    }

    useEffect(() => { // Initial load
        updateDimensions()
    }, [containerRef])

    useEventListener('resize', () => { // Resize update
        updateDimensions()
    });

    return (
        <table
            style={{
                width: '100%'
            }}
            ref={containerRef}
        >
            <caption>{cellCount}</caption>
            {
                makeHeader(dateOrigin, cellCount)
            }
        </table>
    );
};

export default Timeline;
