import React from 'react';

const Card = (props) => {
    const { name, like, createdAt } = props
    return (
        <div>
            <h3>{ name }</h3>
            <p>{ like }</p>
            <p>{ createdAt }</p>
        </div>
    )
}

export default Card