import React from "react";
import { Link, NavLink } from "react-router";
import "../../App.css";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apps">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/installed">Installation</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col gap-4"
            >
              {links}
            </ul>
          </div>
          <Link
            className="btn btn-link no-underline hover:no-underline text-xl"
            href="/"
          >
            <img className="w-[35px]" src="../assets/logo.png" />
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-2">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            target="_blank"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
            to="https://github.com/dhafnanbd"
          >
            <img
              className="w-5 stroke-white"
              src="../assets/github.svg"
              alt=""
            />
            Contribution
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
