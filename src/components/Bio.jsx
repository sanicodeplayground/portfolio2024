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
              class="text-gray-900 dark:text-white underline underline-offset-8"
            >
              Keep reading my bio
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
            src="public/images/profilePicture2.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}

export default Bio;
