import React from 'react';

const SingleReview = ({ review, Handledelete }) => {
    const { FoodName, email, reviewText, CurrentTime } = review;
    return (
        <div className='gap-4'>

            <div className="card card-side bg-base-100 shadow-xl p-3">
                <div className="card-body">
                    <h2 className="card-title">{FoodName}</h2>
                    <h3>email:{email}</h3>
                    <p>Comment : {reviewText}</p>
                    <p>Time: {CurrentTime}</p>
                    <div className="card-actions justify-end flex flex-wrap">
                        <button className="btn btn-primary">Edit</button>
                        <button onClick={() => Handledelete(review._id)} className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;