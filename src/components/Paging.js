import React from 'react';
import './paging.css';

const RANGE = 7;

const IndexDiv = ({index}) => (
    <div
        key={index}
        className='index-div'
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

const Paging = ({minPage = 1, maxPage, currentPage = minPage, onChange = () => null}) => {
    const numberLinks = [];
    const clippedRange = Math.min(RANGE, (maxPage - minPage + 1))
    const div = Math.floor(clippedRange / 2);
    const from = currentPage - div < minPage
        ? minPage
        : currentPage + div > maxPage
            ? maxPage - clippedRange + 1
            : currentPage - div;
    const to = from + clippedRange;

    for (let i = from; i < to; i++) {
        numberLinks.push(
            (i === currentPage)
                ? <IndexDiv index={i} />
                : <IndexButton index={i} onClick={() => onChange(i)} />
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
            <div
                className='pager-numbers'
            >
                {
                    numberLinks
                }
            </div>
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
