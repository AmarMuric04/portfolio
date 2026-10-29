# CLAUDE.md

Guidance for Claude Code when working in this repository. Following this file is
enough to produce code that matches the repo's bar — the `strict-reviewer` and
`convention-checker` agents exist as an optional final gate, not a crutch. Write
code indistinguishable from the best code already here.

## Repository Overview

Amar Murić's personal portfolio: a single-page app with Home, Projects,
Education and Experience pages.

Tech: React 18, TypeScript (strict), Vite, TanStack Router (file-based routes),
Tailwind v4, Framer Motion, Nice Modal (`@ebay/nice-modal-react`), shadcn/ui
primitives in `src/components/ui`. Package manager: npm. Node per `.nvmrc`.

## Development Commands

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint .
npm run lint:fix    # eslint . --fix
npm run format      # prettier --write .
```

- Never run `build` (CI/Vercel only). Never run `dev` — assume it's already
  running on http://localhost:5173.
- After every change: `npm run typecheck` and `npm run lint` must both pass
  with zero problems.

## Architecture

- `src/routes/` — TanStack file routes. A route file only wires a page
  component (`createFileRoute("/x")({ component: XPage })`); no markup or logic.
  `routeTree.gen.ts` is generated — never edit it.
- `src/components/` — every component (see File & Folder Structure).
- `src/assets/` — static content as `as const` data (`WORK`, `OTHER_WORK`,
  `EDUCATION`, `WORK_HIGHLIGHTS`, `WORK_READMES`, `TECH_ICONS`,
  `TECH_CATEGORIES`) and the SVG icon components (`svgs.tsx`). Shapes are
  inferred from the data — never hand-write a type for it.
- `src/hooks/` — reusable hooks (`useTheme`, `useIntersectionObserver`,
  `useAnimatedNumber`).
- `src/lib/` — framework-free helpers (`cn` in `utils.ts`, project filters).
- Modals: every modal is `NiceModal.create(...)` in `src/components/modals/`,
  renders the shared `Modal` shell, and is opened with
  `useModal(XModal).show(args)`. Never render a modal inline or keep open/closed
  state by hand.
- Theme: `useTheme` sets `data-theme` on `<html>` and persists the choice. Colors
  come from the theme variables and `theme-*` classes in `src/index.css`.

## Components

- `React.FC` with inline prop types. Never a separate `type XyzProps` alias.

```tsx
const MyComponent: React.FC<{ title: string; className?: string }> = ({
	title,
	className,
}) => {
	return <p className={cn("text-lg", className)}>{title}</p>;
};

export { MyComponent };
```

```tsx
// NO — separate type definition
type MyComponentProps = {
	title: string;
};
export const MyComponent: React.FC<MyComponentProps> = ({ title }) => { ... };
```

- `const` arrow functions, never `function` declarations.
- Named exports only, collected in one `export { … }` at the bottom of the file.
  No `export default` (lazy imports map the named export instead). The one
  exception is `export const Route` in `src/routes/*`, which the TanStack router
  plugin requires.
- Event handlers are prefixed `handle` (`handleClick`, `handleKeyDown`,
  `handleThemeToggle`).
- Early returns over nested conditionals. One responsibility per component.
- Descriptive variable and function names. Readability over performance.
- No abbreviated identifiers — spell the full word: `event` not `e`,
  `education` not `edu`, `previous` not `prev`. `id` is a word, not an
  abbreviation.
- Reuse shared/shadcn components from `@/components/shared` and
  `@/components/ui`. Never hand-roll an equivalent. If one lacks a style you
  need, extend it with a prop rather than building a one-off in the consumer.
- NEVER write a comment. Zero. No `//`, no `/* */`, no JSDoc, no TODO, no
  section banner, no "why" comment, no `eslint-disable`. There is no exception
  and no judgement call to make: code documents itself. If something needs
  explaining, rename it, split it, or restructure it until it explains itself.
- No dead, commented-out, or speculative code — no props/branches/abstractions
  nobody uses. Dead weight is a defect even when it typechecks.

## Code Layout

- File order: imports → module constants/tables → private child components and
  helpers → the exported component → one `export { … }` statement.
- Imports in three groups separated by one blank line: external packages, then
  `@/` aliases, then relative imports. Type-only imports use `import type` /
  inline `type` (required by `verbatimModuleSyntax`).
- Component body order, one blank line between each group:
  1. context/router/modal hooks (`useModal`, `useLocation`, `useTheme`, …)
  2. local state (`useState`, `useRef`)
  3. derived values
  4. effects
  5. handlers (one blank line between handlers)
  6. early returns
  7. JSX
- JSX: one blank line between sibling sections — the block-level children of a
  layout container (blocks, lists, conditionals, child components). A unit that
  reads as one thing stays together with no blank line: an icon and its label
  inside a button or link, a heading and its subtitle, a `<strong>` label and
  the value it labels. No ternary nested more than one level. An
  inline conditional branch longer than ~15 lines becomes its own component.
- An inline JSX arrow does exactly one call (`onClick={() => show({ project })}`);
  anything more becomes a `handle…` function.
- A component over ~150 lines, or with 3+ levels of JSX conditionals, is split.

## TypeScript

- Strict mode with `noUncheckedIndexedAccess` and `verbatimModuleSyntax`. No
  `any` — use `unknown` and narrow, or a generic.
- Never create a named type/interface alias unless the compiler literally cannot
  infer and a call site breaks without it (e.g. the router `Register`
  augmentation in `main.tsx`). DRY is not a reason to extract a
  type — repeating an inline/inferred shape is preferred. Let inference,
  `typeof`, and generic call-sites carry the shape.
- This ban covers DERIVED aliases too. A named alias wrapping an inferred shape
  (`type Project = (typeof WORK)[number]`) is exactly as prohibited as writing
  the fields out. Inline the type expression at the call site that needs it:

  ```tsx
  // NO
  type Project = (typeof WORK)[number];
  const ProjectCard: React.FC<{ project: Project }> = ...

  // YES
  const ProjectCard: React.FC<{ project: (typeof WORK)[number] }> = ...
  ```

- Never annotate function/component return types — let inference work. If the
  inferred shape is wrong, fix the body.

## Styling & Color Tokens

- Tailwind classNames only. No inline `style` except dynamic/animated/measured
  values (e.g. a progress width). Never `<style>` tags.
- Merge incoming `className` and conditional classes via `cn` — never string
  concatenation or template literals.
- Theme-aware colors use the `theme-*` classes (`theme-surface`,
  `theme-title-text`, …) defined in `src/index.css`.
- No hardcoded color literals (`#hex`, `rgb()`, `rgba()`, `bg-[#…]`) in
  components. Fixed colors are `@theme` tokens in `src/index.css` and are used
  as classes (`text-sage`, `hover:bg-tech-hover`, `border-status-live`). A
  color that isn't a token yet is added there first. Only legit literals:
  third-party brand logos in `src/assets/svgs.tsx` and keyframe values handed
  to Framer Motion (`textShadow` arrays), which can't animate CSS variables.
- Animations: default `ease-out`, 0.2–0.3s (never >1s); hover `ease` 200ms.

## File & Folder Structure

- Folder per component: `ComponentName/ComponentName.tsx` + `index.ts`
  (`export * from "./ComponentName"`).
- `src/components/` is split by role:
  - `layout/` — app chrome (`AppLayout`, `Header`).
  - `pages/` — one folder per page (`HomePage/HomePage.tsx`). Components used
    only by that page are folders directly inside it, never in a `components/`
    subfolder.
  - `modals/` — Nice Modal modals.
  - `shared/` — components used by more than one page or modal.
  - `ui/` — shadcn primitives. Generated code: never hand-edit for style, never
    linted.
- A component lives next to its only user; it moves to `shared/` once a second
  page or modal needs it.
- Pages never import from `routes/` except `Route`.

## Repo Idioms

- Numeric coercion `+x`, not `Number(x)`. Boolean `!!x`, not `Boolean(x)`.
- Never `new Set(...)` / `new Map(...)` — dedupe with
  `array.filter((value, index) => array.indexOf(value) === index)`, key/lookup
  with object literals.
- No `useMemo`/`useCallback` unless there's a stated referential-stability need
  or a measured perf problem.
- Persisted state goes through `useLocalStorage` from `usehooks-ts` — never
  `localStorage` + `useState`/`useEffect` by hand.
- Never call deprecated APIs (IDE strike-through / `@deprecated` in the .d.ts).
- Never rely on object key order for what renders; iterate an explicit ordered
  array (`TECH_CATEGORIES`).

## Abstraction Balance

- Reject both duplication AND premature abstraction. DRY is not a license to
  invent indirection — repeating an inline shape beats a bad alias.
- No one-off "stupid helpers" that wrap a single expression or scatter
  data-massaging across a view. Derivation belongs inline at the call site or
  in `src/lib`. A small shared presentational component that removes real
  markup duplication is fine — this targets utilities, not components.

## Important

- Never run `build` or `dev`.
- `npm run typecheck` and `npm run lint` pass with zero problems before any
  commit.
- Zero comments, zero named types, `export { … }` at the bottom.
