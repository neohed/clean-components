import React from 'react';
import Timeline from "./timeline/Timeline";
import {DateTime} from 'luxon';

const TimeLineDemo = () => {
    return (
        <div>
            <Timeline
                dateOrigin={DateTime.local()}
            />
        </div>
    );
};

export default TimeLineDemo;
