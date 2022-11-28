import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState([]);
    console.log(currentUser);

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [user?.email])

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    <Outlet></Outlet>
                    <label htmlFor="dash-drawer" className="btn btn-primary drawer-button lg:hidden">See more</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dash-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            currentUser.role === 'buyer' &&
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        }
                        {
                            currentUser.role === 'seller' &&
                            <>
                                <li><Link to='/dashboard/addproduct'>Add a product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                        {
                            currentUser.role === 'admin' &&
                            <>
                                <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;