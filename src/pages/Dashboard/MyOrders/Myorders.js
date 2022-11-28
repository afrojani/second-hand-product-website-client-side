import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Myorders = () => {
    const { user } = useContext(AuthContext);

    const { data: myOrders = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(` https://assignment-12-server-car.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl font-bold p-5'>My orders List</h2>
            <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    myOrders.map(myOrder => <div className="card w-96 bg-base-100 shadow-xl"
                        key={myOrder._id}>
                        <figure className="px-10 pt-10">
                            <img src={myOrder.imagePath} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{myOrder.itemName}</h2>
                            <p>Price: {myOrder.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Pay Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Myorders;