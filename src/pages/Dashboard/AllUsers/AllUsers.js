import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const { data: allUsers = [] } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl font-bold text-cyan-700 p-5'>All Users</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    allUsers.map(users => <div className="card w-96 bg-base-100 shadow-xl"
                        key={users._id}>
                        <div className="card-body">
                            <p>Name: {users.name}</p>
                            <p>Email: {users.email}</p>
                            <p>Role: {users.role}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllUsers;