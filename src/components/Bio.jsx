import { Link } from "react-router-dom";
function Bio() {
  return (
    <section>
      <div className="container gap-16 items-center py-16 lg:grid lg:grid-cols-2">
        <div className=" ">
          <h2 className="mb-4 text-4xl  font-extrabold text-gray-900 dark:text-white">
            My Skills
          </h2>
          <h4 className="mb-4 text-xl  font-extrabold text-gray-900 dark:text-white">
            I love building stuff 📱
          </h4>
          <ul className="text-gray-900 dark:text-white text-sm font-normal  *:bg-cyan-200 *:dark:bg-cyan-900 *:rounded-md flex gap-2 flex-wrap  *:py-2 *:px-2 ">
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Next.js</li>
          </ul>
          <p className="my-4">
            I'm a FrontEnd developer with a love for technology and creativity,
            currently working at Connou. My Masters in Law and Business have
            equipped me with excellent problem-solving and communication skills.
            I am eager to learn and adapt in the ever-evolving tech world.
          </p>
          <p>
            <Link
              to="/about"
              className="inline-flex items-center font-medium text-blue-600 dark:text-blue-300 hover:underline"
            >
              Keep reading my bio
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
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://ik.imagekit.io/rk9j9vsvji/sanicodeplayground/profilePicture.jpg?updatedAt=1710873617214"
            alt="Profile"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://ik.imagekit.io/rk9j9vsvji/sanicodeplayground/hands.avif?updatedAt=1710873617353"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}

export default Bio;
