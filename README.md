# Sam Marino

Personal career site for Sam Marino, an aviation professional and hardware troubleshooter seeking Flight Test or Mission Operations roles.

**Live URL:** https://coastbeekeeper-afk.github.io/sam-marino/

The page is a static résumé companion. It includes only details Sam has provided: contact, three roles, education, licenses, and skills. When the résumé changes, edit `index.html` and keep new claims limited to what the résumé actually says.

A few items are intentionally unfinished. Do not invent them:

- The California Baptist University simulator role is August 2023 – December 2025.
- The Commercial Aviation B.S. is marked expected (December 2026). Do not list it as completed until Sam confirms.
- The breakaway gate cuts parts cost from $283 plus labor to under $3. Do not invent a labor dollar amount.
- The radiotelephone credential is the FCC Restricted Radiotelephone Operator Permit. Do not invent an issue date.
- The FAA Instrument Rating was issued May 2026. Do not add an end date.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080/

Asset paths are relative, so the same files work locally and on the GitHub Pages project URL.

## Edit the site

- **Copy** — `index.html`. Sections are About, Experience, Background (education and licenses), Focus (including the skills list), and Contact.
- **Visual design** — `styles.css`. Colors are navy, cream, and warm gold.
- **Menu behavior** — `main.js` only updates the year, header height, and mobile-menu state. The menu still opens without JavaScript.
- **Photos** — `images/`. Replace a file and keep the same filename, or update the `src` in `index.html`.
  - `sam-marino-hero.jpg` — hero portrait
  - `sam-marino-about.jpg` — about portrait
  - `sam-marino-portrait.jpg` — contact portrait
  - `og.jpg` — social preview (1200×630)
- **Do not describe photo backdrops as employment or ownership.** The portraits are of Sam. Do not add sheriff, law-enforcement, or aircraft-ownership claims based on what is behind him.

There is no build step. Edit the files and refresh.

## Deploy

Pushes to `main` run `.github/workflows/pages.yml`, which publishes the repository with GitHub Actions.

If the site is not live after that workflow succeeds, enable Pages once:

**Settings → Pages → Build and deployment → Source: GitHub Actions**

The workflow also requests Pages enablement (`enablement: true`) when it runs.

## Fonts

Fraunces and Outfit are included under the SIL Open Font License. See `fonts/OFL.txt`.
