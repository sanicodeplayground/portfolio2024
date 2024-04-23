import ReactMarkdown from "react-markdown";

function BlogArticle() {
  const markdownContent1 = "'tailwindCSS.rootFontSize': 10 ";

  const resourcesList = [
    {
      id: 1,
      title: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
      description: "The best text editor in the world",
    },
    {
      id: 2,
      title: "Visual Studio Code Setup",
      link: "https://github.com/sanicodeplayground/portfolio2024/blob/main/vscode-setup.md",
      description:
        "Check out exactly what theme, extensions and settings I currently use in VSCode.",
    },
    {
      id: 3,
      title: "Emmet Cheat Sheet",
      link: "https://docs.emmet.io/cheat-sheet/",
      description: "Emmet is an essential tool for writing HTML.",
    },
    {
      id: 4,
      title: "HTML5 Reference by MDN",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
      description: "Emmet is an essential tool for writing HTML.",
    },
    {
      id: 5,
      title: "CSS3 Reference by MDN",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
      description:
        "As with HTML, you don't need to know every CSS property. Use this reference instead.",
    },
    {
      id: 6,
      title: "CSS3 Reference by Codrops",
      link: "https://tympanus.net/codrops/",
      description:
        "Another excellent CSS reference, this time from Codrops. Make sure to check this one out, too.",
    },
    {
      id: 7,
      title: "Can I Use?",
      link: "https://caniuse.com/",
      description:
        "Up-to-date browser support tables for front-end technologies on desktop and mobile browsers.",
    },
    {
      id: 7,
      title: "30 CSS Selectors by Tutplus",
      link: "https://webdesign.tutsplus.com/the-30-css-selectors-you-must-memorize--net-16048t",
      description:
        "I find myself using this handy list of the 30 most important CSS selectors from Tutplus all the time.",
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="container py-16 antialiased">
        <article>
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-slate-50">
              Resources
            </h1>
          </header>
          <div className="container-resources grid grid-cols-3 gap-y-10 gap-x-4">
            {resourcesList.map((resource) => (
              <div className="resource" key={resource.id}>
                <h3 className="text-gray-900 dark:text-slate-50 font-extrabold">
                  <a href={resource.link} target="_blank">
                    {resource.title}
                  </a>
                </h3>
                <p>{resource.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}

export default BlogArticle;
