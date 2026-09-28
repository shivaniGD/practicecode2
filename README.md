# Next.js: API Route + getServerSideProps vs SSG

## Tasks covered
1. `pages/api/posts.js`: API route returning sample JSON
2. `pages/posts-ssr.js`: calls that API using `getServerSideProps` (fetched on every request)
3. `pages/posts-ssg.js`: SSG page for comparison

## Run
```bash
npm install
npm run build
npm start
```
Use a production build: `npm run dev` re-runs `getStaticProps` on every request and hides the difference.

## Observe
Open `/posts-ssg` and `/posts-ssr` in two tabs and refresh several times.

- `/posts-ssg`: "built at" timestamp never changes (fixed at build time)
- `/posts-ssr`: "rendered at" and "API generated at" change on every refresh

The build output marks SSG pages with `●` and server-rendered pages with `ƒ`.

If you already have Day 1 SSG pages, copy them into `pages/` and compare them the same way.
