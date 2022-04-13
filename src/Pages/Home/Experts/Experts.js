import React from 'react';
import Expert from '../Expert/Expert';

const experts = [

    { id: 1, name: 'william smith', img: 'https://img.freepik.com/free-photo/auto-mechanic-working-garage-repair-service_146671-19690.jpg?t=st=1649816153~exp=1649816753~hmac=6186c3418c225c2b890d1cb716fe7acfb73079024df94388079c36bbdbd4ee31&w=1060' },
    { id: 2, name: 'hollow smith', img: 'https://img.freepik.com/free-photo/auto-mechanic-working-garage-repair-service_146671-19690.jpg?t=st=1649816153~exp=1649816753~hmac=6186c3418c225c2b890d1cb716fe7acfb73079024df94388079c36bbdbd4ee31&w=1060' },
    { id: 3, name: 'hello kitty', img: 'https://img.freepik.com/free-photo/auto-mechanic-working-garage-repair-service_146671-19690.jpg?t=st=1649816153~exp=1649816753~hmac=6186c3418c225c2b890d1cb716fe7acfb73079024df94388079c36bbdbd4ee31&w=1060' },
    { id: 4, name: 'salman khan', img: 'https://img.freepik.com/free-photo/auto-mechanic-working-garage-repair-service_146671-19690.jpg?t=st=1649816153~exp=1649816753~hmac=6186c3418c225c2b890d1cb716fe7acfb73079024df94388079c36bbdbd4ee31&w=1060' },
    { id: 5, name: 'fuine dwane ', img: 'https://img.freepik.com/free-photo/auto-mechanic-working-garage-repair-service_146671-19690.jpg?t=st=1649816153~exp=1649816753~hmac=6186c3418c225c2b890d1cb716fe7acfb73079024df94388079c36bbdbd4ee31&w=1060' },
    { id: 6, name: 'funny smith', img: 'https://img.freepik.com/free-photo/auto-mechanic-working-garage-repair-service_146671-19690.jpg?t=st=1649816153~exp=1649816753~hmac=6186c3418c225c2b890d1cb716fe7acfb73079024df94388079c36bbdbd4ee31&w=1060' },

]

const Experts = () => {

    return (
        <div >
            <h2 className='text-primary text-center mt-5'>this is our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;