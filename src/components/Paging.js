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

const IndexButton = ({index, onClick}) => (
    <button
        key={index}
        className='link-button'
        onClick={onClick}
    >
        {
            index
        }
    </button>
)

const Paging = ({minPage = 1, maxPage, currentPage, onChange = () => null}) => {
    const numberLinks = [];
    if (maxPage < 7) {
        for (let i = 1; i <= maxPage; i++) {
            numberLinks.push(
                (i === currentPage)
                    ? <IndexDiv index={i} isSelected={true} />
                    : <IndexButton index={i} onClick={() => onChange(i)} />
            )
        }
    } else {
        numberLinks.push(
            currentPage === minPage
                ? <IndexDiv key={1} index={minPage} isSelected={true} />
                : <IndexButton key={1} index={minPage} onClick={() => onChange(minPage)} />
        )
        numberLinks.push(<div key={2}>...</div>)
        if (currentPage !== 1 && currentPage !== maxPage) {
            numberLinks.push(
                    <IndexDiv key={3} index={currentPage} isSelected={true} />
            )
            numberLinks.push(<div key={4}>...</div>)
        }
        numberLinks.push(
            currentPage === maxPage
                ? <IndexDiv key={5} index={maxPage} isSelected={true} />
                : <IndexButton key={5} index={maxPage}  onClick={() => onChange(maxPage)} />
        )
    }

    return (
        <div
            className='paging'
        >
            <button
                disabled={currentPage === minPage}
                onClick={() => onChange(minPage)}
            >
                |&lt;
            </button>
            <button
                disabled={currentPage === minPage}
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
