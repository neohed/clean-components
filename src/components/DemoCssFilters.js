import React, {useState} from 'react';
import CssFilterEditor from "./image_filters/CssFilterEditor";
import img from '../image/City_skyline_2020.jpg';

const DemoCssFilters = () => {
    const [filterCss, setFilterCss] = useState('');

    return (
        <div>
            <CssFilterEditor
                onCssChanged={setFilterCss}
            />
            <div>
                {
                    filterCss
                }
            </div>
            <div>
            <img
                style={{
                    ...(filterCss === '' ? {} : {
                        filter: filterCss
                    })
                }}
                src={img}
                width='100%'
                alt="city skyline"
            />
            </div>
        </div>
    );
}

export default DemoCssFilters;
