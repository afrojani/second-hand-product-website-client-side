import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllProducts = () => {
    const allProducts = useLoaderData();

    return (
        <div>
            <h2>all category products</h2>
            {
                allProducts.map(products => <p>{products.name}</p>)
            }
        </div>
    );
};

export default AllProducts;