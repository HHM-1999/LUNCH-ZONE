import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const MyReview = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const Handledelete = (id) => {

        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {
                        alert("Successfully Deleted");
                    }
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setReviews(remaining);

                })
        }
    }




    return (
        <div>
            <div className='mt-5 p-4 mx-9'>
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                        Handledelete={Handledelete}

                    >

                    </SingleReview>)
                }
            </div>
        </div>
    );
};

export default MyReview;