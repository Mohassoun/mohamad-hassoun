# Style Guide — portfolio-next (`mohamad-hassoun`)

Stack: Next.js 14.2 / React 18.2 / Tailwind 3.4 / TypeScript 5.4 / `react-icons` 5.5.
Output: static export (`next.config.mjs`: `output: "export"`, `images.unoptimized: true`).

Source of truth:
- `styles/theme.css` — CSS vars, themes, reusable classes, keyframes
- `app/globals.css` — Tailwind directives + base
- `tailwind.config.ts` — fonts, brand colors, content paths
- `app/layout.tsx` — local fonts (`--font-poppins`, `--font-montserrat`, `--font-agustina`)

## 1. Theming / Dark mode

No `dark:` Tailwind variant in components. Theming is CSS-variable based:

- Toggle in `components/portfolio-app.tsx`: `body.classList.toggle("theme-dark", isDark)`, persisted in `localStorage: portfolio-theme = "dark" | "light"`, default `light`.
- `tailwind.config.ts`: `darkMode: "class"` is set but unused — do not rely on it.
- Light vars (`styles/theme.css`):
  `--bg #ffffff`, `--panel #f8fafc`, `--panel-strong #f1f5f9`, `--text #334155`,
  `--text-muted rgba(51, 65, 85, 0.75)`, `--subtle-text rgba(51, 65, 85, 0.25)`,
  `--accent #6366f1`, `--brand-secondary #4338ca`, `--brand-primary #312e81`,
  `--brand-gradient linear-gradient(135deg, #312e81 0%, #4338ca 100%)`,
  `--border rgba(15, 23, 42, 0.1)`,
  `--shadow 0 4px 20px rgba(49, 46, 129, 0.08)`, `--divider rgba(15, 23, 42, 0.15)`
- Dark vars (`.theme-dark`):
  `--bg #020617`, `--panel #0f172a`, `--panel-strong #1e293b`, `--text #f8fafc`,
  `--text-muted rgba(248, 250, 252, 0.85)`, `--subtle-text rgba(248, 250, 252, 0.25)`,
  `--accent #818cf8`, `--brand-secondary #6366f1`, `--brand-primary #4338ca`,
  `--brand-gradient linear-gradient(135deg, #4338ca 0%, #6366f1 100%)`,
  `--border rgba(248, 250, 252, 0.08)`, `--shadow 0 4px 20px rgba(0, 0, 0, 0.55)`,
  `--divider rgba(248, 250, 252, 0.2)`

Rule: never hardcode black/white text. Always use:
`text-[var(--text)]`, `bg-[var(--bg)]`, `border-[var(--border)]`, `bg-[var(--panel)]`.

`body` base (`theme.css`): `background: var(--bg); color: var(--text); font-family: var(--font-poppins), sans-serif; min-height: 100vh`.

`::selection` (`globals.css`): `rgba(99, 102, 241, 0.25)`.

## 2. Typography

Loaded in `app/layout.tsx` via `next/font/local` from `public/fonts/`:
- Sans / body: Poppins Light 300, Regular 400, Medium 500, SemiBold 600, Bold 700 + Italic 400 → `var(--font-poppins)`. Gives a rounded, accessible, and "human" feel crucial for HealthTech.
- Heading: Montserrat → `var(--font-montserrat)`. Use light/normal weights and tight tracking (`tracking-tight`) for a modern SaaS look.
- Script / logo: Agustina → `var(--font-agustina)`

Tailwind aliases (`tailwind.config.ts:17-21`):
`font-sans = var(--font-poppins)`, `font-heading = var(--font-montserrat)`, `font-script = var(--font-agustina)`.

Conventions in use:
- Logo: `font-script text-3xl text-[var(--accent)]` + `font-heading` brackets (`navbar.tsx:37-44`)
- Hero H1: `font-heading text-[42px] md:text-[50px] lg:text-[60px] font-light leading-none tracking-tight`, name part `font-bold`
- Section titles: `.section-title` → `font-heading text-[42px] sm:text-[54px] font-normal tracking-tight`
- Subtitles: `.section-subtitle` → `text-[15px] sm:text-[16px]` + `color: var(--text-muted)`, often with `font-heading`
- Body: `.body-copy` → `color: var(--text-muted)`, sizes `14-16px`, `leading-7/8`
- Nav links: `text-[13px]`, uppercase labels from `portfolio-data.ts`
- Typewriter caret: `.type-caret::after` 1px bar, `blink 1s step-end infinite`

## 3. Colors & Styling (HealthTech Indigo)

Primary accent: `--accent #6366f1` (Indigo). Dark mode accent: `--accent #818cf8`. Used for logo, icons (`FiPlay`, nav icons), hovers, borders.
Brand gradient: `--brand-gradient`. Used for primary CTA backgrounds to give a modern tech feel.

Tailwind `brand` palette (`tailwind.config.ts:9-15`) is defined but legacy/unused in components — do not mix with `--accent`.

Buttons (Medical/SaaS style - soft corners):
- Primary CTA: `bg-[image:var(--brand-gradient)] hover:brightness-110 text-white font-medium px-6 py-3 rounded-full transition-all shadow-[0_4px_14px_rgba(99,102,241,0.39)]`
- Secondary CTA: `border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white font-medium px-6 py-3 rounded-full transition-all`
- General Radius: Avoid sharp edges (no `rounded-none` or small rounded). Default to `rounded-xl` or `rounded-full` for interactive elements to maintain a friendly, secure aesthetic.

## 4. Layout / Spacing

- Container: `.section-shell` → `mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-10`
- Sections: `relative` + `overflow-hidden` + `isolate` where absolute art is used. Hero reserves fixed header: `pt-20`, inner `min-h-[calc(100svh-5rem)]` (mobile `100svh-6rem`).
- Header height: `section-shell flex items-center justify-between py-4` (~72px).
- Breakpoints: Tailwind defaults — `sm:`, `md:` (tablet hero variant), `lg:` (desktop nav + hero). Mobile menu only `< lg`.
- Cards: `.glass-panel` → `background: var(--panel); border: 1px solid var(--border); box-shadow: var(--shadow); border-radius: 1rem (rounded-2xl)`.

## 5. Layering / Z-index

- Navbar `header`: `fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md`, bg `bg-[var(--bg)]/80` idle → `bg-[var(--bg)]/95 shadow` when `scrollY > 16`. Never `bg-transparent` (hero would show through).
- Mobile menu: `fixed inset-x-4 top-20 z-40` — always below header.
- Hero: `section relative isolate overflow-hidden`, inner `relative isolate`. Image wrapper `pointer-events-none absolute inset-y-0 right-0 z-0 ... overflow-hidden opacity-90`, image `h-full max-h-[calc(100svh-5rem)] w-auto object-contain object-bottom`. Text `relative z-10`. No `-right-*` offsets.

## 6. Components

- `navbar.tsx`: fixed header + scroll state, desktop `hidden lg:flex`, mobile `lg:hidden` dropdown. Theme toggle `FiSun/FiMoon`.
- `hero-section.tsx`: 3 variants (`hidden lg:block`, `hidden md:block lg:hidden`, `md:hidden`), typewriter via `setInterval 60ms` + `1400ms` pause, `SocialLinks` + `FiPlay` + `hi.gif`.
- `section-heading.tsx`: centered `section-title` + `section-subtitle font-heading`.
- `social-links.tsx`: `flex gap-3 sm:gap-4`, link `group flex h-11 w-11 items-center justify-center rounded-full`. Icons are black SVGs (`public/images/icons/social-*.svg`, `stroke="currentColor"`) rendered with `next/image` (= `<img>`), so `currentColor` does NOT inherit — handled by filter in `theme.css:101-110`:
  `.theme-dark .social-icon-img, .group:hover .social-icon-img { filter: brightness(0) invert(1); }`
- Icons elsewhere: `react-icons/fi` (`FiMenu/FiX/FiMoon/FiSun/FiPlay/...`), `react-icons/ri` (`RiFolderOpenLine`). These DO inherit `currentColor` — prefer them for new icons.
- `scroll-to-top.tsx`, `service-card.tsx`, `project-card.tsx`, `footer.tsx`: use `glass-panel`, `var(--border)`, `var(--text-muted)`.

## 7. Motion

- `html { scroll-behavior: smooth }`, nav uses `scrollIntoView({ behavior: "smooth" })`.
- Keyframes: `blink` (caret), `float` (`translateY 0 → -10px`, `.float-soft 5s ease-in-out infinite`).
- Transitions: `transition`, `transition-all` on header/links/cards. No global duration override.

## 8. Rules for new code

1. Use CSS vars, never raw `#fff/#000` for text/bg/border.
2. New section → wrap in `.section-shell`, title via `SectionHeading`.
3. Absolute decoration → parent `relative isolate overflow-hidden`, art `z-0 pointer-events-none`, content `relative z-10`, constrain with `max-h` + `object-contain`.
4. New SVG file icon → add `social-icon-img` class or prefer `react-icons` so dark mode works.
5. Keep `z-50` header / `z-40` dropdown hierarchy; header bg must stay opaque (`/80` min) + `backdrop-blur-md`.
6. Fonts: body `font-sans` default, headings `font-heading`, logo only `font-script`.
7. Shape: Always favor `rounded-xl` or `rounded-full` for interactive elements to maintain a friendly health-tech vibe.