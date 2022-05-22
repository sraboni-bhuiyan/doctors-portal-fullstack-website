import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service;
    return (
        <div class="card lg:max-w-lg shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-center text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span></span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} available</p>
                <div class="justify-center">
                <button disabled={slots.length === 0} className="btn btn-secondary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;