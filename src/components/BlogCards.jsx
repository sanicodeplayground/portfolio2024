import { Link } from "react-router-dom";
function BlogCards() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl  font-extrabold text-gray-900 dark:text-white">
            Blog
          </h2>
          <p className=" 0 sm:text-xl dark:text-gray-400">
            Things I've been learning
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <Link
            to="/BlogArticle1"
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50/70 dark:hover:bg-slate-800/50"
          >
            <article>
              <div className="flex justify-between items-center mb-5 0">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Tutorial
                </span>
                <span className="text-sm">1 day ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">
                Install Tailwind CSS in React
              </h2>
              <p className="mb-5  ">
                Learn how to install Tailwind CSS, a utility-firstframework, in
                your React project using Vite.
              </p>

              <p className="inline-flex items-center font-medium text-blue-600 dark:text-blue-300 hover:underline">
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </p>
            </article>
          </Link>
          <Link
            to="/BlogArticle2"
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50/70 dark:hover:bg-slate-800/50"
          >
            <article>
              <div className="flex justify-between items-center mb-5 0">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Tutorial
                </span>
                <span className="text-sm">1 day ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">
                How to change Tailwind CSS base font size
              </h2>
              <p className="mb-5  ">
                Learn how to change the base font in Tailwind CSS using a
                plugin.
              </p>

              <p className="inline-flex items-center font-medium text-blue-600 dark:text-blue-300 hover:underline">
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </p>
            </article>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogCards;
