import React from 'react';



const AddService = () => {
    const handleAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const Name = form.Name.value;
        const image = form.image.value;
        const price = form.price.value;
        const short_description = form.short_description.value;
        console.log(Name, image, price, short_description);

        const Addservice = {
            Name,
            image,
            price,
            short_description
        }



        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                "content-type": "application.json"
            },
            body: JSON.stringify(Addservice)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged > 0) {
                    alert("Food Service Items are added successfully")
                    form.reset();
                }
            }
            );

        // console.log(name, img, price, description);

    }


    return (
        <div className='gap-4 mt-5 p-6'>
            <form onSubmit={handleAdd}>

                <div className='mt-4 text-center'>
                    <input type="text" placeholder="FoodServiceName" name="Name" className="input input-bordered mb-2 input-dark w-1/2 shadow-xl" ></input>
                    <br></br>
                    <input type="text" placeholder="Image URL" name="image" className="input input-bordered mb-2 input-dark w-1/2 shadow-xl" ></input>
                    <br />
                    <input type="text" placeholder="Food Price" name="price" className="input input-bordered mb-2 input-dark w-1/2 shadow-xl" ></input>
                    <br></br>
                    <br></br>
                    <textarea type="text" className='textarea textarea-dark w-1/2 h-60 shadow-xl' name='short_description' placeholder='Write your description'></textarea>

                </div>
                <div className='form-control w-1/2 mx-auto'>
                    <input className='btn btn-warning hover:bg-orange-500 mt-4' type="submit" value="Add Services" />
                </div>

            </form>


        </div>
    );
};

export default AddService;