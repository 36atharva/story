"use client";

import { useState } from "react";

type Opportunity = {
  number: string;
  type: string;
  objective: string;
  title: string;
  description: string;
};

const opportunities: Opportunity[] = [
  {
    number: "01",
    type: "Founder story",
    objective: "Trust",
    title:
      "What building the wrong thing taught me about listening to customers.",
    description:
      "Take the reader inside the decision, the mistake, and the realization that changed how you build.",
  },
  {
    number: "02",
    type: "Contrarian take",
    objective: "Reach",
    title: "Your roadmap isn't your strategy.",
    description:
      "Challenge the assumption behind the decision and explain what founders should pay attention to instead.",
  },
  {
    number: "03",
    type: "Business lesson",
    objective: "Authority",
    title: "Why customer feedback should change what you build.",
    description:
      "Turn the experience into a practical principle that demonstrates how you think about product decisions.",
  },
  {
    number: "04",
    type: "Customer insight",
    objective: "Authority",
    title:
      "The thing customers actually tell you when they ask for a feature.",
    description:
      "Use the experience to reveal a deeper pattern that other founders can recognize in their own businesses.",
  },
  {
    number: "05",
    type: "Demand angle",
    objective: "Demand",
    title: "The question we now ask before building anything.",
    description:
      "Connect the story directly to a problem your ideal customer may already be experiencing.",
  },
];

export default function AppPage() {
  const [story, setStory] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [showOpportunities, setShowOpportunities] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showGeneratedContent, setShowGeneratedContent] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] =
    useState<Opportunity | null>(null);
  const [platform, setPlatform] = useState<"X" | "LinkedIn">("X");

  const handleAnalyze = () => {
    if (!story.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 1400);
  };

  const handleFindAngles = () => {
    setShowOpportunities(true);
  };

  const handleGenerateContent = () => {
  setIsGenerating(true);

  setTimeout(() => {
    setIsGenerating(false);
    setShowGeneratedContent(true);
  }, 1600);
};

  const handleEditStory = () => {
    setShowOpportunities(false);
    setHasAnalyzed(false);
    setSelectedOpportunity(null);
  };

  const handleSelectOpportunity = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
  };

  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--green-dark)]">
      <nav className="border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="/"
            className="text-xl font-semibold tracking-[-0.04em]"
          >
            Voicix
          </a>

          <div className="flex items-center gap-7 text-sm text-[var(--muted)]">
            <a
              href="#"
              className="font-medium text-[var(--green-dark)]"
            >
              Stories
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[var(--green)]"
            >
              Profile
            </a>
          </div>
        </div>
      </nav>

      {showGeneratedContent ? (
        <GeneratedContent
            story={story}
            opportunity={selectedOpportunity}
            platform={platform}
        />
) : !hasAnalyzed ? (
        <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--green-light)]">
              Your story bank
            </p>

            <h1 className="text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl">
              What happened?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--green-light)] sm:text-xl">
              Tell us about something that happened inside your business
              recently. Don't worry about making it sound good. Just give us
              the raw version.
            </p>
          </div>

          <div className="mt-12">
            <textarea
              value={story}
              onChange={(event) => setStory(event.target.value)}
              disabled={isAnalyzing}
              placeholder="A customer said something I didn't expect..."
              className="min-h-[360px] w-full resize-none rounded-2xl border border-[var(--border)] bg-white/60 p-7 text-lg leading-8 text-[var(--green-dark)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--green)] disabled:opacity-70 sm:p-9 sm:text-xl"
            />

            <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[var(--muted)]">
                Don't polish it. Just tell us what happened.
              </p>

              <button
                type="button"
                onClick={handleAnalyze}
                disabled={!story.trim() || isAnalyzing}
                className="rounded-full bg-[var(--green)] px-7 py-3.5 text-base font-medium text-[var(--cream)] transition-all hover:-translate-y-0.5 hover:bg-[var(--green-dark)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isAnalyzing
                  ? "Analyzing your story..."
                  : "Analyze my story →"}
              </button>
            </div>
          </div>

          <div className="mt-20 border-t border-[var(--border)] pt-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[var(--green-dark)]">
                Recent stories
              </p>

              <span className="text-xs text-[var(--muted)]">
                0 stories
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-[var(--border)] px-6 py-12 text-center">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-[var(--green-dark)]">
  Your stories will live here.
</p>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Start with something that actually happened.
              </p>
            </div>
          </div>
        </section>
      ) : !showOpportunities ? (
        <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--green-light)]">
                What Voicix found
              </p>

              <h1 className="text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl">
                There's more here.
              </h1>
            </div>

            <button
              type="button"
              onClick={handleEditStory}
              className="text-sm font-medium text-[var(--green)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--green)]"
            >
              Edit story
            </button>
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--border)] bg-white/40 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
              Your story
            </p>

            <p className="mt-5 text-lg leading-8 text-[var(--green-dark)] sm:text-xl">
  "{story}"
</p>
          </div>

          <div className="mt-12">
            <div className="border-b border-[var(--border)] pb-5">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--green-light)]">
                Story analysis
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
  What makes this interesting
</h2>
            </div>

            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
              <div className="bg-[var(--cream)] p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--green)]">
                  Core story
                </p>
                <p className="mt-4 text-base leading-7">
                  Something unexpected happened, forcing you to rethink an
                  assumption you had about your business.
                </p>
              </div>

              <div className="bg-[var(--cream)] p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--green)]">
                  Tension
                </p>
                <p className="mt-4 text-base leading-7">
                  There was a gap between what you expected to happen and what
                  actually happened.
                </p>
              </div>

              <div className="bg-[var(--cream)] p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--green)]">
                  Insight
                </p>
                <p className="mt-4 text-base leading-7">
                  The experience revealed something about how customers,
                  markets, or businesses actually behave.
                </p>
              </div>

              <div className="bg-[var(--cream)] p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--green)]">
                  Business relevance
                </p>
                <p className="mt-4 text-base leading-7">
                  The lesson can connect to a problem other founders or
                  potential customers are already experiencing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-[var(--green)] p-8 text-[var(--cream)] sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--cream-dark)]">
              Next
            </p>

            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
                  Turn this into content.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--cream-dark)] sm:text-base">
                  Voicix can find different ways to tell the same story —
                  depending on whether you want attention, authority, trust,
                  or demand.
                </p>
              </div>

              <button
                type="button"
                onClick={handleFindAngles}
                className="shrink-0 rounded-full bg-[var(--cream)] px-7 py-3.5 text-base font-medium text-[var(--green-dark)] transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Find content angles →
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--green-light)]">
                Content opportunities
              </p>

              <h1 className="text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl">
                One story.
                <br />
                <span className="italic">Many ways to tell it.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--green-light)] sm:text-xl">
                The goal isn't to squeeze one post out of your experience.
                It's to find the different ideas hiding inside it.
              </p>
            </div>

            <button
              type="button"
              onClick={handleEditStory}
              className="text-sm font-medium text-[var(--green)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--green)]"
            >
              Back to story
            </button>
          </div>

          <div className="mt-14 rounded-2xl border border-[var(--border)] bg-white/40 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
              The experience
            </p>

            <p className="mt-5 text-lg leading-8 text-[var(--green-dark)] sm:text-xl">
  "{story}"
</p>
          </div>

          <div className="mt-12 space-y-4">
            {opportunities.map((opportunity) => {
              const isSelected =
                selectedOpportunity?.number === opportunity.number;

              return (
                <OpportunityCard
                  key={opportunity.number}
                  opportunity={opportunity}
                  isSelected={isSelected}
                  onSelect={handleSelectOpportunity}
                />
              );
            })}
          </div>

          



          {selectedOpportunity && (
            <div className="sticky bottom-5 z-10 mt-8 overflow-hidden rounded-2xl border border-[var(--green-light)] bg-[var(--green)] text-[var(--cream)] shadow-[0_20px_60px_rgba(11,36,27,0.18)]">
              <div className="p-7 sm:p-8">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--cream-dark)]">
                      Selected angle
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold">
                        {selectedOpportunity.type}
                      </span>

                      <span className="rounded-full border border-[var(--green-light)] px-2.5 py-1 text-xs text-[var(--cream-dark)]">
                        {selectedOpportunity.objective}
                      </span>
                    </div>

                    <p className="mt-4 max-w-3xl text-xl font-semibold leading-8 tracking-[-0.02em] sm:text-2xl">
  {selectedOpportunity.title}
</p>
                  </div>

                  <div className="shrink-0">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-[var(--cream-dark)]">
                      Create for
                    </p>

                    <div className="flex rounded-full border border-[var(--green-light)] p-1">
                      <button
                        type="button"
                        onClick={() => setPlatform("X")}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                          platform === "X"
                            ? "bg-[var(--cream)] text-[var(--green-dark)]"
                            : "text-[var(--cream-dark)] hover:text-[var(--cream)]"
                        }`}
                      >
                        X
                      </button>

                      <button
                        type="button"
                        onClick={() => setPlatform("LinkedIn")}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                          platform === "LinkedIn"
                            ? "bg-[var(--cream)] text-[var(--green-dark)]"
                            : "text-[var(--cream-dark)] hover:text-[var(--cream)]"
                        }`}
                      >
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-4 border-t border-[var(--green-light)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-[var(--cream-dark)]">
                    Selected for {platform}.
                  </p>

                  <button
  type="button"
  onClick={handleGenerateContent}
  disabled={isGenerating}
  className="rounded-full bg-[var(--cream)] px-7 py-3.5 text-base font-medium text-[var(--green-dark)] transition-all hover:-translate-y-0.5 hover:bg-white disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
>
  {isGenerating
    ? "Creating your post..."
    : `Generate ${platform} content →`}
</button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

function GeneratedContent({
  story,
  opportunity,
  platform,
}: {
  story: string;
  opportunity: Opportunity | null;
  platform: "X" | "LinkedIn";
}) {
  if (!opportunity) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:px-10 lg:py-20">
      <div className="border-b border-[var(--border)] pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--green-light)]">
          Generated content
        </p>

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              {opportunity.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
              <span>{platform}</span>
              <span>·</span>
              <span>{opportunity.type}</span>
              <span>·</span>
              <span>{opportunity.objective}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <div className="rounded-2xl border border-[var(--border)] bg-white p-7 sm:p-10">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                {platform} post
              </p>

              <span className="text-xs text-[var(--muted)]">
                Draft
              </span>
            </div>

            <div className="mt-8 whitespace-pre-line text-base leading-8 text-[var(--green-dark)] sm:text-lg">
              {`We spent three months building a feature nobody asked for.

The problem wasn't execution.

It was the roadmap.

We had confused "what we could build" with "what customers actually needed."

Now, before anything goes on our roadmap, we ask one question:

What evidence do we have that someone wants this?

A roadmap is a list of bets.

Your strategy is knowing which bets are worth making.`}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-[var(--green)] px-6 py-3 text-sm font-medium text-[var(--cream)] transition-all hover:-translate-y-0.5 hover:bg-[var(--green-dark)]"
            >
              Copy post
            </button>

            <button
              type="button"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--green-dark)] transition-colors hover:border-[var(--green)]"
            >
              Edit
            </button>

            <button
              type="button"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--green-dark)] transition-colors hover:border-[var(--green)]"
            >
              Regenerate
            </button>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-[var(--border)] bg-[var(--cream-dark)] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Content brief
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-xs text-[var(--muted)]">
                Angle
              </p>
              <p className="mt-1 text-sm font-semibold">
                {opportunity.type}
              </p>
            </div>

            <div>
              <p className="text-xs text-[var(--muted)]">
                Objective
              </p>
              <p className="mt-1 text-sm font-semibold">
                {opportunity.objective}
              </p>
            </div>

            <div>
              <p className="text-xs text-[var(--muted)]">
                Platform
              </p>
              <p className="mt-1 text-sm font-semibold">
                {platform}
              </p>
            </div>

            <div className="border-t border-[var(--border)] pt-6">
              <p className="text-xs text-[var(--muted)]">
                Source story
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--green-light)]">
                "{story}"
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}



function OpportunityCard({
  opportunity,
  isSelected,
  onSelect,
}: {
  opportunity: Opportunity;
  isSelected: boolean;
  onSelect: (opportunity: Opportunity) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(opportunity)}
      className={`group w-full rounded-2xl border p-6 text-left transition-all sm:p-8 ${
        isSelected
          ? "border-[var(--green)] bg-white shadow-[0_12px_40px_rgba(11,36,27,0.08)]"
          : "border-[var(--border)] bg-[var(--cream)] hover:-translate-y-0.5 hover:border-[var(--green)] hover:bg-white"
      }`}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <span
          className={`font-editorial shrink-0 text-3xl ${
            isSelected
              ? "text-[var(--green)]"
              : "text-[var(--muted)]"
          }`}
        >
          {opportunity.number}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--green)]">
              {opportunity.type}
            </span>

            <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">
              {opportunity.objective}
            </span>
          </div>

          <h2 className="mt-4 max-w-3xl text-xl font-semibold leading-8 tracking-[-0.02em] sm:text-2xl">
            {opportunity.title}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--green-light)]">
            {opportunity.description}
          </p>
        </div>

        <span
          className={`shrink-0 text-lg transition-all ${
            isSelected
              ? "text-[var(--green)]"
              : "text-[var(--muted)] group-hover:translate-x-1 group-hover:text-[var(--green)]"
          }`}
        >
          {isSelected ? "✓" : "→"}
        </span>
      </div>
    </button>
  );
}