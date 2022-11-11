import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assests/logo.png';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content bg-base-120 pb-4">
                <div className="navbar-start">

                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img src={image} alt="" /> <p>HomeHut</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='font-semibold'><Link to='/'>Home</Link></li>
                        <li className='font-semibold'><Link to='/servicepage'>Service</Link></li>
                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                        <li className='font-semibold'><Link to='/login'>
                            {
                                user?.uid ?
                                    <>
                                        <span> {user?.displayName}</span>
                                        <button onClick={handleLogOut}>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                    </>
                            }

                        </Link></li>

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