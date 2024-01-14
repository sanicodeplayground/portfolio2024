import ReactMarkdown from "react-markdown";

function BlogArticle() {
  const markdownContent1 = "npm install -D tailwindcss postcss autoprefixer";
  const markdownContent2 = "npx tailwindcss init -p";
  const markdownContent3 = "npm run dev";

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="article">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-slate-50">
              Install Tailwind CSS in React
            </h1>
          </header>
          <h2>
            Tailwind CSS is a popular CSS framework that allows you to quickly
            build modern and responsive web applications. It provides a set of
            pre-built CSS classes that you can apply directly to the HTML
            elements, enabling rapid development without writing custom CSS.
          </h2>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-800" />
          <h3 className="text-lg my-4 dark:text-slate-400 font-light">
            Step 1: Create a React Application
          </h3>
          <p>
            If you don’t have a React project yet, create one using the Create
            React App or your preferred method.
          </p>
          <h3 className="text-lg my-4 dark:text-slate-400 font-light">
            Step 2: Install Tailwind CSS
          </h3>
          <p>
            Copy this command from Tailwind CSS documentation website and paste
            it in your terminal.
          </p>
          <ReactMarkdown children={markdownContent1} className="markdown" />
          <h3 className="text-lg my-4 dark:text-slate-400 font-light">
            Step 3: Configure Tailwind CSS
          </h3>
          <p>Generate a Tailwind CSS configuration file by running:</p>
          <ReactMarkdown children={markdownContent2} className="markdown" />
          <p>
            Paste the following Code in the tailwind.config.js file you just
            created:
          </p>
          <figure>
            <img src="./images/articles/tailwind1.png" alt="img" />
          </figure>
          <h3>Step 4: Create Your Styles</h3>
          <p>Add the tailwind directives for your index.css file.</p>
          <figure>
            <img src="./images/articles/tailwind2.png" alt="img" />
          </figure>
          <h3>Step 5: Start Your Development Server</h3>
          <p>Now, run your development server to see Tailwind CSS in action:</p>
          <ReactMarkdown children={markdownContent3} className="markdown" />
          <h3>Step 6: Start using Tailwind in your project</h3>
          <p>Start using Tailwind’s utility classes to style your content.</p>
          <figure>
            <img src="./images/articles/tailwind3.png" alt="img" />
          </figure>
          <p>
            <a href="https://tailwindcss.com/docs/installation" target="_">
              Tailwind official doc
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
            </a>
          </p>
        </article>
      </div>
    </main>
  );
}

export default BlogArticle;
