import React from 'react';
import './paging.css';

const RANGE = 5;

const IndexDiv = ({index}) => (
    <div
        className='index-div'
    >
        {
            index
        }
    </div>
)

const IndexButton = ({index, onClick}) => (
    <button
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
    const to = from + clippedRange - 1;

    if (from > minPage) {
        numberLinks.push(<IndexButton key={minPage} index={minPage} onClick={() => onChange(minPage)} />)

        if (from > minPage + 1) {
            numberLinks.push(<div key='el-01'>...</div>)
        }
    }

    for (let i = from; i <= to; i++) {
        numberLinks.push(
            (i === currentPage)
                ? <IndexDiv key={i} index={i} />
                : <IndexButton key={i} index={i} onClick={() => onChange(i)} />
        )
    }

    if (to < maxPage) {
        if (to < maxPage - 1) {
            numberLinks.push(<div key='el-02'>...</div>)
        }

        numberLinks.push(<IndexButton key={maxPage} index={maxPage} onClick={() => onChange(maxPage)} />)
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
