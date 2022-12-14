import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Sellers from './Sellers';

const AllSellers = () => {
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch(' https://assignment-12-server-car.vercel.app/allusers');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl font-bold text-cyan-700 p-5'>All Sellers</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    allUsers.map(users => <Sellers
                        key={users._id}
                        users={users}
                        refetch={refetch}
                    ></Sellers>)
                }
            </div>
        </div>
    );
};

export default AllSellers;