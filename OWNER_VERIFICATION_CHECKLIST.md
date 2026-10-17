# SLV Infra — owner verification checklist (internal)

This file is a working checklist, **not customer-facing website copy**.

## Before public domain launch
- [ ] Confirm legal company name, founder name, 1987 Hyderabad establishment and 1992 Bangalore expansion.
- [ ] Verify direct phone, WhatsApp, business email and both office addresses; do not publish guessed contact details.
- [ ] Confirm whether the company has permission to publish the historical brochure as a downloadable profile.
- [ ] Review all 26 project entries with the owner, including clients, scopes, places, dates, contractual roles and values.
- [ ] Verify apparent source typos: `Telanagan`, `Defence Medows`, `Phase-11`, `Hill in School`, `Jai Prakash Associates`, and ambiguous records 8, 12 and 16. Do not silently rewrite historical records.
- [ ] Confirm any claims about equipment, safety practices, certifications, tenders, response times and project outcomes before publication.
- [ ] Confirm any contract-value aggregate and the correct currency/period; historical values are not current revenue.
- [ ] Confirm actual domain ownership and update metadataBase, canonical links, OG URLs, redirects and analytics after DNS is configured.
- [ ] Implement and test a real enquiry endpoint with spam protection; only then add successful-submission messaging, verified call/WhatsApp links and response-time promises.
- [ ] Supply a verified 1200×630 social image before enabling large-image social cards.
- [ ] Verify deployment of the latest main commit on Cloudflare Workers and invalidate any stale cache.

## Current site behavior
The contact form only copies a project brief; it does not submit or store information. The website must state this clearly until the backend is operational.
