# Waseem Akhter – Portfolio

Personal portfolio site built with React and Vite. It is fully responsive across mobile, tablet, laptop and large desktop screens.

## Tech stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/) (loaded from CDN in `index.html`)
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [Typed.js](https://github.com/mattboldt/typed.js) for the hero typing effect
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```text
public/assets/          Images (hero, company logos, skill icons)
src/App.jsx             Page layout
src/index.css           All styles, including responsive breakpoints
src/components/         Navbar, Home, Experience, Skills, Projects, Contact
src/components/data/    JSON content for each section
src/pdf/                Downloadable resume
```

## Updating content

Edit the JSON files in `src/components/data/`; no component changes are needed.

| File | Fields |
| --- | --- |
| `hero.json` | `imgSrc` – path under `public/assets/` |
| `experience.json` | `id`, `organisation`, `role`, `startDate`, `endDate`, `location`, `experiences` (list of bullet points), `imageSrc` |
| `skills.json` | `title`, `imageSrc` – path under `public/assets/` |
| `projects.json` | `key`, `title`, `imageSrc` (URL), `description`, `demo` (URL) |

## Responsive breakpoints

| Width | Layout |
| --- | --- |
| < 576px (phones) | Hamburger menu, stacked hero, 2-column skills, 1-column projects |
| 576–767px (large phones) | Hamburger menu, 3-column skills, 2-column projects |
| 768–991px (tablets) | Full navbar, stacked hero, 3-column skills, 2-column projects |
| 992–1199px (small laptops) | Side-by-side hero, 4-column skills, 2-column projects |
| ≥ 1200px (laptops/desktops) | Side-by-side hero, 4-column skills, 4-column projects |
