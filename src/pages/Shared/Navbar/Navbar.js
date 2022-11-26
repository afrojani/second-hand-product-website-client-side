import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/android-chrome-192x192.png';

const Navbar = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>
    // const navItems2 = <>
    //     <li><Link to='/'>Home</Link></li>
    //     <li><Link to='/about'>About</Link></li>
    //     <li><Link to='/blogs'>Blogs</Link></li>
    // </>


    return (
        <div className="navbar sticky bg-violet-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {navItems}
                        {/* {
                            user?.uid ?
                                <>
                                    {navItems2}
                                </>
                                :
                                <>
                                    {navItems}
                                </>
                        } */}
                    </ul>
                </div>

                <Link className='flex flex-row-reverse'>
                    <img className='w-32 h-16' src={logo} alt="" />
                    <img className='w-20 h-16 rounded-full mx-2' src="https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=2000" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {navItems}
                    {/* {
                        user?.uid ?
                            <>
                                {navItems2}
                            </>
                            :
                            <>
                                {navItems}
                            </>
                    } */}
                </ul>
            </div>

            <div className="navbar-end">
                <div>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">Hover</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Item 1</Link></li>
                            <li><Link>Item 2</Link></li>
                        </ul>
                    </div>
                </div>
                <Link to='/login' className="btn btn-primary">Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;