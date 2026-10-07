# Red3 Display concept demo
Hand-coded static concept for [Red3 Display](https://red3display.com) by [LuminArch](https://luminarch.pro). Not affiliated with Red3. Real facts are logged in `FACTS_LOG.md`. Product names, prices, specs and images are placeholders.

Structure follows the LuminArch static pattern (whe-fest): `css/design-system.css` (tokens), `css/components.css`, `css/pages.css`, `js/data.js` (catalog data), `js/main.js` (nav, catalog filtering, PDP, IntersectionObserver reveals), plus `build.py`, which regenerates the HTML pages with the shared head, nav, footer, meta and JSON-LD. Design decisions are in `DESIGN_DNA.md`.

Pages: index, catalog (search, filters, chips, sort), product?id=, contact, 404. Set to noindex on purpose, since a concept demo should never compete with the client's real site.
