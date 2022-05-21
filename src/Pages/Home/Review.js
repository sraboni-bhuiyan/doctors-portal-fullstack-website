import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div>
                    <div className="flex items-center">
                        <div className="avatar">
                            <div class="w-16 rounded-full ring ring-primary mr-5">
                                <img src={review.img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl'>{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;