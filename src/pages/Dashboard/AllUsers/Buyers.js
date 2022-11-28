import React from 'react';
import toast from 'react-hot-toast';

const Buyers = ({ users, refetch }) => {

    const { role, name, email, _id } = users;

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Admin Made Successfully');
                    refetch();
                }
            })
    }

    if (role === 'buyer') {
        return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button onClick={() => handleMakeAdmin(_id)} className='btn btn-xs btn-primary' >
                            Make Admin
                        </button>
                        <button className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Role: {role}</p>
                </div>
            </div>
        );
    }

};

export default Buyers;