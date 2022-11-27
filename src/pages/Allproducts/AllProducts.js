import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductsCard from './ProductsCard';


const AllProducts = () => {
    const allProducts = useLoaderData();

    const [product, setProduct] = useState(null);

    return (
        <div>
            <div className='grid grid-cols-1 gap-6 my-10'>
                {
                    allProducts.map(products => <ProductsCard
                        key={products._id}
                        products={products}
                        setProduct={setProduct}
                    ></ProductsCard>)
                }
            </div>
            {
                product &&
                <BookingModal
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default AllProducts;