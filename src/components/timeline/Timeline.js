import React, {useState, useEffect, useRef} from 'react';
import useEventListener from "../../utility/useEventListener";
import './timeline.css';
import {DateTime} from 'luxon';

const today = DateTime.local();

function isToday(dt) {
    return dt.year === today.year
        && dt.month === today.month
        && dt.day === today.day
}
/*
 * https://adrianroselli.com/2017/11/hey-its-still-ok-to-use-tables.html
 * https://www.the-art-of-web.com/html/table-markup/
 */
/*
 * https://moment.github.io/luxon/docs/manual/formatting
 * https://moment.github.io/luxon/docs/manual/tour.html
 */
function makeHeader(dateOrigin, cellCount) {
    const monthCells = [<th/>], dayCells = [<th/>];
    const start = dateOrigin.minus({days: Math.floor(cellCount * showPrevDays)});
    let currentMonth = start.month, monthIndex = 0;
    for (let i = 0; i < cellCount; i++) {
        const newDate = start.plus({days: i});
        dayCells.push(
            <th className={isToday(newDate) ? 'date-today' : ''}>{
                newDate.toFormat('dd')
            }</th>
        );

        if (newDate.month !== currentMonth || i === cellCount - 1) {
            const isLastCell = (i === cellCount - 1);

            monthCells.push(
                <th colSpan={i - monthIndex + (isLastCell ? 1 : 0)}>
                    {
                        newDate.minus({
                            month: isLastCell ? 0 : 1
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

function makeRow(time, cellCount) {
    const cells = [
        <td className='time-cell'>
            {
                time
            }
        </td>
    ];
    for (let i = 0; i < cellCount; i++) {
        cells.push(<td />)
    }

    return cells
}

function makeRows(cellCount) {
    const rows = [];
    for (let i = 0; i < 24; i++) {
        rows.push(<tr>
            {
                makeRow(('00' + i).slice(-2) + ':00', cellCount)
            }
        </tr>)
    }

    return rows
}

const showPrevDays = .2;
const timeColumnWidth = 100;
const cellWidth = 60;
//const tomorrow = now.plus({days: 1});

const Timeline = ({dateOrigin}) => {
    const [cellCount, setCellCount] = useState(0);
    const containerRef = useRef();

    function updateDimensions() {
        if (containerRef.current) {
            const {offsetWidth} = containerRef.current;
            setCellCount(Math.floor((offsetWidth - timeColumnWidth) / cellWidth))
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
            <caption>Calendar</caption>
            {
                makeHeader(dateOrigin, cellCount)
            }
            <tbody>
            {
                makeRows(cellCount)
            }
            </tbody>
        </table>
    );
};

export default Timeline;
