import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assests/logo.png';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img src={image} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='font-semibold'><Link to='/'>Home</Link></li>
                        <li className='font-semibold'><Link to='/servicepage'>Service</Link></li>
                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                        <li className='font-semibold'><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/' className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;