function Projects() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <h2 className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Connou
          </h3>
          <h4 className="text-gray-900 dark:text-gray-100 font-bold">
            Junior FrontEnd Developer
          </h4>
          <ul className="text-gray-900 dark:text-white text-sm font-normal  *:bg-cyan-200 *:dark:bg-cyan-900 *:rounded-md flex gap-2 flex-wrap  *:py-2 *:px-2 py-4 ">
            <li>Typescript</li>
            <li>React</li>
            <li>Docker</li>
            <li>Next.js</li>
          </ul>
          <p className="mb-6 mt-6">
            In my role, I'm building a responsive web app, handle the logic of
            the pages, ensure its proper functionality, debug any issues, and
            write unit tests. Most of the time I'm using Typescript and React.
          </p>
          <a
            href="https://connou.app/"
            target="_blank"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group mb-4"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Live website
            </span>
            <span className="relative invisible">Live website</span>
          </a>
        </div>
        <div className="grid ">
          <a href="https://connou.app/" target="_blank">
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="./images/portfolio/portfolio-connou-app.png"
              alt="Connou"
            />
          </a>
        </div>
      </div>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Todo List App
          </h3>
          <h4 className="text-gray-900 dark:text-gray-100 font-bold">
            Personal project
          </h4>
          <ul className="text-gray-900 dark:text-white text-sm font-normal  *:bg-cyan-200 *:dark:bg-cyan-900 *:rounded-md flex gap-2 flex-wrap  *:py-2 *:px-2 py-4 ">
            <li>Node.js</li>
            <li>Express</li>
            <li>EJS</li>
          </ul>
          <p className="mb-6 mt-6">
            A dynamic web application built with Node.js and Express, featuring
            a user-friendly interface rendered with EJS templates. This project
            allows users to manage their daily tasks.
          </p>
          <div className="flex gap-4">
            <a
              href="https://todo-list-app-92j8.onrender.com/"
              target="_blank"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group mb-4"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Live website
              </span>
              <span className="relative invisible">Live website</span>
            </a>
            <a
              href="https://github.com/sanicodeplayground/todo-app"
              target="_blank"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group mb-4"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Github
              </span>
              <span className="relative invisible">Github</span>
            </a>
          </div>
        </div>
        <div className="grid ">
          <a href="https://todo-list-app-92j8.onrender.com/" target="_blank">
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="./images/portfolio/portfolio-todo-list.png"
              alt="ToDo"
            />
          </a>
        </div>
      </div>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Recipe Platform
          </h3>

          <h4 className="text-gray-900 dark:text-gray-100 font-bold">
            Personal project
          </h4>
          <ul className="text-gray-900 dark:text-white text-sm font-normal  *:bg-cyan-200 *:dark:bg-cyan-900 *:rounded-md flex gap-2 flex-wrap  *:py-2 *:px-2 py-4 ">
            <li>Vercel</li>
            <li>JavaScript</li>
            <li>Tailwind v3.4</li>
          </ul>
          <p className="mb-6 mt-6">
            Platform dedicated to plant-based recipes, where users can explore a
            range of delicious vegetarian dishes. Build using Tailwind CSS and
            deployed using Vercel.
          </p>
          <div className="flex gap-4">
            <a
              href="https://tailwindcss-shop.vercel.app/"
              target="_blank"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group mb-4"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Live website
              </span>
              <span className="relative invisible">Live website</span>
            </a>
            <a
              href="https://github.com/sanicodeplayground/tailwindcss"
              target="_blank"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group mb-4"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Github
              </span>
              <span className="relative invisible">Github</span>
            </a>
          </div>
        </div>
        <div className="grid ">
          <a href="https://tailwindcss-shop.vercel.app/" target="_blank">
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="./images/portfolio/portfolio-recipes.jpg"
              alt="Recipe Platform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
