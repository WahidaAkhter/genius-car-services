import React from 'react';
import './Service.css'

const Service = ({service}) => {

    const { name, img, description, price } = service;

    return (
        <div className='service mt-5'>
            <h2>this is single service:{name}</h2>
            <img className='w-100' src={img} alt="" />
            <p>price:{price}</p>
            <p>
                <small>details:{description}</small>
            </p>
            <button className='btn btn-primary'>book {name}</button>

        </div>
    );
};

export default Service;