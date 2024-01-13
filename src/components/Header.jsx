import React from "react";

function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <svg
              className="h-7 mr-4"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.996512 4.99209C0 6.94785 0 9.50809 0 14.6286V17.3714C0 22.4919 0 25.0521 0.996512 27.0079C1.87307 28.7283 3.27175 30.1269 4.99209 31.0035C6.94785 32 9.50809 32 14.6286 32H17.3714C22.4919 32 25.0521 32 27.0079 31.0035C28.7283 30.1269 30.1269 28.7283 31.0035 27.0079C32 25.0521 32 22.4919 32 17.3714V14.6286C32 9.50809 32 6.94785 31.0035 4.99209C30.1269 3.27175 28.7283 1.87307 27.0079 0.996512C25.0521 0 22.4919 0 17.3714 0H14.6286C9.50809 0 6.94785 0 4.99209 0.996512C3.27175 1.87307 1.87307 3.27175 0.996512 4.99209Z"
                fill="#E8853D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7896 13.0033C14.7896 12.2688 15.3901 11.9863 16.3847 11.9863C17.8109 11.9863 19.6125 12.4195 21.0387 13.1916V8.76586C19.4811 8.14437 17.9423 7.89954 16.3847 7.89954C12.5753 7.89954 10.0419 9.89584 10.0419 13.2293C10.0419 18.4272 17.1729 17.5986 17.1729 19.8397C17.1729 20.706 16.4223 20.9885 15.3714 20.9885C13.8138 20.9885 11.8246 20.3482 10.2483 19.4819V23.9641C11.9935 24.7174 13.7575 25.0376 15.3714 25.0376C19.2747 25.0376 21.9582 23.0978 21.9582 19.7267C21.9394 14.1144 14.7896 15.1126 14.7896 13.0033Z"
                fill="white"
              />
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Sanita
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
