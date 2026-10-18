# Mallikarjun Deshmukh: portfolio

The personal portfolio of Mallikarjun Deshmukh, an aspiring AI & ML engineer. It is built with
Next.js (App Router), TypeScript and Tailwind CSS, and every page is static.

The design research and decisions are written up in [`DESIGN.md`](DESIGN.md).

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Editing content

All content lives in two files. You shouldn't need to touch any components.

| What | File |
|---|---|
| Name, email, LinkedIn/GitHub URLs, hero text, About, skills, education, certifications, navigation | `src/data/site.ts` |
| Project cards and project detail pages | `src/data/projects.ts` |
| Resume PDF | `public/mallikarjun-deshmukh-resume.pdf` (replace the file and keep the name) |
| Hero photo | `public/images/profile-photo.jpg` (a 4:5 crop, 1280×1600). If you replace it, update `FACE` in `src/components/hero-portrait.tsx` so the detection bracket matches the new face position. |

- **GitHub:** set `profile.links.github` in `src/data/site.ts`. GitHub links appear in the hero
  and in Contact once this is filled in.
- **Project repository or demo links:** fill in `links: { github, demo }` for the project in
  `src/data/projects.ts`. They appear on that project's page.
- **Real results** (accuracy, dataset size and so on): add them to `results` for the project. They
  appear in a Results block. Leave it empty if you don't have verified numbers.
- **Adding a project:** add an entry to the `projects` array. Its page at `/projects/<slug>` is
  generated automatically.

## Project structure

```
src/
  app/
    layout.tsx                 fonts, metadata, header and footer
    page.tsx                   homepage (hero, projects, about, skills, education, certifications, contact)
    projects/[slug]/page.tsx   project detail pages (statically generated)
    not-found.tsx              404 page
    icon.svg                   favicon
  components/
    site-header.tsx            sticky nav and mobile menu
    hero.tsx                   hero with the illustrative inference frame
    project-card.tsx
    section.tsx                rule, label and content layout used by every section
    reveal.tsx                 scroll reveal (respects reduced motion)
    copy-email.tsx
    visuals/                   illustrative SVG diagrams for each project
  data/
    site.ts
    projects.ts
```

## Deploy (GitHub and Vercel)

1. Create an empty repository on GitHub, for example `portfolio`, without a README.
2. From this folder, commit and push:

   ```bash
   git add -A
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

3. Go to https://vercel.com/new, sign in with GitHub, and import the repository. Vercel detects
   Next.js automatically, so leave the build settings at their defaults and click **Deploy**.
4. Optional: in the Vercel project, open **Settings → Environment Variables** and set
   `NEXT_PUBLIC_SITE_URL` to your final URL, for example `https://mallikarjun.dev`. This is used
   for social-share metadata. Without it, the site falls back to the Vercel production domain.
5. Optional: add a custom domain under **Settings → Domains**.

Every push to `main` redeploys automatically.
