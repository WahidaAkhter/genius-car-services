import React from 'react';
import './Service.css'

const Service = ({service}) => {

    const { name, img, description, price } = service;

    return (
        <div className='service'>
            <h2>this is single service:{name}</h2>
            <img src={img} alt="" />
            <p>price:{price}</p>
            <p>
                <small>details:{description}</small>
            </p>
            <button>book {name}</button>

        </div>
    );
};

export default Service;