import React, { Component } from 'react';
import './Tabs.css'

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    };

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

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
        );
    }
}

const Tab = ({onClick, activeTab, label}) => (
    <li
        className={`tab-list-item${activeTab === label ? ' tab-list-active' : ''}`}
        onClick={() => onClick(label)}
    >
        {label}
    </li>
);

export default Tabs;
