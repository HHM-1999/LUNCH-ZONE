import React from 'react';

const AddReview = () => {

    return (
        <div className='mt-5 p-4 mx-9'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">title</h2>
                    <p>Price: </p>
                    <div className="card-actions justify-end flex flex-wrap">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;