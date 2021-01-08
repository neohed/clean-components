import React, {useState} from 'react';

const Expander = ({headerContent, children, isCollapsed = true}) => {
    const [isOpen, setIsOpen] = useState(!isCollapsed);

    return (
        <div>
            <header
                onClick={() => setIsOpen(!isOpen)}
            >
                {
                    headerContent(isOpen)
                }
            </header>
            <div
                style={isOpen ? {} : {
                    display: 'none'
                }}
            >
                {
                    children
                }
            </div>
        </div>
    );
};

export default Expander;
