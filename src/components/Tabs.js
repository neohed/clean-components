import React, { useState } from 'react';
import './Tabs.css'

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const onClickTabItem = (tab) => setActiveTab(tab);

    return (
        <div className="tabs">
            <ol className="tab-list">
                {children.map(({props}) => {
                    const { label } = props;

                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClick={onClickTabItem}
                        />
                    );
                })}
            </ol>
            <div className="tab-content">
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;

                    return child.props.children;
                })}
            </div>
        </div>
    )
};

const Tab = ({onClick, activeTab, label}) => (
    <li
        className={`tab-list-item${activeTab === label ? ' tab-list-active' : ''}`}
        onClick={() => onClick(label)}
    >
        {label}
    </li>
);

export default Tabs;
