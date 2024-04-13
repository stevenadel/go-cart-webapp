import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from "../axios";
import SearchProduct from "./products/SearchProduct";

const Navbar = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const isActive = (path) => {
    return window.location.pathname === path ? "!text-brandBlue duration-200 ease-in-out" : "";
  };

  const token = localStorage.getItem("token");
  const isLoggedIn = token !== null;
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  useEffect(() => {
    axiosInstance
      .get("/profile", config)
      .then((response) => {
        const imageUrl = response.data.profile_photo;
        if (imageUrl) {
          response.data.profile_photo = import.meta.env.VITE_API_URL + imageUrl;
        } else {
          response.data.profile_photo = "profile-photo.jpg";
        }
        setUser(response.data);
      })
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-50 mb-10 ">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <button className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-4xl">
            <Link to="/">Go-Cart</Link>
          </button>
        </div>
        <div className="flex items-center gap-6">
          <SearchProduct />
          <div className="flex items-center">
            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  className={`text-gray-500 dark:hover:text-white font-semibold text-2xl ${isActive("/login")}`}
                >
                  Login
                </Link>
                <span className="text-gray-500 dark:text-white mx-2">|</span>
                <Link
                  to="/register"
                  className={`text-gray-500 dark:hover:text-white font-semibold text-2xl ${isActive("/register")}`}
                >
                  Register
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link
                  to="/cart"
                  className={`ml-5 text-gray-500 dark:hover:text-white font-semibold text-2xl ${isActive("/cart")}`}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                <button
                  onClick={handleLogout}
                  className={`ml-5 text-gray-500 active:text-brandYellow dark:hover:text-white font-semibold text-2xl`}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
                <div className="navbar">
                  <Link to="/profile" className="profile-link">
                    <img src={user.profile_photo} alt="Profile" className="profile-pic" />
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
