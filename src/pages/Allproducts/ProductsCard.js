import React from 'react';

const ProductsCard = ({ products, setProduct }) => {
    const { imagePath, name, use_year, resale_price, price, seller_name, Location, time } = products;
    return (
        <div>
            <div className="card lg:card-side bg-sky-100 shadow-xl">
                <figure><img className='w-3/4 h-3/4' src={imagePath} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p>Used for: {use_year} year</p>
                    <p>Asking Price: ${resale_price}</p>
                    <p>Buying Price: ${price}</p>
                    <p>Name: {seller_name}</p>
                    <p>Location: {Location}</p>
                    <p>Product Posted: {time}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => setProduct(products)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;