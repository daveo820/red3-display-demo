# Design DNA: Red3 Display (concept)
Tone: rugged and technical, a spec sheet register for a fixture supplier.
Hero archetype: Asymmetric. An oversized condensed headline runs left and overlaps a dark steel "spec sheet" panel listing the 8 departments. Chosen because Red3 is a catalog business, so the departments are the hero. Prior demos were type-led (Eagle Point) or had photo/video heroes.
Color story:
  - Primary: #C8102E Red3 red (CTAs, signature rail, numerals). TODO-VERIFY against the logo file
  - Deep neutral: #17171A ink
  - Mid neutral: #3B4048 steel (dark panels), #6B6660 concrete (secondary text)
  - Surface: #F2EFEA gallery floor, #FBFAF7 page
  - Signal: #2F7D4F
Type pairing:
  - Display: Barlow Condensed 600/700, uppercase
  - Body: IBM Plex Sans 400/500/600
  - UI/data: IBM Plex Mono 400/500 (kickers, SKUs, indexes)
Motion personality: Architectural. Clip-path mask reveals (inset bottom to 0) with a 20px rise, 700ms, cubic-bezier(.2,.8,.2,1), 80ms sibling stagger capped at 5. Hovers 200 to 250ms. Nav underline wipes. Fully static under prefers-reduced-motion.
Signature element: A red slotted standard rail, the dashed vertical bar beside section headings that echoes the slotted wall standards Red3 sells. Appears on home sections 01, 02 and 03, on the product "More in this department" block, and in the numbered index system (01 to 08).
Photographic treatment: None yet. Placeholders are warm gallery gradients with line icons, all labeled "Placeholder image". Production plan: real Red3 store photos with a neutral grade, wide environmental crops for galleries and tight crops on a seamless backdrop for products.
Layout violations: Home: the h1 bleeds into the spec sheet panel, and the quote block is indented 16% off grid. Catalog: an oversized red live result count breaks the header. Product: the SKU tag hangs off the image edge. Contact: a full height split with an oversized phone number.
Component customizations: notched corner buttons, square spec card tiles with mono SKU rows, underline-only form fields with red focus, removable filter chips, red focus ring, sticky nav that gains a shadow on scroll.
Footer: closing line plus an oversized RED3 wordmark bleeding off the bottom.
Unique tell: The slotted standard rail. The site's ornament is a product Red3 sells.
Cross-prospect check: compared against eagle-point (type-led, Playfair/Cormorant, navy/gilt) and henrys-muffler (Teko, orange/red). No overlap on archetype, palette or pairing.
