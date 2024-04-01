import React from "react";
import { FaCaretDown } from "react-icons/fa";

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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 mb-10 ">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <button
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              onClick={() => {
                /* Add your click event handler here */
              }}
            >
              Go-Cart
            </button>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  {/* Dropdown Links */}
                  <div className="absolute right-0 z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex items-center gap-6">
            {/* Dropdown for Quick Links */}
            <div className="relative cursor-pointer group">
              <button className="flex items-center gap-[4px] font-semibold text-gray-500 dark:hover:text-white py-2">
                Quick Links
                <span>
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </span>
              </button>

              {/* Dropdown Links for Quick Links */}
              <div className="absolute right-0 z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                <ul className="space-y-2">
                  {DropdownLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Login and Register Links */}
            <div>
              <a
                href="/login"
                className="text-gray-500 dark:hover:text-white font-semibold"
              >
                Login
              </a>
              <span className="text-gray-500 dark:text-white mx-2">|</span>
              <a
                href="/register"
                className="text-gray-500 dark:hover:text-white font-semibold"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
