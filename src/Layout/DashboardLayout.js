import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
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

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;