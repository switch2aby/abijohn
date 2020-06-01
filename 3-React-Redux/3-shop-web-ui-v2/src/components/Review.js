
import React from 'react';

function renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(<i style={{color:'red',fontSize:'25px'}} className="fa fa-star" key={i}></i>)
    }
    return arr;
}

export default ({ value: review }) => {
    return (
        <div className="alert alert-info">
            {renderStars(review.stars)} &mdash; <span className="">{review.author}</span>
            <hr />
            <p>{review.body}</p>
        </div>
    )
}