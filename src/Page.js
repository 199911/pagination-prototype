import React from 'react';
import Card from './Card'

const Page = (props) => {
    const {items, reload, getNextPage} = props
    return (
        <div>
            { items.map((item, index) => <Card key={index} {...item} />) }
            <button onClick={reload}>Reload</button>
            <button onClick={getNextPage}>Next page</button>
        </div>
    )
}

export default Page
