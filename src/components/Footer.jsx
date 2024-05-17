import { Link } from "react-router-dom";

const linksPortfolio = [
  {
    id: 1,
    title: "Projects",
    URL: "/projects",
  },
  {
    id: 2,
    title: "Blog",
    URL: "/blog",
  },
  {
    id: 3,
    title: "Clone this design",
    URL: "https://github.com/sanicodeplayground/portfolio2024",
  },
];

const linksSocial = [
  {
    id: 1,
    title: "LinkedIn",
    URL: "https://www.linkedin.com/in/sgailu/",
  },
  {
    id: 2,
    title: "Github",
    URL: "https://github.com/sanicodeplayground",
  },
];

const footerResources = [
  {
    id: 1,
    title: "Mozilla Developer",
    URL: "https://developer.mozilla.org/en-US/",
  },
  {
    id: 2,
    title: "Thinking in React",
    URL: "https://react.dev/learn/thinking-in-react",
  },
  {
    id: 3,
    title: "Accessibility check",
    URL: "https://wave.webaim.org/",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-0 sm:p-6">
      <div className="container pt-16">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="flex items-center"
              aria-label="Link to home page"
              title="Home page"
            >
              <svg
                width="32"
                height="32"
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
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {linksPortfolio.map((link) => (
                  <li key={link.id} className="mb-4">
                    <Link to={link.URL} className="hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow me
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {linksSocial.map((link) => (
                  <li key={link.id} className="mb-4">
                    <a
                      href={link.URL}
                      className="hover:underline "
                      target="_blank"
                      title={link.title}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources for Developers
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {footerResources.map((link) => (
                  <li key={link.id} className="mb-4">
                    <a
                      href={link.URL}
                      className="hover:underline"
                      target="_blank"
                      title={link.title}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear} Built with React and Tailwind CSS. Hosted on Vercel.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/sanicodeplayground"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              title="Link to Github profile"
              aria-label="Link to Github profile"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
