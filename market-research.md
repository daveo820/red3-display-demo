# RED3 market research: store fixture and display websites

Done 2026-10-07 by LuminArch as input for the RED3 rebuild. Screenshots are in `research/`, taken from desktop Chrome at 1440x900. Lighthouse 12 ran in mobile mode from one box, in a single run per site, so treat the scores as rough.

## What I could and could not measure (read this first)
- **Traffic:** I could not get it. Similarweb returned 403 to the fetch tool, and Semrush needs a login. None of the rankings below use traffic numbers. If Davis has a Semrush or Ahrefs login, that's a ten minute job.
- **Search ranking:** this is not Google. It comes from the search index my tools use, which is a rough proxy.
  - "store fixtures" returned Tebo Store Fixtures, **Barr Display**, **Lozier**, KC Store Fixtures and Store Fixtures Depot.
  - "slatwall panels buy" returned garage storage brands (Proslat, Home Depot, Slatwall World, StoreWALL).
  - Retail fixture sellers don't own the plain "slatwall" term. Garage storage does.
- **Econoco:** it blocked headless Chrome and Lighthouse (403), so it's excluded from scoring. Its public copy does show factory direct positioning, "100+ years" and a mannequin subsidiary (Mondo Mannequins).
- **MODERNE:** I couldn't find a US store fixture site under that name, so it was skipped.
- **Store Fixtures Direct:** these numbers come from storefixturesdirect.com (BigCommerce). Note that storefixtures.com is a password protected Shopify store.

## Ranked

| # | Site | Platform | Lighthouse perf / a11y / SEO | LCP | Page weight | Why it ranks here |
|---|---|---|---|---|---|---|
| 1 | [Barr Display](https://www.barrdisplay.com) | Magento | 45 / 96 / 92 | 22.7 s | 3.4 MB | Best mix of shop plus planning, and it shows up for "store fixtures" |
| 2 | [Store Fixtures Direct](https://storefixturesdirect.com) | BigCommerce | 43 / 86 / 92 | 14.3 s | 6.8 MB | Cleanest cart plus volume quote buying flow |
| 3 | [Specialty Store Services](https://www.specialtystoreservices.com) | custom | 28 / 86 / 92 | 29.6 s | 5.6 MB | Deepest B2B features, slowest site |
| 4 | [Store Supply Warehouse](https://www.storesupply.com) | BigCommerce | 50 / 97 / 92 | 10.8 s | 1.6 MB | Best search and trust, lightest page |
| 5 | [Lozier](https://www.lozier.com) | WordPress | 63 / 93 / 85 | 8.0 s | 3.6 MB | The credibility play for a manufacturer |
| 6 | [Only Hangers](https://www.onlyhangers.com) | Shopify | 56 / 76 / 77 | 8.5 s | 4.3 MB | Shows how far simple offers go |
| 7 | [Marlite](https://marlite.com) | WordPress/Woo | 40 / 91 / 100 | 18.3 s | 6.1 MB | Specifier site, sells slatwall through quotes |
| 8 | [Acme Display](https://acmedisplay.com) | WordPress/Woo | 31 / 84 / 100 | 8.6 s | 4.1 MB | Red3's nearest Southern California style competitor |
| ref | red3display.com (current) | WordPress/Woo | not run | n/a | 337 KB of HTML alone, 59 scripts | 300 link menu, menu typos, no h1 |
| ref | RED3 demo (this repo) | static | 87 / 90+ / 66* | 2.7 s (local, no CDN) | 156 KB | *SEO is held down on purpose by `noindex` on the demo |

**Takeaway:** the whole category is slow. Every competitor fails Core Web Vitals, with LCP between 8 and 30 seconds. Speed is a real and easy pitch point for Red3.

## Site by site

### 1. Barr Display ([home](research/barr-home.png), [slatwall](research/barr-slatwall.png), [store planning](research/barr-planning.png))
- **Catalog:** top nav of Display Fixtures, Store Supplies, Apparel Displays, Shop by Collection, Gondola Builder and Locations. The home page opens with **Shop by Store Type** tiles (Smoke & Vape, Trading Cards, Fishing & Tackle), then big department tiles with real product photos.
- **Big catalog handling:** mega menus, store type entry points, named collections ("Avenue Collection"), and a **Gondola Builder** configurator.
- **Quote vs cart:** cart first, with quotes routed through store planning.
- **Pricing:** "As low as" tier prices on category cards ($245.00 down to $88.00).
- **Trust:** "Since 1946", "3,000+ products in stock", "free store planning services", showroom sales and store pickup.
- **Store planning:** its own nav item and page. It has a 5 step process (Share your vision, Design consultation, Quote & approval, Production & delivery at 6 to 8 weeks for custom, Ongoing support), a gallery of named client stores with Instagram and TikTok video walkthroughs, and a "Complete our client profile" form.
- **CTAs:** "Talk to an Expert 1-800-222-2702" in a top bar, "Shop By Store Type", and "Fill out our client profile".
- **Takeaway:** this is the template for Red3. It sells planning as a service with a process, proof from named stores, and one form, and it puts that right next to a normal shop.

### 2. Store Fixtures Direct ([home](research/sfd-home.png), [slatwall](research/sfd-slatwall.png), [product](research/sfd-product.png))
- **Catalog:** a deep sidebar category tree (Clothes Hangers, Clothing Racks with 2 Way, 4 Way, Double Bar, Round, ...), with every subcategory visible.
- **Quote vs cart:** both on the product page. There's a quantity stepper with Add to Cart, plus a **"HIGH VOLUME QUOTE REQUEST"** button beside it. Custom groove spacing goes to "Contact us for a price quote".
- **Pricing:** "As low as $84.00" on every card, with quantity tiers on the product page.
- **Trust:** BBB badge, "World-Class Customer Service" next to the phone number, and a sitewide note about market price volatility.
- **CTAs:** phone in the header, cart, and the volume quote button.
- **Takeaway:** cart for small orders and a quote for large ones, both on the same product page. B2B buyers expect both.

### 3. Specialty Store Services ([home](research/sss-home.png), [gondola category](research/sss-gondola.png))
- **Catalog:** blue mega nav (Retail Fixtures & Displays, Showcases & Counters, Apparel Supplies, Retail Supplies, Shopping Carts, **Shop by Store Type**, Clearance), with 641 links on the home page.
- **Big catalog handling:** "Keyword/Item#" search, a **Quick Order** form for buyers who know their SKUs, an items per page setting, and price ranges per configurable product.
- **B2B:** Financing Application, Tax Exemption Certificate, Request a FREE Catalog, Browse Digital Catalog, Visit Our Showroom, and S-CUBE custom fixtures.
- **Trust:** Trustpilot widget, phone 1-800-871-2768, and a chat bubble.
- **Store planning:** a downloadable "Store Planning Guide" rather than a service.
- **CTAs:** heavy promotion (an "up to 80% OFF" Black Friday banner).
- **Takeaway:** it has every B2B convenience, but it looks like a discount warehouse and is the slowest site in the set. Copy the features, not the look.

### 4. Store Supply Warehouse ([home](research/storesupply-home.png), [slatwall panels](research/storesupply-slatwall.png))
- **Catalog:** the search bar is the hero ("Search by keyword, brand or SKU"). Below it is a navy department bar (Bags, Packaging, Displays and Fixtures, Mannequins, Clothes Hangers, Jewelry Displays, Store Operations, Custom Creations), then category tiles with photos.
- **Category pages:** an SEO intro paragraph, a price filter, sort by newest, price or review, and "In stock" on every card.
- **B2B:** Tax Exemption Forms, Catalog Request, HubSpot forms, and a sign in account.
- **Trust:** named customer reviews on the home page ("Anjannette R., GA"), "serving retail for over 30 years", and a stated customer philosophy.
- **Takeaway:** search first plus real reviews with names. It has the lightest page of the group (1.6 MB) and the best accessibility score (97).

### 5. Lozier ([home](research/lozier-home.png))
- A manufacturer site, not a store. It shows "Since 1956", a 70th anniversary, leadership, sustainability, a partner network and locations.
- Products are system pages (Gondola, Shelves and Decks), and buyers go through "Lozier Fixture Partners".
- **Takeaway:** credibility through history and people. Red3 has 35+ years and should say it as plainly as Lozier says "Since 1956".

### 6. Only Hangers ([home](research/onlyhangers-home.png))
- Shopify, built on very plain offers: **"FREE SHIPPING ON ALL ORDERS"**, "No Sales Tax Outside Florida" and "Wholesale Prices". It shops by clothing type and offers a free paper catalog, custom imprinted hangers and reviews.
- **Takeaway:** one sharp shipping offer in the top bar does a lot of work. Red3 already has one ("Free freight on textured slatwall and wall panels") buried in its footer.

### 7. Marlite ([home](research/marlite-home.png))
- Aimed at architects and specifiers: wall panel systems by product line, organized by market (Education, Healthcare, Hospitality). Slatwall is a product line, sold through quotes and reps.
- **Takeaway:** it doesn't fit Red3's buyer, except to show that slatwall can be presented as a system with specs.

### 8. Acme Display ([home](research/acme-home.png), [slatwall](research/acme-slatwall.png))
- A Los Angeles distributor with 3,000+ items. Hours sit in the header (M to F 8:30 to 5:00), and slatwall can be filtered by **"Dropship Items" versus "Regular Stock Items"**. It offers catalog downloads, rentals and hanger printing, plus a named customer review.
- **Takeaway:** a stock versus dropship (lead time) filter is cheap and useful. Hours and a local showroom matter to a California buyer.

## Patterns that clearly win (used in the rebuild)
1. **Search is the main tool.** A wide header search that takes product, SKU or department, with suggestions (Store Supply, SSS, Barr).
2. **A department bar with mega menus.** Nine top departments open to subcategories, replacing Red3's 300 link single menu (Barr, SSS, Store Supply).
3. **Shop by store type.** A second way in for owners who think "I run a shoe store", not "I need slatwall" (Barr, SSS, Only Hangers).
4. **"As low as" tier pricing on cards, and a quantity tier table on product pages** (SFD, Barr).
5. **Two buying routes.** A quote list for everything, a volume quote link for large orders, and "request quote" for custom builds (SFD's volume quote button, Barr's client profile). This fits Red3 better than a pure cart because so much of what it sells is custom or leased.
6. **Availability on every card.** "In stock" versus "Made to order", and a filter for it (Store Supply, Acme).
7. **A phone number and a human in the header top bar.** "Talk to a fixture specialist" (Barr, SFD, SSS).
8. **The shipping offer in the top bar.** Red3's real free freight offer, moved up from the footer (Only Hangers, SFD).
9. **Store planning as its own nav item and page.** It has a numbered process, a project gallery and one intake form (Barr), and uses Red3's real "10 questions" and "lease your fixtures" assets.
10. **A plain trust strip.** Years in business, standard plus custom, lease or buy, US plus abroad. All of these are real Red3 claims (Lozier, Store Supply).
11. **Speed.** Every competitor fails LCP, so a fast Red3 site is a real advantage.

## Patterns I deliberately skipped
- **Discount banners and countdowns (SSS):** they make a store planner look cheap, and Red3 has no verified promotions.
- **Chat widgets:** no evidence Red3 staffs one, and they hurt speed.
- **Fake review counts:** Red3 has no verified reviews in my research. Reviews stay out until real ones exist.
- **A gondola style configurator (Barr):** strong, but it's a real build. It's a good phase 2 upsell for Davis.
