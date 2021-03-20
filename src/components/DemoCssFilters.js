import React, {useState} from 'react';
import CssFilterEditor from "./image_filters/CssFilterEditor";

const DemoCssFilters = () => {
    const [css, setCss] = useState('');

    return (
        <div>
            <CssFilterEditor
                onCssChanged={setCss}
            />
            <div>
                {
                    css
                }
            </div>
        </div>
    );
};

export default DemoCssFilters;
