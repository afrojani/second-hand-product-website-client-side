import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://image.shutterstock.com/image-photo/cars-sale-stock-row-car-260nw-636632101.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Your Car, Your necessity, Our responsibility.</h1>
                    <p className="mb-5 font-semibold">Now-a-days cars are not luxury, they have become necessity. Cars are now part and parcel of our life. So choose your car wisely from our site according to your budget.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;