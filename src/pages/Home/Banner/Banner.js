import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1574023278969-abb7ab49945c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwZGVhbGVyc2hpcHxlbnwwfHwwfHw%3D&w=1000&q=80")` }}>
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