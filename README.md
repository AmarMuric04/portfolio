# Amar Murić, portfolio

My personal portfolio: the projects I've built, my education and my work
experience, in a calm single-page app.

Live: https://amarmuric.vercel.app

## Features

- Four pages: Home, Projects, Education and Experience, with per-page titles
  and meta tags.
- Projects page with include/exclude filters by tech and tech category, and a
  details modal for each project (overview, features, my thoughts and the
  project's README).
- Light and dark theme, saved per visitor and applied before first paint.
- Animated counters and progress bars that respect reduced motion.
- No layout shift: every image and lazily shown block reserves its box.

## Stack

React 18, TypeScript (strict), Vite, TanStack Router (file-based routes),
Tailwind CSS v4, Framer Motion, Nice Modal and shadcn/ui primitives. Hosted on
Vercel.

## Run locally

Requires Node 24 (see `.nvmrc`) and npm.

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # tsc --noEmit
npm run lint       # eslint .
npm run build      # typecheck + production build into dist/
```

No environment variables are needed.

## Project layout

- `src/routes/`: TanStack file routes, each wiring one page component.
- `src/components/`: `layout/`, `pages/`, `modals/`, `shared/` and the
  shadcn primitives in `ui/`.
- `src/assets/`: the site's content (projects, education, experience, tech)
  as typed data, plus SVG icons.
- `public/`: project logos and screenshots.

## Contact

- GitHub: [AmarMuric04](https://github.com/AmarMuric04)
- LinkedIn: [Amar Murić](https://www.linkedin.com/in/amar-muri%C4%87-52564b2a2/)
- Email: [muricamar2004@gmail.com](mailto:muricamar2004@gmail.com)
