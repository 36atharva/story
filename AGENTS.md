# AGENTS.md

## Project

This repository contains the MVP for a SaaS product that helps founders turn their real personal and business stories into strategic content opportunities and publishable business content.

The product is currently in early validation and MVP development.

## Core Product

The core workflow is:

Founder context
→ Founder story
→ Story analysis
→ Content opportunities
→ Selected content angle
→ X / LinkedIn content

The product is NOT a generic AI content generator.

Its core value is identifying the business and storytelling potential hidden inside a founder's real experiences.

## Development Principles

1. Keep the architecture simple.
2. Optimize for speed of validation and iteration.
3. Do not over-engineer.
4. Do not introduce microservices.
5. Do not add unnecessary dependencies.
6. Prefer existing platform capabilities over custom infrastructure.
7. Keep AI logic modular and replaceable.
8. Keep secrets server-side.
9. Never expose API keys or service credentials to the client.
10. Validate user input on the server.
11. Protect user data and enforce ownership on every server-side read/write.
12. Use TypeScript throughout the application.
13. Keep business logic separate from UI where practical.
14. Do not add features outside the approved MVP scope.

## AI Principles

The AI should not simply generate generic social media posts.

The intended flow is:

Story
→ identify narrative
→ identify tension
→ identify insight
→ identify founder authority
→ identify audience relevance
→ identify business relevance
→ generate content opportunities
→ generate selected content

AI output should be structured wherever practical.

Do not create an autonomous multi-agent architecture for the MVP.

Do not introduce RAG, embeddings, vector databases, fine-tuning, LangChain, LangGraph, or other AI infrastructure unless explicitly approved.

## MVP Scope

The MVP should allow a founder to:

1. Create an account.
2. Create a founder/business profile.
3. Save their positioning and content context.
4. Submit personal or business stories.
5. Analyze a story.
6. Receive multiple content opportunities from that story.
7. Select an opportunity.
8. Generate content for X or LinkedIn.
9. Save generated content.

## Explicitly Out of Scope for Initial MVP

Do not build:

- Social media publishing integrations
- X API integration
- LinkedIn API integration
- Content scheduling
- Social analytics
- Automated posting
- Team collaboration
- CRM
- Lead scraping
- Automated outbound
- Mobile apps
- Browser extensions
- Voice input
- Image generation
- Video generation
- Autonomous agents
- Complex recommendation engines
- Subscription billing before product validation
- Advanced dashboards
- Gamification

These may be considered later.

## Product Philosophy

The product should help founders turn:

Experience
→ Story
→ Insight
→ Authority
→ Demand

The product should prioritize authentic founder experiences over generic AI-generated business advice.

## Coding Rules

Before making changes:

1. Read the relevant documentation.
2. Understand the existing architecture.
3. Make the smallest change necessary.
4. Do not modify unrelated files.
5. Do not add dependencies unless necessary.
6. Run relevant validation after changes.
7. Report exactly what was changed and any remaining issues.

Never silently expand the scope of a task.

## Git Rules

Work should happen on the `dev` branch.

Do not commit directly to `main`.

Use clear, small commits.

Example:

feat: add founder profile schema

fix: validate story input

docs: define story framework

## Current Stage

The project is currently in product definition and MVP setup.

Do not begin implementing product features unless explicitly instructed.