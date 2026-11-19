# Bharadwaj Manne — Portfolio

Software engineer focused on backend and distributed systems, performance, and reliability.

[Live portfolio](https://bharadwaj.vercel.app/) · [GitHub](https://github.com/Bharadwaj-1953) · [LinkedIn](https://www.linkedin.com/in/bharadwaj-manne-711476249/)

## What’s inside

- A filterable catalog of 14 GitHub projects. PMTrace, DriftScope, and EoMT are featured, with expandable technical details and repository links.
- Employer-grouped experience, education, certifications, and a filterable skills directory.
- An IEEE speech-enhancement paper and an Indian patent application, with expandable research details and publication identifiers.
- Responsive navigation and contact links, an optimized mobile portrait, and motion that respects reduced-motion preferences.

Built with React, Vite, Tailwind CSS, and Framer Motion. The site is hosted on Vercel.

## Run locally

Use Node.js 22 and npm.

```sh
git clone https://github.com/Bharadwaj-1953/Bharadwaj_Portfolio.git
cd Bharadwaj_Portfolio
npm ci
npm run dev
```

Open [localhost:5173](http://localhost:5173/).

## Production build

```sh
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The preview command serves that build locally, normally at [localhost:4173](http://localhost:4173/).

Vercel builds from the repository root using the Vite framework preset, Node.js 22, `npm ci`, and `npm run build`, with `dist/` as the output directory. Git deployments use the production branch configured in the Vercel project.

## Update the portfolio

| Area | Location |
| --- | --- |
| Projects, skills, experience, and certifications | `src/data/` |
| Page sections, navigation, and contact links | `src/components/` |
| Layout, colors, and motion styles | `src/index.css` and `tailwind.config.js` |
| Portraits, logo, icons, and social preview image | `public/` |
| Page title, description, and social sharing metadata | `index.html` |

Before publishing, build the site and spot-check narrow portrait and short landscape layouts, keyboard navigation, project and research disclosures, and reduced-motion mode. Commit source changes, the lockfile when dependencies change, and public assets used by the site. Local backups and build output are excluded from version control.
