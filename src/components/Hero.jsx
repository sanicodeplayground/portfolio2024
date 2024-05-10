function Hero() {
  return (
    <section>
      <div className="container py-16">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white group hover:text-gray-900 dark:hover:text-white after:inline-block after:w-[100px]">
            Hi, I'm Sanita
          </h2>
          <p className="mb-8 text-lg max-w-md">
            A self-taught Developer based in Bristol. Passionate about creating
            meaningful products for people.
          </p>
          <p>
            <span>🚀</span> Currently specialising in Frontend (React /
            JavaScript)
          </p>
          <p>
            <span>⚡</span> Frontend Developer at{" "}
            <a href="https://connou.app" target="_blank" className="underline">
              Connou
            </a>
          </p>
          <div className="flex sm:space-y-0 gap-3 md:gap-3 flex-1 mt-6">
            <button className="transition ease-in-out duration-300 align-middle select-none text-center text-xs py-2 px-4 rounded-sm bg-slate-200 hover:bg-slate-300 dark:bg-blue-800 dark:hover:bg-blue-700">
              <a
                href="https://github.com/sanicodeplayground"
                className="flex gap-1"
              >
                <span>
                  <svg
                    className="w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Github
              </a>
            </button>
            <button className="transition ease-in-out duration-300 align-middle select-none text-center text-xs py-2 px-4 rounded-sm bg-slate-200 hover:bg-slate-300 dark:bg-blue-800 dark:hover:bg-blue-700">
              <a
                href="https://www.linkedin.com/in/sgailu/"
                className="flex gap-1"
              >
                <span>
                  <svg
                    className="w-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.37614 5.51405C6.37614 6.90252 5.17265 8.0281 3.68807 8.0281C2.20349 8.0281 1 6.90252 1 5.51405C1 4.12558 2.20349 3 3.68807 3C5.17265 3 6.37614 4.12558 6.37614 5.51405Z" />
                    <path d="M1.3676 9.87604H5.96259V23.8H1.3676V9.87604Z" />
                    <path d="M13.3605 9.87604H8.76554V23.8H13.3605C13.3605 23.8 13.3605 19.4165 13.3605 16.6758C13.3605 15.0308 13.9222 13.3785 16.1635 13.3785C18.6964 13.3785 18.6811 15.5313 18.6693 17.1991C18.6539 19.3792 18.6907 21.6039 18.6907 23.8H23.2857V16.4512C23.2468 11.7588 22.0241 9.5967 18.0015 9.5967C15.6126 9.5967 14.1318 10.6812 13.3605 11.6624V9.87604Z" />
                  </svg>
                </span>
                LinkedIn
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
