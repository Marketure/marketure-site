
# Marketure Monorepo

## 📁 Structure

- `astro-site/` — Astro frontend connected to Sanity CMS
- `studio/` — Sanity Studio for content management

## 🚀 Setup

1. Copy `.env.example` in `astro-site/` to `.env` and add your SANITY_API_TOKEN.
2. Install dependencies in each folder:
    - `cd astro-site && npm install`
    - `cd ../studio && npm install`
3. Run Sanity studio:
    - `cd studio && npm run dev`
4. Run Astro site:
    - `cd ../astro-site && npm run dev`

## 🧪 Deploy on Netlify

Point Netlify to `astro-site`, set environment variable `SANITY_API_TOKEN`.

## 📬 Contact

Built with 💜 by Marketure Media
