# Tamayaz (تميّز)

AI-powered career copilot for professionals in Saudi Arabia and the GCC.

## Status

In development. MVP targeting launch in late 2026.

## What's in this repo

- `/app` — Next.js 16 App Router source (TypeScript, Tailwind v4)
- `/brand` — Brand guidelines, design tokens, logo files. Source of truth for all visual design.
- `/public` — Static assets served at the site root

## Tech stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Package manager:** pnpm (via Corepack)
- **Lint:** ESLint (Next.js config)

## Getting started

Requires Node `>= 20` and pnpm. The repo's Node version is pinned in `.nvmrc`.

```bash
pnpm install        # install dependencies
pnpm dev            # start dev server at http://localhost:3000
pnpm build          # production build
pnpm start          # serve the production build
pnpm lint           # run ESLint
```
