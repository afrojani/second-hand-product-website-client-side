import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';


const AllProducts = () => {
    const allProducts = useLoaderData();

    return (
        <div className='grid grid-cols-1 gap-6 my-10'>
            {
                allProducts.map(products => <ProductsCard
                    key={products._id}
                    products={products}
                ></ProductsCard>)
            }
        </div>
    );
};

export default AllProducts;