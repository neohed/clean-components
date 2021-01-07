import React from 'react';
import FilterList from "./inputs/filter_list/FilterList";

const data = [
    {id:1,name:'Brent Hamernik' },
    {id:2,name:'Krissy Rain' },
    {id:3,name:'Georgeann Bolton' },
    {id:4,name:'Barbie Gravely' },
    {id:5,name:'Scott Seda' },
    {id:6,name:'Ivonne Mcelvain' },
    {id:7,name:'Dorla Shott' },
    {id:8,name:'Twanda Bradwell' },
    {id:9,name:'Lovetta Ortega' },
    {id:10,name:'Sharan Pearl' },
    {id:11,name:'Shayla Damiani' },
    {id:12,name:'Nakisha Vaughns' },
    {id:13,name:'Lorene Crocker' },
    {id:14,name:'Marcie Brutus' },
    {id:15,name:'Melissia Ricketson' },
    {id:16,name:'Inell Dumlao' },
    {id:17,name:'Blaine Fischetti' },
    {id:18,name:'Ariana Northcutt' },
    {id:19,name:'Dudley Raley' },
    {id:20,name:'Kaila Schooley' },
]

const FilterListDemo = () => {
    return (
        <div>
            <FilterList data={data}>
                {
                    ({id, name}) => <div key={id}>{name}</div>
                }
            </FilterList>
        </div>
    );
};

export default FilterListDemo;
