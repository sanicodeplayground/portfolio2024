function BlogArticle() {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert [&>p]:dark:text-slate-100 ">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-4 size-16 rounded-full"
                  src="./public/images/profilePicture.jpg"
                  alt="Jese Leos"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Sanita
                  </a>

                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time
                      pubdate
                      datetime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      Jan. 14, 2024
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-slate-50">
              Install Tailwind CSS in React
            </h1>
          </header>
          <h2 className="text-lg my-4 dark:text-slate-400 font-light">
            Tailwind CSS is a popular CSS framework that allows you to quickly
            build modern and responsive web applications. In this tutorial, we
            will walk through the steps to install and set up Tailwind CSS in a
            React project.
          </h2>
          <p>
            Before going digital, you might benefit from scribbling down some
            ideas in a sketchbook. This way, you can think things through before
            committing to an actual design project.
          </p>
          <p>
            But then I found a . It comes with the most commonly used UI
            components, such as buttons, navigation bars, cards, form elements,
            and more which are conveniently built with the utility classes from
            Tailwind CSS.
          </p>
          <figure>
            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
              alt=""
            />
            <figcaption className="text-sm my-4 dark:text-slate-400 font-light">
              Digital art by Anonymous
            </figcaption>
          </figure>
          <h2 className="text-lg my-4 dark:text-slate-400 font-light">
            Getting started with Flowbite
          </h2>
          <p>
            First of all you need to understand how Flowbite works. This library
            is not another framework. Rather, it is a set of components based on
            Tailwind CSS that you can just copy-paste from the documentation.
          </p>
          <p>
            It also includes a JavaScript file that enables interactive
            components, such as modals, dropdowns, and datepickers which you can
            optionally include into your project via CDN or NPM.
          </p>
          <p>
            to explore the elements by including the CDN files into your
            project. But if you want to build a project with Flowbite I
            recommend you to follow the build tools steps so that you can purge
            and minify the generated CSS.
          </p>
          <p>
            You'll also receive a lot of useful application UI, marketing UI,
            and e-commerce pages that can help you get started with your
            projects even faster. You can check out this to better understand
            the differences between the open-source and pro version of Flowbite.
          </p>
          <h2 className="text-lg my-4 dark:text-slate-400 font-light">
            When does design come in handy?
          </h2>
          <p>
            While it might seem like extra work at a first glance, here are some
            key moments in which prototyping will come in handy:
          </p>

          <h3 className="text-lg my-4 dark:text-slate-400 font-light">
            Laying the groundwork for best design
          </h3>
          <p>
            Before going digital, you might benefit from scribbling down some
            ideas in a sketchbook. This way, you can think things through before
            committing to an actual design project.
          </p>

          <h3 className="text-lg my-4 dark:text-slate-400 font-light">
            Understanding typography
          </h3>
          <h4 className="text-lg my-4 dark:text-slate-400 font-light">
            Type properties
          </h4>
          <p>
            A typeface is a collection of letters. While each letter is unique,
            certain shapes are shared across letters. A typeface represents
            shared patterns across a collection of letters.
          </p>
          <h4 className="text-lg my-4 dark:text-slate-400 font-light">
            Baseline
          </h4>
          <p>
            A typeface is a collection of letters. While each letter is unique,
            certain shapes are shared across letters. A typeface represents
            shared patterns across a collection of letters.
          </p>
          <h4 className="text-lg my-4 dark:text-slate-400 font-light">
            Measurement from the baseline
          </h4>
          <p>
            A typeface is a collection of letters. While each letter is unique,
            certain shapes are shared across letters. A typeface represents
            shared patterns across a collection of letters.
          </p>
          <h3 className="text-lg my-4 dark:text-slate-400 font-light">
            Type classification
          </h3>
          <h4 className="text-lg my-4 dark:text-slate-400 font-light">Serif</h4>
          <p>
            A serif is a small shape or projection that appears at the beginning
            or end of a stroke on a letter. Typefaces with serifs are called
            serif typefaces. Serif fonts are classified as one of the following:
          </p>
          <h4 className="text-lg my-4 dark:text-slate-400 font-light">
            Old-Style serifs
          </h4>
          <img
            src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png"
            alt=""
          />

          <p>
            A serif is a small shape or projection that appears at the
            beginning:
          </p>
        </article>
      </div>
    </main>
  );
}

export default BlogArticle;
