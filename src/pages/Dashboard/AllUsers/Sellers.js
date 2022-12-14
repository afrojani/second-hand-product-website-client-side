import React from 'react';
import toast from 'react-hot-toast';

const Sellers = ({ users, refetch }) => {

    const { role, name, email, _id } = users;

    const handleMakeAdmin = id => {
        fetch(` https://assignment-12-server-car.vercel.app/users/admin/${id}`, {
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

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to remove this product?');
        if (proceed) {
            fetch(` https://assignment-12-server-car.vercel.app/allusers/${id}`, {
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

    if (role === 'seller') {
        return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button onClick={() => handleMakeAdmin(_id)} className='btn btn-xs btn-primary' >
                            Make Admin
                        </button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-square btn-sm">
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

export default Sellers;