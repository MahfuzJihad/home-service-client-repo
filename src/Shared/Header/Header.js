import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../assests/logo.png";
import { AuthContex } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content bg-base-120 pb-4">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={image} alt="" /> <p>HomeHut</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 p-0">
            <li className="font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold">
              <Link to="/servicepage">Service</Link>
            </li>
            <li className="font-semibold">
              <Link to="/blog">Blog</Link>
            </li>

            {!user &&
              <li><Link to="/login">Login</Link></li>
            }
            {user && (
              <Fragment>
                <li className="font-semibold">
                <Link to="/addservice">Add service</Link>
              </li>
                <li className="font-semibold">
                  <Link to="/myreview">My Review</Link>
                </li>
                <li className="py-2 font-semibold items-center">
                  {user?.displayName}
                </li>
              </Fragment>
            )}

            {user && (
              <button
                className="font-semibold py-2 px-4 bg-rose-600 rounded-lg"
                onClick={handleLogOut}
              >
                Log out
              </button>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/" className="btn">
            Refresh
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
