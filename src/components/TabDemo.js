import React from 'react';
import Tabs from "./tabs/Tabs";

const TabDemo = () => (
    <Tabs>
        <div label="Cenozoic">
            Meaning, <em>new life</em>!
        </div>
        <div label="Mesozoic">
            ...an interval from about 252 to 66 <em>million</em> years ago.
        </div>
        <div label="Paleozoic">
            From the <em>Greek</em> meaning "ancient life"
        </div>
    </Tabs>
);

export default TabDemo;
