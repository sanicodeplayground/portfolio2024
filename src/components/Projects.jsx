function Projects() {
  return (
    <section>
      
      <div className="container py-16">
      
      <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
        Projects
      </h2>

      {/* projects grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-6xl pb-20">
        <li className="ease-in duration-700 rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50 ">
          <div className="rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
            <a href="https://connou.app" target="_blank" title="Connou">
              <img
                src="./images/portfolio/portfolioConnou.jpg"
                alt="Portfolio"
                className="w-full h-full transition ease-in-out duration-1000 object-cover hover:scale-150"
              />
            </a>
          </div>
          <div className="mt-6">
            <h3 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold  md:text-xl mb-4 ">
              Connou
            </h3>
            <ul className="list-disc list-inside my-4">
              <li>Junior Front End Developer</li>
              <li>Tailwind v3.4</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Responsive design</li>
            </ul>
            <div className="grid">
              <a
                class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-600 focus:ring-indigo-500 dark:bg-blue-800  dark:hover:bg-blue-600  dark:focus:ring-slate-500 mt-2 dark:text-slate-300 dark:hover:text-slate-100"
                href="https://connou.app"
                target="_blank"
                title="Preview Connou website"
              >
                Preview<span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-blue-500 group-hover:text-indigo-400 dark:text-blue-400 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li className="ease-in duration-700 rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50 ">
          <div className="rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
            <a
              href="https://tailwindcss-shop.vercel.app/"
              target="_blank"
              title="Preview Veggie website"
            >
              <img
                src="./images/portfolio/portfolioVerde.jpg"
                alt="portfolioVerde"
                className="w-full h-full transition ease-in-out duration-1000 object-cover hover:scale-150"
              />
            </a>
          </div>
          <div className="mt-6">
            <h3 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold  md:text-xl mb-4 ">
              Veggie Recipes
            </h3>
            <ul className="list-disc list-inside my-4">
              <li>Vercel deployment</li>
              <li>Tailwind v3.4</li>
              <li>JavaScript</li>
              <li>Responsive design</li>
            </ul>
            <div className="grid">
              <a
                class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-600 focus:ring-indigo-500 dark:bg-blue-800  dark:hover:bg-blue-600  dark:focus:ring-slate-500 mt-2 dark:text-slate-300 dark:hover:text-slate-100"
                href="https://tailwindcss-shop.vercel.app/"
                target="_blank"
                title="Preview Veggie website"
              >
                Preview<span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-blue-400 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
              <a
                class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 border-solid border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300  focus:ring-indigo-500 dark:bg-slate-800  dark:hover:bg-slate-600  dark:focus:ring-slate-500 mt-4"
                href="https://github.com/sanicodeplayground/tailwindcss"
                target="_blank"
                title="Github Veggie website"
              >
                Github<span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li className="ease-in duration-700 rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50 ">
          <div className="rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
            <a
              href="https://sanicodeplayground.github.io/solicitor-website/"
              target="_blank"
              title="Preview Corporate website"
            >
              <img
                src="./images/portfolio/portfolioSolicitors.jpg"
                alt="Portfolio Corporate Solicitors Website"
                className="w-full h-full transition ease-in-out duration-1000 object-cover hover:scale-150"
              />
            </a>
          </div>
          <div className="mt-6">
            <h3 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold  md:text-xl mb-4 ">
              Corporate website
            </h3>
            <ul className="list-disc list-inside my-4">
              <li>React</li>
              <li>Slider animation</li>
              <li>Javascript</li>
              <li>Bootstrap 5</li>
              <li>Responsive design</li>
            </ul>
            <div className="grid">
              <a
                class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-600 focus:ring-indigo-500 dark:bg-blue-800  dark:hover:bg-blue-600  dark:focus:ring-slate-500 mt-2 dark:text-slate-300 dark:hover:text-slate-100"
                href="https://sanicodeplayground.github.io/solicitor-website/"
                target="_blank"
                title="Preview Corporate website"
              >
                Preview<span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-blue-400 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
              <a
                class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 border-solid border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300  focus:ring-indigo-500 dark:bg-slate-800  dark:hover:bg-slate-600  dark:focus:ring-slate-500 mt-4"
                href="https://github.com/sanicodeplayground/solicitor-website"
                target="_blank"
                title="Github Corporate website"
              >
                Github<span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li className="ease-in duration-700 rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50 ">
          <div className="rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
            <a
              href="https://sanicodeplayground.github.io/js-dice-game/"
              target="_blank"
              title="Dice Game"
            >
              <img
                src="./images/portfolio/portfolioGameDice.jpg"
                alt="Portfolio Dice Game"
                className="w-full h-full transition ease-in-out duration-1000 object-cover hover:scale-150"
              />
            </a>
          </div>
          <div className="mt-6">
            <h3 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold  md:text-xl mb-4 ">
              Dice Game
            </h3>
            <ul className="list-disc list-inside my-4">
              <li>Vanilla JavaScript</li>
              <li>Game logic</li>
              <li>Array and functions</li>
            </ul>
            <div className="grid">
              <a
                class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-600 focus:ring-indigo-500 dark:bg-blue-800  dark:hover:bg-blue-600  dark:focus:ring-slate-500 mt-2 dark:text-slate-300 dark:hover:text-slate-100"
                href="https://sanicodeplayground.github.io/js-dice-game/"
                target="_blank"
                title="Preview Dice Game"
              >
                Preview<span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-blue-400 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
              <a
                class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 border-solid border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300  focus:ring-indigo-500 dark:bg-slate-800  dark:hover:bg-slate-600  dark:focus:ring-slate-500 mt-4"
                href="https://github.com/sanicodeplayground/js-dice-game"
                target="_blank"
                title="Github Corporate website"
              >
                Github<span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li className="ease-in duration-700 rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50 ">
          <div className="rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
            <a
              href="https://react-newsletter-sign-up-rho.vercel.app/"
              target="_blank"
              title="Newsletter Validation"
            >
              <img
                src="./images/portfolio/portfolioNewsletterValidation.jpg"
                alt="Portfolio Newsletter Validation"
                className="w-full h-full transition ease-in-out duration-1000 object-cover hover:scale-150"
              />
            </a>
          </div>
          <div className="mt-6">
            <h3 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold  md:text-xl mb-4 ">
              Newsletter Validation
            </h3>
            <ul className="list-disc list-inside my-4">
              <li>React state hook </li>
              <li>Form input validation</li>
              <li>Error handling</li>
              <li>Success message</li>
              <li>Vercel deployment</li>
            </ul>
            <div className="grid">
              <a
                class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-600 focus:ring-indigo-500 dark:bg-blue-800  dark:hover:bg-blue-600  dark:focus:ring-slate-500 mt-2 dark:text-slate-300 dark:hover:text-slate-100"
                href="https://react-newsletter-sign-up-rho.vercel.app/"
                target="_blank"
                title="Preview"
              >
                Preview<span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-blue-400 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
              <a
                class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 border-solid border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300  focus:ring-indigo-500 dark:bg-slate-800  dark:hover:bg-slate-600  dark:focus:ring-slate-500 mt-4"
                href="https://github.com/sanicodeplayground/react-newsletter-sign-up-form"
                target="_blank"
                title="Github project"
              >
                Github<span class="sr-only"></span>
                <svg
                  class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
      </div>
    </section>
  );
}

export default Projects;
