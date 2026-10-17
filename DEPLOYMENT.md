# SLV Infra — Cloudflare Workers static deployment

## Verified source configuration (17 October 2026)
- Repository: `mkraja826/Slvinfra`, branch `main`
- Framework: Next.js 15 static export (`output: "export"`, `trailingSlash: true`)
- Node.js: 22
- Build command: `npm run build`
- Exported site: `out/`
- Cloudflare Worker name: `slvinfra`
- Worker preview: https://slvinfra.karthikraja826.workers.dev/
- Target custom domain: `slvinfra.com` (DNS/connection not verified)
- No server runtime, Supabase, Docker or paid API required for the current website.

## Deploy using Cloudflare Workers (Static Assets)
The repository's `wrangler.jsonc` config points Workers Static Assets at `./out`. Do not select the OpenNext Worker preset for this static-export site; it expects server artifacts that do not exist.

1. In Cloudflare Workers & Pages, open the existing **slvinfra Worker**, rather than creating a second project.
2. Connect GitHub `mkraja826/Slvinfra`, branch `main`, if not already connected.
3. Set root directory to repository root, build command to `npm run build`, and deployment command to `npx wrangler deploy`.
4. Use Node 22. Ensure the build produces `out/index.html` and `out/about/index.html` etc.
5. Deploy and inspect the build logs. A green GitHub Actions check is **not** proof that Cloudflare deployed.
6. Visit the Worker URL and check the five routes, mobile menu, search/sort, form copy, and readability at 320–1440px.
7. Only after verifying DNS ownership, connect `slvinfra.com` as a custom domain and confirm HTTPS, redirects and canonical metadata.

## CI verification
GitHub Actions now performs TypeScript checks, a Next.js static build and smoke checks for all five exported pages, compiled CSS and the Projects search interface. Successful runs have been observed through commit `d6f068a` (17 October 2026).

## Outstanding production gates
- Confirm the Cloudflare Worker serves the **latest commit**, not a stale deployment.
- Confirm the screenshot-based text contrast and mobile footer corrections on the actual live site.
- Verify the company's direct contact email and phone; the current form **copies** an enquiry brief locally and never sends or stores it.
- Confirm 1987 establishment year: the brochure states 1987, while an older logo reportedly says 1985.
- Obtain approval for publishing historical project/client names and contract values.
- Replace the illustrative externally hosted Unsplash hero with an approved, optimized image when available; never imply stock imagery is completed SLV work.
- Verify `slvinfra.com` domain ownership and DNS before changing records.

## Manual release checklist
- Open `/`, `/about/`, `/services/`, `/projects/`, `/contact/` at 320, 360, 390, 430, 768, 1024 and 1440px.
- Check navigation and Escape-key menu dismissal, active-page indication, keyboard skip link, reduced-motion preferences and focus visibility.
- Check Projects search, clearing and sorting; contact form validation, copying and clipboard fallback.
- Check contrast for Services heading and Philosophy paragraph; confirm footer wordmark and Contact CTA layout.
- Confirm no horizontal overflow, broken links, missing assets or browser console errors.
- Confirm canonical metadata and social previews before attaching the custom domain.
