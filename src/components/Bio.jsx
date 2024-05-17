import { Link } from "react-router-dom";

function Bio() {
  return (
    <section>
      <div className="container gap-16 items-center py-16 lg:grid lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            About me
          </h2>
          <p className="my-4">
            I'm Sani. I've been close to a computer since an early age, and been
            passionate about it ever since. I have a Masters in Business and
            Law. When I'm not programming I'm hiking or practising kickboxing.
          </p>
          <p>
            <Link
              to="/about"
              className="inline-flex items-center font-medium text-blue-600 dark:text-blue-300 hover:underline"
            >
              More about me
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </p>
        </div>
        <div className="mt-8">
          <img
            className="w-full rounded-lg"
            src="../images/profilePicture2.png"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}

export default Bio;
