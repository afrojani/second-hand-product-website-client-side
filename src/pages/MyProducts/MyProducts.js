import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);


    const { data: myProducts = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(` https://assignment-12-server-car.vercel.app/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to remove this product?');
        if (proceed) {
            fetch(` https://assignment-12-server-car.vercel.app/myproducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        // const remaining = myProducts.filter(rvw => rvw._id !== id);
                        // setMyReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-3xl font-bold p-5'>My Products List</h2>
            <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    myProducts.map(myProduct => <div className="card w-96 bg-base-100 shadow-xl"
                        key={myProduct._id}>
                        <figure className="px-10 pt-10">
                            <img src={myProduct.imagePath} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{myProduct.itemName}</h2>
                            <p>Price: {myProduct.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-sm">Advertise</button>
                                <button onClick={() => handleDelete(myProduct._id)} className="btn btn-primary btn-sm">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProducts; <h2>my products</h2>