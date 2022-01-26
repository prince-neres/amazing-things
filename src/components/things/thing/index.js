import React from 'react';
import  './style.css'

const Thing = (props) => {
    return (
        <div class='card'>
            <h2>{props.title}</h2>
            <img src={props.img_url} />
            <p>{props.description}</p>
            <hr/>
        </div>
    )
}

export default Thing;