# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router site. Route files live in `src/app`, with top-level pages such as `src/app/page.tsx`, `src/app/team/page.tsx`, `src/app/sponsors/page.tsx`, and `src/app/apply/page.tsx`. Shared UI sections for the homepage live in `src/components`. Global styles are in `src/app/globals.css`; Tailwind and PostCSS configuration live at the repository root. Static assets are served from `public`, with grouped image folders such as `public/team`, `public/sponsors`, and `public/vehicles`.

## Build, Test, and Development Commands

Use npm commands unless intentionally updating the Yarn lockfile.

- `npm run dev`: starts the local Next.js development server.
- `npm run build`: creates a production build and catches many type, routing, and rendering issues.
- `npm run start`: serves the production build after `npm run build`.
- `npm run lint`: runs the configured Next.js ESLint checks.

## Coding Style & Naming Conventions

Write TypeScript/React components with the existing project style: functional components, PascalCase component names, and route files named `page.tsx` or `layout.tsx` in App Router folders. Use the `@/*` alias for imports from `src` when it improves clarity, for example `@/components/Hero`. Keep indentation consistent with surrounding files, prefer single-purpose components, and use Tailwind utility classes for styling. Store public images with descriptive kebab-case names, grouped by domain.

## Testing Guidelines

No dedicated test runner is currently configured. Before submitting changes, run `npm run lint` and `npm run build`. For visual or content changes, manually verify affected pages in the browser, especially responsive layouts and image-heavy pages like team, sponsors, and vehicles. If tests are added later, colocate them near the code they cover or place broader integration tests under a clearly named `tests` directory.

## Commit & Pull Request Guidelines

Recent commits are short, plain-language summaries, often lowercase and imperative, such as `update leadership`. Keep commits focused and describe the user-visible change. Pull requests should include a brief summary, screenshots for visual changes, notes on pages touched, and verification steps run, such as `npm run build` or manual browser checks.

## Security & Configuration Tips

Do not commit secrets, local environment files, or generated build output. Keep `.next`, `node_modules`, and downloaded temporary assets out of source control. Optimize large images before adding them to `public`.

## Skills & Tools

If not installed, use the following commands to install the necessary skills:
- `npx impeccable skills install`
- `npx skills add Leonxlnx/taste-skill`
- `npx skills add emilkowalski/skill`

These skills will help you design a sleek and top-of-the-line website for the team.