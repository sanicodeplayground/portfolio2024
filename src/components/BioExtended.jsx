function BioExtended() {
  return (
    <section>
      <article className="container py-16 leading-loose [&>p]:mt-3">
        <h1 className="mb-4 text-4xl  font-extrabold text-gray-900 dark:text-white">
          About me
        </h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-800" />
        <div className="grid md:grid-cols-[300px_1fr] mb-10 gap-2">
          <aside>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
              As a developer
            </h2>
          </aside>
          <main>
            <p>
              I pay close attention to my code’s readability. Sure, I’ll put
              together something as quickly as possible to make it work, but
              after that I’ll spend a good amount of time commenting and
              organizing everything. Mi casa es tu casa, I want you to feel
              welcome around my code.
            </p>
            <p>
              Clean, consistent, readable and maintainable code. It’s great when
              features work, but it’s even greater whenever they can stay that
              way, regardless of who’s working on them.
            </p>
            <p>
              I’m excited to work on new projects, because I learn something new
              every time. I’m always excited for the next challenge!
            </p>
          </main>
        </div>
        <div className="grid md:grid-cols-[300px_1fr] mb-10 gap-2">
          <aside>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
              As a person
            </h2>
          </aside>
          <main>
            <p>
              If I had to describe myself in one word, it would be resourceful.
              I’ll take a problem, break it into smaller bits and MacGyver
              myself a solution. Creativity has helped me sail around tough
              obstacles.
            </p>
            <p>
              I’m curious by nature and I love learning. I’ve amassed a wide
              range of skills and interests that when put together, end up
              feeding my career in one way or another.
            </p>
          </main>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-2">
          <aside>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
              As a colleague
            </h2>
          </aside>
          <main>
            <p>
              I’m a team player, with my background in business and law, I feel
              comfortable interacting with both the technically oriented people
              of the team as well as stakeholders. I will always go the extra
              mile to help my team.
            </p>
            <p>
              My experience working for a small startup gave me exposure to the
              business side of a tech company, while at the same time delivering
              industry standard results on the production side.
            </p>
            <p>
              I’m always happy to pull an espresso shot and make some latte art
              for a colleague. I love to cook, so be on the lookout for the next
              potluck.
            </p>
            <p>Let's have a chat! I'd love to hear from you ☁️</p>
          </main>
        </div>
      </article>
    </section>
  );
}

export default BioExtended;
