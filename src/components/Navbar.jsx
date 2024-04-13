import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import SearchProduct from "./products/SearchProduct";

const profilePic = "https://source.unsplash.com/50x50/?profile";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token") !== null;

  const isActive = (path) => {
    return window.location.pathname === path ? "text-brandGreen" : "";
  };

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
                    <img src={profilePic} alt="Profile" className="profile-pic" />
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
