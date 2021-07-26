import React from 'react';
import './paging.css';

const IndexDiv = ({index, isSelected = false}) => (
    <div
        key={index}
        className={
            isSelected
                ? 'selected'
                : 'unselected'
        }
    >
        {
            index
        }
    </div>
)

const IndexButton = ({index}) => (
    <button
        key={index}
        className='link-button'
    >
        {
            index
        }
    </button>
)

const Paging = ({maxPage, currentPage, onChange = () => null}) => {
    const numberLinks = [];
    if (maxPage < 7) {
        for (let i = 1; i <= maxPage; i++) {
            numberLinks.push(
                (i === currentPage)
                    ? <IndexDiv index={i} isSelected={true} />
                    : <IndexButton index={i} />
            )
        }
    } else {
        numberLinks.push(
            currentPage === 1
                ? <IndexDiv index={1} isSelected={true} />
                : <IndexDiv index={1} isSelected={false} />
        )
        if (currentPage !== 1 && currentPage !== maxPage) {
            numberLinks.push(
                    <IndexDiv index={currentPage} isSelected={true} />
            )
        }
        numberLinks.push(
            currentPage === maxPage
                ? <IndexDiv index={maxPage} isSelected={true} />
                : <IndexDiv index={maxPage} isSelected={false} />
        )
    }

    return (
        <div
            className='paging'
        >
            <button
                disabled={currentPage === 1}
                onClick={() => onChange(0)}
            >
                |&lt;
            </button>
            <button
                disabled={currentPage === 1}
                className='prev'
                onClick={() => onChange(currentPage - 1)}
            >
                &lt;
            </button>
            {
                numberLinks
            }
            <button
                disabled={currentPage === maxPage}
                className='next'
                onClick={() => onChange(currentPage + 1)}
            >
                &gt;
            </button>
            <button
                disabled={currentPage === maxPage}
                onClick={() => onChange(maxPage)}
            >
                &gt;|
            </button>
        </div>
    );
};

export default Paging;
