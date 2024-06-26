import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle based on previous state
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header>
      <nav>
        <div className="container flex flex-wrap items-center justify-between py-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              className="h-7"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.996512 4.99209C0 6.94785 0 9.50809 0 14.6286V17.3714C0 22.4919 0 25.0521 0.996512 27.0079C1.87307 28.7283 3.27175 30.1269 4.99209 31.0035C6.94785 32 9.50809 32 14.6286 32H17.3714C22.4919 32 25.0521 32 27.0079 31.0035C28.7283 30.1269 30.1269 28.7283 31.0035 27.0079C32 25.0521 32 22.4919 32 17.3714V14.6286C32 9.50809 32 6.94785 31.0035 4.99209C30.1269 3.27175 28.7283 1.87307 27.0079 0.996512C25.0521 0 22.4919 0 17.3714 0H14.6286C9.50809 0 6.94785 0 4.99209 0.996512C3.27175 1.87307 1.87307 3.27175 0.996512 4.99209Z"
                fill="#E8853D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.7896 13.0033C14.7896 12.2688 15.3901 11.9863 16.3847 11.9863C17.8109 11.9863 19.6125 12.4195 21.0387 13.1916V8.76586C19.4811 8.14437 17.9423 7.89954 16.3847 7.89954C12.5753 7.89954 10.0419 9.89584 10.0419 13.2293C10.0419 18.4272 17.1729 17.5986 17.1729 19.8397C17.1729 20.706 16.4223 20.9885 15.3714 20.9885C13.8138 20.9885 11.8246 20.3482 10.2483 19.4819V23.9641C11.9935 24.7174 13.7575 25.0376 15.3714 25.0376C19.2747 25.0376 21.9582 23.0978 21.9582 19.7267C21.9394 14.1144 14.7896 15.1126 14.7896 13.0033Z"
                fill="white"
              />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Sanita
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              <li>
                <Link to="/" className="menu" aria-current="page">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link to="/about" className="menu">
                  About
                </Link>
              </li> */}
              <li>
                <Link to="/projects" className="menu">
                  Projects
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="menu">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="menu">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
