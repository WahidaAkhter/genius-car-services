import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, img, description, price } = service;

    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service mt-5'>
            <h2>this is single service:{name}</h2>
            <img className='w-100' src={img} alt="" />
            <p>price:{price}</p>
            <p>
                <small>details:{description}</small>
            </p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>book {name}</button>

        </div>
    );
};

export default Service;