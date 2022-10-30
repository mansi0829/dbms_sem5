import React from "react";
import { login, logout } from "../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const NavBar = (props) => {
  function logout() {
    localStorage.removeItem("userinfo");
    toast.success("Logged out");
    props.logout();
  }
  return (
    <div>
      <nav className="nav flex flex-wrap items-center justify-between px-1 ">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <Link to="/">
            <span className="anton-logo text-5xl tracking-tight px-5 ">
              Auth Template
            </span>
          </Link>
        </div>
        <input className="menu-btn hidden " type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-grey-light flex items-center relative"></span>
        </label>

        {props.isAuthenticated ? (
          <ul className="menu border-b md:border-none px-2 flex justify-end list-reset m-0 w-full md:w-auto">
            <li className=" md:border-none px-2 hover:text-gray-400">
              <Link
                to="/#"
                className="block md:inline-block px-1 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Home
              </Link>
            </li>
            <li className=" md:border-none px-2 hover:text-gray-400">
              <Link
                to="/user/profile"
                className="block md:inline-block px-1 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Profile
              </Link>
            </li>
            <li className=" md:border-none px-2 hover:text-gray-400">
              <Link
                to="/"
                className="block md:inline-block px-1 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                <div onClick={logout}>
                  <span className="hide-sm"> &nbsp;Logout</span>
                </div>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="menu border-b md:border-none px-2 flex justify-end list-reset m-0 w-full md:w-auto">
            <li className=" md:border-none px-2 p-2 hover:text-gray-400">
              <Link
                to="/"
                className="block md:inline-block px-1  py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Home
              </Link>
            </li>
            <li className=" md:border-none px-2 p-2 hover:text-gray-400">
              <Link
                to="/auth/login"
                className="block md:inline-block px-1  py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Sign In
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
}
function mapActionToProps(dispatch) {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapActionToProps)(NavBar);
