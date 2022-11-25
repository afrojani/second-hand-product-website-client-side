import React from 'react';

const Services = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center mt-5'>Our special Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                <div className="card sm:w-80 md:w-auto bg-base-100 image-full">
                    <figure><img src="https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Car Repairing</h2>
                        <p>Take our car repairing service at a low price. We provide all kind of car inspection and repairing with our very experienced mechanics. </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See more</button>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-80 md:w-auto bg-base-100 image-full">
                    <figure><img src="https://media.istockphoto.com/id/1310978741/photo/water-under-pressure-in-a-self-service-car-wash.jpg?b=1&s=170667a&w=0&k=20&c=CcsQjCiYzhFd8hwuTMzgBTMRgJuZdUMjxVNwTPv8uQI=" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Car Wash</h2>
                        <p>We have a fully automated car wash center in our local shop. You can take this service anytime. Besides that we provide special premium car wash service operated by our experienced workers. </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Visit Us</button>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-80 md:w-auto bg-base-100 image-full">
                    <figure><img src="https://media.istockphoto.com/id/1212230930/photo/car-engine-parts.jpg?b=1&s=170667a&w=0&k=20&c=uRznZNyOaDxrPakXNjogT__dnxmuwsI4osFyWhnRAQA=" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Automobile Parts</h2>
                        <p>Buy new and old spare automobile parts from our website. You can visit our physical shop too. We have a wide range of automobile parts collection which will help you to find the right parts for your car.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;