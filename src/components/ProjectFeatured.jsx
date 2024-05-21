import projects from "./ProjectsData.jsx";

function ProjectFeatured() {
  const featuredProject = projects.find((project) => project.highlight);

  return (
    <div>
      {featuredProject && (
        <div className="transition ease-in-out duration-700 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50 lg:col-span-full lg:flex lg:gap-6 mb-8">
          <div className="flex-1 rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
            <a
              href={featuredProject.previewURL}
              target="_blank"
              title={featuredProject.title}
            >
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full"
              />
            </a>
          </div>
          <div className="flex-1 mt-6">
            <h3 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold  md:text-xl mb-4 ">
              {featuredProject.title}
            </h3>
            <ul className="list-disc list-inside my-4">
              {featuredProject.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="grid lg:flex lg:items-center lg:gap-4 ">
              {featuredProject.previewURL && (
                <a
                  className="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-600 focus:ring-indigo-500 dark:bg-blue-800  dark:hover:bg-blue-600  dark:focus:ring-slate-500 dark:text-slate-300 dark:hover:text-slate-100"
                  href={featuredProject.previewURL}
                  target="_blank"
                  title={featuredProject.title}
                >
                  {featuredProject.previewButton}
                  <span className="sr-only"></span>
                  <svg
                    className="overflow-visible ml-3 text-blue-500 group-hover:text-indigo-400 dark:text-blue-400 dark:group-hover:text-slate-400"
                    width="3"
                    height="6"
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6"></path>
                  </svg>
                </a>
              )}

              {featuredProject.githubURL && (
                <a
                  className="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 border-solid border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300  focus:ring-indigo-500 dark:bg-slate-800  dark:hover:bg-slate-600  dark:focus:ring-slate-500 mt-4 lg:mt-0"
                  href={featuredProject.githubURL}
                  target="_blank"
                  title={featuredProject.title}
                >
                  GitHub<span className="sr-only"></span>
                  <svg
                    className="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width="3"
                    height="6"
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProjectFeatured;
