import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-center text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span>Try Another Date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} available</p>
                <div className="justify-center">
                <label 
                htmlFor="booking-modal" 
                disabled={slots.length === 0} 
                onClick={() => setTreatment(service)}
                className="btn btn-secondary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;