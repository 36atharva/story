export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--green-dark)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#"
          className="text-xl font-semibold tracking-[-0.04em]"
        >
          Voicix
        </a>

        <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <a
            href="#how-it-works"
            className="transition-colors hover:text-[var(--green)]"
          >
            How it works
          </a>

          <a
            href="#who-its-for"
            className="transition-colors hover:text-[var(--green)]"
          >
            Who it's for
          </a>
        </div>

        <a
          href="#get-started"
          className="rounded-full bg-[var(--green)] px-5 py-2.5 text-sm font-medium text-[var(--cream)] transition-all hover:bg-[var(--green-dark)]"
        >
          Get Started
        </a>
      </nav>

      <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center lg:px-10">
        {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--cream-dark)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--green)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--green-light)]" />
          Built for founders who have something to say
        </div> */}

        <h1 className="font-editorial max-w-5xl text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[7.5rem]">
          Your best content
          <br />
          <span className="font-accent">already happened.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--green-light)] sm:text-lg sm:leading-8">
          Turn the real things happening inside your business into stories,
          insights, and content that build attention, authority, trust, and
          demand.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="rounded-full bg-[var(--green)] px-7 py-3.5 text-sm font-medium text-[var(--cream)] transition-all hover:-translate-y-0.5 hover:bg-[var(--green-dark)]"
          >
            Turn a story into content
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-[var(--green)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--green)]"
          >
            See how it works
          </a>
        </div>

        <p className="mt-6 text-xs tracking-wide text-[var(--green-light)]">
          No blank prompts. No generic AI posts.
        </p>
            </section>

      <section className="border-t border-[var(--border)] bg-[var(--cream-dark)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--green-light)]">
                The problem
              </p>

              <h2 className="font-editorial max-w-xl text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl">
                Your business is already giving you content.
              </h2>
            </div>

            <div className="lg:pt-12">
              <p className="max-w-xl text-lg leading-8 text-[var(--green-light)]">
                Every week, something happens inside your business that could
                become a story worth sharing. But most founders let those
                moments disappear — and start from a blank content prompt
                instead.
              </p>

              <div className="mt-12 border-t border-[var(--border)]">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="border-b border-[var(--border)] py-7 sm:border-r sm:pr-8">
                    <p className="font-editorial text-2xl leading-tight">
                      “A customer said something I didn't expect.”
                    </p>
                  </div>

                  <div className="border-b border-[var(--border)] py-7 sm:pl-8">
                    <p className="font-editorial text-2xl leading-tight">
                      “We lost a deal. Then I figured out why.”
                    </p>
                  </div>

                  <div className="border-b border-[var(--border)] py-7 sm:border-r sm:pr-8">
                    <p className="font-editorial text-2xl leading-tight">
                      “We removed a feature and the business got better.”
                    </p>
                  </div>

                  <div className="py-7 sm:pl-8">
                    <p className="font-editorial text-2xl leading-tight">
                      “I completely changed my mind about something.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-it-works"
        className="bg-[var(--green)] text-[var(--cream)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--cream-dark)]">
              How Voicix works
            </p>

            <h2 className="font-editorial text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              One real experience.
              <br />
              <span className="font-accent">Endless ways to tell it.</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-[var(--green-light)] bg-[var(--green-light)] lg:grid-cols-3">
            <div className="bg-[var(--green)] p-8 lg:p-10">
              <p className="text-sm font-medium text-[var(--cream-dark)]">
                01
              </p>

              <h3 className="font-editorial mt-16 text-4xl tracking-[-0.02em]">
                Tell us what happened.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--cream-dark)]">
                Drop in the raw version. A customer conversation. A mistake.
                A win. A decision. No polished writing required.
              </p>
            </div>

            <div className="bg-[var(--green)] p-8 lg:p-10">
              <p className="text-sm font-medium text-[var(--cream-dark)]">
                02
              </p>

              <h3 className="font-editorial mt-16 text-4xl tracking-[-0.02em]">
                Find what matters.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--cream-dark)]">
                Voicix looks beneath the surface to uncover the tension,
                insight, authority, and business relevance inside the story.
              </p>
            </div>

            <div className="bg-[var(--green)] p-8 lg:p-10">
              <p className="text-sm font-medium text-[var(--cream-dark)]">
                03
              </p>

              <h3 className="font-editorial mt-16 text-4xl tracking-[-0.02em]">
                Choose what to say.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--cream-dark)]">
                Get distinct content opportunities from the same experience —
                then turn the angle you choose into content.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-[var(--green-light)] pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-editorial text-3xl sm:text-4xl">
                Experience → Story → Insight → Authority → Demand
              </p>

              <span className="text-sm text-[var(--cream-dark)]">
                The Voicix approach
              </span>
            </div>
          </div>
        </div>
      </section>
            <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--green-light)]">
                What's the difference?
              </p>

              <h2 className="font-editorial max-w-lg text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl">
                One experience from your life.
                <br />
                <span className="font-accent">Multiple stories that get you clients.</span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-[var(--green-light)] sm:text-lg">
                The same thing that happened in your business can say very
                different things to your audience. Voicix helps you find the
                angle worth telling (and get leads that pay you $)
              </p>

              <div className="mt-10 flex items-center gap-3 text-sm text-[var(--muted)]">
                <span className="h-px w-8 bg-[var(--border)]" />
                One story becomes many pieces of content.
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-white/40 p-6 shadow-[0_20px_60px_rgba(11,36,27,0.06)] sm:p-8 lg:p-10">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    Your story
                  </p>

                  <p className="mt-2 text-sm font-medium text-[var(--green-dark)]">
                    & what happened
                  </p>
                </div>

                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                  Raw experience
                </span>
              </div>

              <p className="font-editorial mt-7 max-w-xl text-3xl leading-tight tracking-[-0.02em] text-[var(--green-dark)] sm:text-4xl">
                “We spent three months building a feature nobody asked for.”
              </p>

              <div className="my-8 h-px bg-[var(--border)]" />

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[var(--green)]" />

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--green-light)]">
                    Voicix found
                  </p>

                  <p className="text-sm text-[var(--muted)]">
                    4 content opportunities
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--cream)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--green-light)]">
                        Founder story
                      </p>

                      <p className="mt-2 text-base font-medium leading-6 text-[var(--green-dark)]">
                        I wasted 3 months building something that nobody asked for, here's how I am changing that and scaling it to $10K MRR
                      </p>
                    </div>

                    <span className="text-xs text-[var(--muted)]">
                      Trust
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[var(--cream)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--green-light)]">
                        Contrarian take
                      </p>

                      <p className="mt-2 text-base font-medium leading-6 text-[var(--green-dark)]">
                        Don't touch code till you reach $1,000 with your product, here's why.
                      </p>
                    </div>

                    <span className="text-xs text-[var(--muted)]">
                      Engagement
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[var(--cream)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--green-light)]">
                        Business lesson
                      </p>

                      <p className="mt-2 text-base font-medium leading-6 text-[var(--green-dark)]">
                        Here's how to NOT build a product and still scale so crickets don't knock your door when launching.
                      </p>
                    </div>

                    <span className="text-xs text-[var(--muted)]">
                      Authority
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[var(--cream)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--green-light)]">
                        Demand angle
                      </p>

                      <p className="mt-2 text-base font-medium leading-6 text-[var(--green-dark)]">
                        3 questions to ask yourself before building your first SaaS 1/n:
                      </p>
                    </div>

                    <span className="text-xs text-[var(--muted)]">
                      Niche
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="border-t border-[var(--border)] bg-[var(--cream-dark)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--green-light)]">
                Why the story matters
              </p>

              <h2 className="font-editorial max-w-xl text-5xl leading-[0.94] tracking-[-0.035em] sm:text-6xl">
                The right story does more than fill your content calendar.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[var(--green-light)] sm:text-lg">
              A real experience carries something a generic post can't:
              evidence that you have actually been there. Voicix helps turn
              that experience into content with a purpose.
            </p>
          </div>

          <div className="mt-20 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--cream)]">
            <div className="grid lg:grid-cols-[1fr_1.4fr]">
              <div className="border-b border-[var(--border)] p-8 lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                  Start here
                </p>

                <p className="font-editorial mt-8 text-3xl leading-tight tracking-[-0.02em] text-[var(--green-dark)] sm:text-4xl">
                  Something actually happened.
                </p>

                <div className="mt-10 border-l-2 border-[var(--green)] pl-5">
                  <p className="text-sm leading-7 text-[var(--green-light)]">
                    A deal you lost. A customer who changed your thinking. A
                    decision that worked. A mistake that cost you.
                  </p>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                  What it can become
                </p>

                <div className="mt-8 space-y-0">
                  <div className="group border-b border-[var(--border)] py-6 first:pt-0">
                    <div className="grid gap-3 sm:grid-cols-[150px_1fr] sm:gap-8">
                      <p className="text-sm font-semibold text-[var(--green)]">
                        Attention
                      </p>

                      <div>
                        <p className="text-base font-medium text-[var(--green-dark)]">
                          A story people want to stop and read.
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                          The unexpected moment, tension, or realization that
                          makes your experience interesting to someone else.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group border-b border-[var(--border)] py-6">
                    <div className="grid gap-3 sm:grid-cols-[150px_1fr] sm:gap-8">
                      <p className="text-sm font-semibold text-[var(--green)]">
                        Authority
                      </p>

                      <div>
                        <p className="text-base font-medium text-[var(--green-dark)]">
                          A lesson only experience could teach.
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                          Instead of telling people what to do, show them what
                          you learned by actually doing it.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group border-b border-[var(--border)] py-6">
                    <div className="grid gap-3 sm:grid-cols-[150px_1fr] sm:gap-8">
                      <p className="text-sm font-semibold text-[var(--green)]">
                        Trust
                      </p>

                      <div>
                        <p className="text-base font-medium text-[var(--green-dark)]">
                          A reason to understand the person behind the brand.
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                          Your decisions, mistakes, beliefs, and turning points
                          make your expertise feel human.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-6 last:pb-0">
                    <div className="grid gap-3 sm:grid-cols-[150px_1fr] sm:gap-8">
                      <p className="text-sm font-semibold text-[var(--green)]">
                        Demand
                      </p>

                      <div>
                        <p className="text-base font-medium text-[var(--green-dark)]">
                          A bridge between your story and someone's problem.
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                          The strongest stories don't just get attention. They
                          make the right person recognize a problem you can
                          actually help them solve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--border)] bg-[var(--green)] px-8 py-7 text-[var(--cream)] lg:px-12">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-editorial text-2xl sm:text-3xl">
                  Experience → Meaning → Content → Business
                </p>

                <p className="text-xs uppercase tracking-[0.16em] text-[var(--cream-dark)]">
                  The Voicix philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section id="who-its-for" className="bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--green-light)]">
                Who it's for
              </p>

              <h2 className="font-editorial max-w-md text-5xl leading-[0.94] tracking-[-0.035em] sm:text-6xl">
                You already have something worth saying.
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-[var(--green-light)]">
                Voicix is built for people whose expertise comes from doing
                the work, not just larping about it.
              </p>
            </div>

            <div className="border-t border-[var(--border)]">
              <div className="grid sm:grid-cols-2">
                <div className="border-b border-[var(--border)] py-8 sm:border-r sm:pr-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold text-[var(--green-dark)]">
                      Founders
                    </h3>

                    <span className="font-editorial text-2xl text-[var(--muted)]">
                      01
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--green-light)]">
                    Turn your horrible decisions, life questioning choices, wins, and mistakes of
                    building a company into content people remember.
                  </p>
                </div>

                <div className="border-b border-[var(--border)] py-8 sm:pl-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold text-[var(--green-dark)]">
                      Agency owners
                    </h3>

                    <span className="font-editorial text-2xl text-[var(--muted)]">
                      02
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--green-light)]">
                    Turn client lessons, hard-won experience, and your unique
                    way of solving problems into authority and leads.
                  </p>
                </div>

                <div className="border-b border-[var(--border)] py-8 sm:border-r sm:pr-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold text-[var(--green-dark)]">
                      Consultants & coaches
                    </h3>

                    <span className="font-editorial text-2xl text-[var(--muted)]">
                      03
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--green-light)]">
                    Turn your frameworks, client experiences, beliefs, and
                    lessons into a point of view people recognize & believe.
                  </p>
                </div>

                <div className="border-b border-[var(--border)] py-8 sm:pl-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold text-[var(--green-dark)]">
                      Experts
                    </h3>

                    <span className="font-editorial text-2xl text-[var(--muted)]">
                      04
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--green-light)]">
                    Build a reputation around what you know, what you've
                    learned, and what you've actually done.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-l-2 border-[var(--green)] pl-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    Probably not for you if...
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[var(--green-dark)]">
                    You just want an AI button that turns a keyword into 30
                    generic posts, absolute waste of time (and money).
                  </p>
                </div>

                <span className="shrink-0 font-editorial text-2xl italic text-[var(--green)]">
                  That's not Voicix.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section
        id="get-started"
        className="bg-[var(--green-dark)] text-[var(--cream)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="overflow-hidden rounded-3xl border border-[var(--green-light)]">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 sm:p-12 lg:p-16 xl:p-20">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--cream-dark)]">
                  Start with something that actually happened
                </p>

                <h2 className="font-editorial mt-8 max-w-3xl text-5xl leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Stop asking,
                  <br />
                  <span className="font-accent">“What should I post?”</span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--cream-dark)] sm:text-lg">
                  The better question is:
                  <span className="font-semibold text-[var(--cream)]">
                    {" "}
                    “What happened that is worth talking about?”
                  </span>
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--cream-dark)]">
                  A customer conversation. A mistake. A surprising result. A
                  decision that changed the business. A belief you changed
                  your mind about.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="/app"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--cream)] px-7 py-3.5 text-sm font-semibold text-[var(--green-dark)] transition-all hover:-translate-y-0.5 hover:bg-white"
                  >
                    Find the story in your experience
                  </a>

                  <span className="text-xs text-[var(--cream-dark)]">
                    Start with one story.
                  </span>
                </div>
              </div>

              <div className="border-t border-[var(--green-light)] bg-[var(--green)] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-12 xl:p-16">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--cream-dark)]">
                  The shift
                </p>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="text-sm text-[var(--cream-dark)]">
                      Before
                    </p>

                    <p className="font-editorial mt-2 text-3xl leading-tight">
                      “I need to come up with content.”
                    </p>
                  </div>

                  <div className="h-px bg-[var(--green-light)]" />

                  <div>
                    <p className="text-sm text-[var(--cream-dark)]">
                      After
                    </p>

                    <p className="font-editorial mt-2 text-3xl leading-tight">
                      “I just need to notice what is already happening.”
                    </p>
                  </div>

                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-[var(--green-light)] px-3 py-1.5 text-xs text-[var(--cream-dark)]">
                        Experience
                      </span>

                      <span className="text-[var(--cream-dark)]">→</span>

                      <span className="rounded-full border border-[var(--green-light)] px-3 py-1.5 text-xs text-[var(--cream-dark)]">
                        Story
                      </span>

                      <span className="text-[var(--cream-dark)]">→</span>

                      <span className="rounded-full border border-[var(--green-light)] px-3 py-1.5 text-xs text-[var(--cream-dark)]">
                        Insight
                      </span>

                      <span className="text-[var(--cream-dark)]">→</span>

                      <span className="rounded-full border border-[var(--green-light)] px-3 py-1.5 text-xs text-[var(--cream-dark)]">
                        Content
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--green-light)] px-8 py-6 sm:px-12 lg:px-16">
              <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                <p className="font-editorial text-2xl sm:text-3xl">
                  Your best content isn't waiting to be invented.
                </p>

                <p className="text-xs uppercase tracking-[0.16em] text-[var(--cream-dark)]">
                  It is waiting to be noticed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <footer className="border-t border-[var(--border)] bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--green-dark)]">
                Voicix
              </p>

              <p className="mt-1 text-xs text-[var(--muted)]">
                Your best content already happened.
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-[var(--muted)]">
              <a
                href="#how-it-works"
                className="transition-colors hover:text-[var(--green)]"
              >
                How it works
              </a>

              <a
                href="#who-its-for"
                className="transition-colors hover:text-[var(--green)]"
              >
                Who it's for
              </a>

              <a
                href="#get-started"
                className="transition-colors hover:text-[var(--green)]"
              >
                Get started
              </a>
            </div>

            <p className="text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} Voicix
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}