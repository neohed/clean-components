import React, {useState, useEffect} from 'react';
import './filter-list.css';

const defaultFilterItem = (item) => item.name;

const FilterList = ({data, children, filterItem = defaultFilterItem}) => {
    const [filter, setFilter] = useState('');
    const [elements, setElements] = useState([]);

    useEffect(() => {
        if (filter === '') {
            setElements(data.slice())
        } else {
            const reFilter = new RegExp(`\\w*${filter}\\w*`, 'i');
            setElements(
                data.filter(
                    (item) => reFilter.test(filterItem(item))
                )
            )
        }
    }, [data, filter, filterItem])

    return (
        <div
            className='filter-list-wrapper'
        >
            <input
                type="text"
                value={filter}
                onChange={({target}) => setFilter(target.value)}
            />
            <div
                className='filter-list'
            >
                {
                    elements.map(item => children(item))
                }
            </div>
        </div>
    );
};

export default FilterList;
