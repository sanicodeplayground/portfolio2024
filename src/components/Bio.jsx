import React from "react";

function Bio() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            My Skills
          </h2>
          <h4 class="mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            I love building stuff 📱
          </h4>
          <div>
            <ul class="text-gray-900 dark:text-white  *:bg-blue-200 *:dark:bg-blue-900 flex text-sm font-bold *:py-2 *:px-4 flex-wrap space-x-4 my-8 *:rounded-md">
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>HTML</li>
              <li class="-">CSS</li>
              <li class="-">Next.js</li>
            </ul>
          </div>
          <p class="mb-4">
            I started playing with computers when I was 14 years-old. Since then
            I have been tinkering with all sorts of technologies that in some
            way or another led me to work on music, photography, sound
            engineering, electric engineering, automation, video production,
            feature film post-production, VR games, and 3D sound.
          </p>
          <p>
            <a
              href="#"
              class="inline-flex items-center ont-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Keep reading my bio
              <svg
                class="ml-2 w-4 h-4"
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
            </a>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="w-full rounded-lg"
            src="public/images/profilePicture.jpeg"
            alt="Profile"
          />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}

export default Bio;
