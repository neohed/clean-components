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
                style={{
                    visibility: isOpen ? 'visible' : 'hidden'
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
