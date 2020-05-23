/*
    Based on: https://alligator.io/react/tabs-component/
*/
import React, { useState } from 'react';
import './tabs.css'

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    return (
        <div className="tabs">
            <ol className="tab-list">
                {children.map(({props}) => {
                    const { label } = props;

                    return (
                        <li
                            key={label}
                            className={`tab-list-item${activeTab === label ? ' tab-list-active' : ''}`}
                            onClick={() => setActiveTab(label)}
                        >
                            {label}
                        </li>
                    );
                })}
            </ol>
            <div className="tab-content">
                {children.map(({props}) => {
                    const {label, children} = props;

                    return label !== activeTab
                        ? undefined
                        : children;
                })}
            </div>
        </div>
    )
};

export default Tabs;
