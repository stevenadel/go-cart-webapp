import React from "react";

// Importing the required icons
import { FaCaretDown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
const profilePic = "https://source.unsplash.com/50x50/?profile";

const DropdownLinks = [
  {
    id: 1,
    name: "Products Section",
    link: "/#productsSection",
  },
  {
    id: 2,
    name: "Category Section",
    link: "/#categorySection",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-50 mb-10 ">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <button
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-4xl"
              onClick={() => {
                /* Add your click event handler here */
              }}
            >
              <Link to="/">Go-Cart</Link>
            </button>
          </div>

          {/* Navbar Right section */}
          <div className="flex items-center gap-6">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Login and Register Links */}
            <div className="flex items-center">
              <Link
                to="/login"
                className="text-gray-500 dark:hover:text-white font-semibold text-2xl"
              >
                Login
              </Link>
              {/* <Link to="login">To login</Link> */}
              <span className="text-gray-500 dark:text-white mx-2">|</span>
              <Link
                to="/register"
                className="text-gray-500 dark:hover:text-white font-semibold text-2xl"
              >
                Register
              </Link>
              <Link
                to="/cart"
                className=" ml-5 text-gray-500 dark:hover:text-white font-semibold text-2xl"
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              <div className="navbar">
                <Link to="/profile" className="profile-link">
                  <img src={profilePic} alt="Profile" className="profile-pic" />
                </Link>
                {/* Add other navbar items here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
