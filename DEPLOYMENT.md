# SLV Infra — Cloudflare Pages deployment

## Deployment target
- Domain: slvinfra.com (not connected yet)
- Framework: Next.js static export
- GitHub branch: main
- Build command: npm run build
- Output directory: out
- Node.js: 22
- No Docker, Supabase, paid services or runtime API required for this static website.

## Cloudflare Pages setup
1. In Cloudflare dashboard, create a Pages project connected to GitHub repository mkraja826/Slvinfra.
2. Select branch main and set framework to Next.js (Static HTML Export), or enter the build command and output directory above manually.
3. Set NODE_VERSION=22 if needed, then deploy.
4. Under Pages > Custom domains add slvinfra.com and optionally www.slvinfra.com. Follow Cloudflare's ownership/DNS instructions. Do not modify existing DNS without reviewing current records.
5. Check TLS, canonical redirects, all routes, and responsive layouts before declaring production ready.

## Blockers
- Direct enquiry email/phone are not verified. Contact page currently creates a local copyable brief; it does not send.
- Hero photo is a temporary externally hosted Unsplash placeholder. Confirm asset rights, select authentic project images, and optimize delivery before launch.
- Brochure says established 1987 while one logo mentions 1985; confirm public heritage year.
- Historical project names and values need client approval for publication.
- No successful CI build or device/browser QA has yet been observed.

## QA checklist
- Verify GitHub Actions typecheck and production build.
- Test /, /about/, /services/, /projects/, /contact/.
- Test 320, 360, 390, 430, 768, 1024 and 1440 px, touch menu, keyboard navigation, reduced motion, no horizontal overflow.
- Test contact brief copy in secure context; ensure no false submission confirmation.
- Validate SEO metadata, social previews, image optimization and accessibility.
