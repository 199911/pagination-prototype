import React from 'react';

const Card = (props) => {
    const { name, like, createdAt } = props
    const createAtStr = (new Date(createdAt)).toDateString()
    return (
        <div className='Card'>
            <h3>{ name }</h3>
            <p>{ `Likes: ${like}` }</p>
            <p>{ `Created At: ${createAtStr}` }</p>
        </div>
    )
}

export default Card