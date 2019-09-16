import React from 'react';

const Card = (props) => {
    const { name, likes, created_at } = props
    const createAtStr = (new Date(created_at)).toDateString()
    return (
        <div className='Card'>
            <h3>{ name }</h3>
            <p>{ `Likes: ${likes}` }</p>
            <p>{ `Created At: ${createAtStr}` }</p>
        </div>
    )
}

export default Card