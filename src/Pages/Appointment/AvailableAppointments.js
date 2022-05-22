import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h4 className='text-xl font-bold text-secondary text-center'>Available Apointments on {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppointments;