import React from 'react';
import Card from './Card'

const Page = (props) => {
    const {items, currentPage, nextPage, reload, getNextPage} = props
    return (
        <div className='Page'>
            <h1>{ `current: ${currentPage} nextPage: ${nextPage}`}</h1>
            <div className='CardContainer'>
                { items.slice(0,3).map((item, index) => <Card key={index} {...item} />) }
            </div>
            { items.length > 3 && `And ${items.length - 3} more items`}
            <button onClick={reload}>Reload</button>
            { getNextPage && <button onClick={getNextPage}>Next page</button> }
        </div>
    )
}

export default Page
