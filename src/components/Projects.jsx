import projects from "./ProjectsData";

function Projects() {
  

  return (
    <section>
      <div className="container py-16">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
          Projects
        </h2>

        {/* Projects grid */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-20">
          {projects.map((project) => (
            <li key={project.id} className="transition ease-in-out duration-700 rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50 ">
            <div className="rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
            <a href="https://connou.app" target="_blank" title="Connou">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full"
                />
              </a>
            </div>
            <div className="mt-6">
              <h3 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold  md:text-xl mb-4 ">
                {project.title}
              </h3>
              <ul className="list-disc list-inside my-4">
                {project.description.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <div className="grid">
                <a
                  class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-blue-500 bg-blue-100 hover:bg-blue-200 hover:text-blue-600 focus:ring-indigo-500 dark:bg-blue-800  dark:hover:bg-blue-600  dark:focus:ring-slate-500 mt-2 dark:text-slate-300 dark:hover:text-slate-100"
                  href={project.previewURL}
                  target="_blank"
                  title={project.title}
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
                <a
                  class="inline-flex items-center justify-center h-9 rounded-md whitespace-nowrap px-3 focus:outline-none focus:ring-2 border-solid border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300  focus:ring-indigo-500 dark:bg-slate-800  dark:hover:bg-slate-600  dark:focus:ring-slate-500 mt-4"
                  href={project.githubURL}
                  target="_blank"
                  title={project.title}
                >
                  GitHub<span class="sr-only"></span>
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
          ) )}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
