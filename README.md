# MarkScope Landing Page

Marketing site for MarkScope, deployed from this repository to GitHub Pages.

## Stack

- Vite
- React
- TypeScript
- Vitest

## Local Development

```bash
pnpm install
pnpm dev
```

## Tests

```bash
pnpm test
```

## Production Build

```bash
pnpm build
```

The Vite base path is configured for the project site:

- `https://alasdairpan.github.io/MarkScope-LandingPage/`

## Deployment

This repo deploys to GitHub Pages from `.github/workflows/deploy.yml` on pushes to `main`.

## Asset Policy

- Keep published assets inside this repository.
- Product screenshots should come from implemented MarkScope screens.
- Product copy should stay aligned with the approved landing-page design spec.
