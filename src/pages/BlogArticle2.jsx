import ReactMarkdown from "react-markdown";

function BlogArticle() {
  const markdownContent1 =
    "'tailwindCSS.rootFontSize': 10  // <- your root font size here";

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="article">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-slate-50">
              How to change Tailwind CSS base font size
            </h1>
          </header>
          <p>
            If you have been using Tailwind CSS for a while, you probably know
            that it uses a lot of best practices and recommendations for modern
            HTML/CSS development. Things like having great reset styles, using
            CSS custom properties, etc. But there’s one particular feature,
            that, depending on your workflow, you may want to change, and that’s
            the base font size.
          </p>
          <h3 className="text-lg my-4 dark:text-slate-400 font-light">
            Tailwind CSS’ default base font size
          </h3>
          <p>
            The current Tailwind CSS base font size is 16px. Why 16px? Because
            this is the default font size of most popular browsers like Chrome.
          </p>
          <p>
            Since a lot of Tailwind defaults use REM values, all these values
            will be multiplied by the base font size and that will get you the
            pixel values.
          </p>
          <p>
            Based on this, if the text-lg class is 1.125rem, in pixels, this
            turns out to be 16 * 1.125 = 18px. This is exactly what you see in
            the class preview if you use the official VSCode extension.
          </p>
          <figure>
            <img src="./images/articles/article02-1.png" alt="img" />
          </figure>
          <ReactMarkdown children={markdownContent1} className="markdown" />
          <h3 className="text-lg my-4 dark:text-slate-400 font-light">
            Here’s how to change it: via plugin
          </h3>
          <figure>
            <img src="./images/articles/article02-2.png" alt="img" />
          </figure>
          <p>
            Now all the default REM values in Tailwind will be recalculated,
            using 18px as a base.
          </p>
          <p>So now the text-lg class, will be 18 * 1.125 = 20.25px.</p>
          <p>
            That’s pretty much it! Now all your REM values will use a base of
            18px.
          </p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-800" />
          <h3 className="text-lg my-4 dark:text-slate-400 font-light">
            One extra step if you use the VSCode extension
          </h3>
          <p>
            If you use the official extension for VSCode you may notice that the
            class preview shows the pixel values still using 16px as a base. To
            change this you need to add this to your VSCode config:
          </p>
          <ReactMarkdown children={markdownContent1} className="markdown" />
          <p>Now the class preview will have the correct values!</p>
          <p>
            That’s it for this one! I hope you learned how to change the
            Tailwind CSS default base font size and how to make the VSCode
            extension reflect that change in its class preview.
          </p>
        </article>
      </div>
    </main>
  );
}

export default BlogArticle;
