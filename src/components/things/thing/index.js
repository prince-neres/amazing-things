import React from 'react';
import  './style.css'

const Thing = (props) => {

    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <img src={props.img_url} className={props.gray ?'gray':''}/>
            <p>{props.description}</p>
            <hr/>
        </div>
    )
}

export default Thing;