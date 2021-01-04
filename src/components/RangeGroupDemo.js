import React from 'react';
import RangeGroup from "./inputs/range/RangeGroup";

const data = [
    {
        email: 'a@b.c',
        percentage: 0,
    },
    {
        email: 'g@b.c',
        percentage: 0,
    },
    {
        email: 'j@b.c',
        percentage: 0,
    },
]

const RangeGroupDemo = () => {
    return (
        <div>
            <RangeGroup
                data={data}
                labelPropName='email'
                valuePropName='percentage'
            />
        </div>
    );
};

export default RangeGroupDemo;
