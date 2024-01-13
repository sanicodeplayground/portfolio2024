import React from "react";

function Projects() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Connou
          </h2>
          <h4 classs="text-gray-900 dark:text-white">
            Junior FrontEnd Developer
          </h4>
          <p class="mb-4">
            Assembled and lead a team of 8 developers to create core features
            and integrate third party APIs. Implemented CI/CD pipeline with
            Typescript type-checking, database migration, code linting and
            preview deploys.
          </p>
          <p>
            <a href="#">View Project Code</a>
          </p>
        </div>
        <div class="grid ">
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="./images/portfolio/portfolio-connou-app.png"
            alt="Connou"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
