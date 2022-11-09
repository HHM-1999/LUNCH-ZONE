import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import moment from 'moment';






const Details = () => {

    const CurrentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(CurrentTime);

    const { user } = useContext(AuthContext);
    console.log(user);
    const handleReview = (event) => {
        event.preventDefault();
        const email = user?.email || " UnRegister";
        const FoodName = event.target.FoodName.value;
        const reviewText = event.target.reviewText.value;
        console.log(email, FoodName, reviewText);


        const reviews = {
            FoodName,
            email,
            reviewText,
            CurrentTime
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged > 0) {
                    alert("Successfully Added");

                }
            })
    }
    const { Name, image, price, rating, short_description } = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='mx-9 w-auto h-full p-6'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p><span className='text-orange'>Price:</span>{price}</p>
                    <p>Rating:{rating}</p>
                    <p>Description:{short_description}</p>



                </div>

                <br>
                </br>

            </div>

            <div>
                <section className='lg:w-2/3 mx-auto mb-12'>
                    <h1 className='text-4xl font-bold text-center my-8 '>Reviews</h1>

                    <form onSubmit={handleReview}>
                        <input type='text' placeholder="Write Here" name='FoodName' defaultValue={Name} readOnly className='input input-ghost text-center w-full shadow-xl' disabled
                        ></input><br />
                        <div className='mt-4 text-center'>
                            <input type="text" placeholder="Email" name="email" defaultValue={user?.email} className="input input-bordered mb-2 input-dark w-1/2 shadow-xl" readOnly></input>
                            <br></br>

                            <textarea className='textarea textarea-dark w-1/2 h-60 shadow-xl' name='reviewText' placeholder='Give your Review here'></textarea>

                        </div>
                        <div className='form-control w-1/2 mx-auto'>
                            <input className='btn btn-primary hover:bg-white-500 mt-4' type="submit" value="Add Reviews" />
                        </div>

                    </form>


                </section>

            </div>
            {
                reviews.map((review) => {
                    return (
                        <div className='flex flex-wrap p-9 '>
                            <div>
                                <image src="" />
                            </div>
                            <div>
                                <p className='semi-font-bold text-blue-600'>Written by :{review.email} </p>
                                <p className='semi-font-bold text-blue-600'>Time : {review.CurrentTime}</p>
                                <p className='semi-font-bold text-blue-600'>Comment : {review.reviewText}</p>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    );
};

export default Details;