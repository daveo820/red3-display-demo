// Categories are real Red3 Display categories (red3display.com). Product names, SKUs, specs and prices are PLACEHOLDERS for the demo.
const ICON={
racks:'<path d="M6 10h36M10 10v28M38 10v28M6 38h12M30 38h12M16 10v14M22 10v14M28 10v14" stroke="currentColor" stroke-width="2.5" fill="none"/>',
showcase:'<rect x="6" y="8" width="36" height="32" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M6 22h36M14 8l-4 14" stroke="currentColor" stroke-width="2" fill="none"/>',
acrylic:'<path d="M10 36l8-24h12l8 24zM14 26h20" stroke="currentColor" stroke-width="2.5" fill="none"/>',
slat:'<path d="M6 10h36M6 16h36M6 22h36M6 28h36M6 34h36M18 22v10M30 16v10" stroke="currentColor" stroke-width="2" fill="none"/>',
light:'<path d="M8 10h32M16 10v8M32 10v8M12 18h8l-4 8zM28 18h8l-4 8z" stroke="currentColor" stroke-width="2.5" fill="none"/>',
manq:'<circle cx="24" cy="9" r="5" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M16 18h16l-3 16h-10zM24 34v8M16 42h16" stroke="currentColor" stroke-width="2.5" fill="none"/>',
counter:'<path d="M4 18h40v20H4zM4 24h40M30 18v20" stroke="currentColor" stroke-width="2.5" fill="none"/>',
supply:'<path d="M24 8a4 4 0 1 1 4 4c-2 0-4 1-4 4L6 30h36L24 16" stroke="currentColor" stroke-width="2.5" fill="none"/>'};
const CATS=[
{id:'floor',name:'Floor Fixtures & Clothing Racks',icon:'racks',blurb:'2-way, 4-way, rounders, raw steel and custom racks.'},
{id:'showcases',name:'Showcases',icon:'showcase',blurb:'Economy, standard, classic wood and Euro tower cases.'},
{id:'counters',name:'POS Counters',icon:'counter',blurb:'Wrap counters, register stands, kiosks and KD counters.'},
{id:'acrylic',name:'Acrylic Displays',icon:'acrylic',blurb:'Risers, dispensers, cosmetics, eyewear and signage.'},
{id:'wall',name:'Slatwall & Wall Fixtures',icon:'slat',blurb:'Slatwall, slotted standards, puck hardware and faceouts.'},
{id:'lighting',name:'Ceilings & Lighting',icon:'light',blurb:'Track heads, LED bulbs, pendants and dressing room lights.'},
{id:'mannequins',name:'Mannequins & Forms',icon:'manq',blurb:'Sports, fiberglass, head forms and body parts.'},
{id:'supplies',name:'Store Supplies',icon:'supply',blurb:'Hangers, sizers, tagging guns and price tags.'}];
const MAT=['Steel','Wood','Acrylic','Glass','Chrome'];
const P=[
['floor','Standard 4-Way Rack, Rectangular Arms','Chrome',189],['floor','Raw Steel Rolling Rack','Steel',249],['floor','Bauhaus Satin Rounder','Chrome',159],['floor','2-Way Rack, Square Tubing Arms','Chrome',139],['floor','8 Shelf Combo Rack','Steel',329],
['showcases','Full Vision Showcase, 70 in','Glass',1290],['showcases','Classic Wood Jewelry Case','Wood',1890],['showcases','Euro Tower Showcase','Glass',1450],['showcases','Economy KD Showcase','Glass',690],
['counters','Wrap Counter with Corner Filler','Wood',2150],['counters','Standard Register Stand','Wood',980],['counters','Reception Counter Kiosk','Wood',1760],
['acrylic','Acrylic Shoe Riser Set','Acrylic',39],['acrylic','Bulk Food Dispenser','Acrylic',119],['acrylic','Countertop Eyewear Display','Acrylic',89],['acrylic','Tiered Cosmetics Display','Acrylic',74],
['wall','Textured Slatwall Panel 4x8','Wood',129],['wall','Universal Slotted Standard','Steel',18],['wall','Puck Faceout, Round Tubing','Chrome',22],['wall','Slatwall Hook Pack (25)','Chrome',34],
['lighting','LED Track Head, Line Voltage','Steel',79],['lighting','Decorative Pendant','Glass',145],['lighting','LED PAR Bulb (6 pack)','Glass',54],
['mannequins','Fiberglass Female Form','Steel',420],['mannequins','Basketball Sports Mannequin','Steel',560],['mannequins','Head Form, Matte','Acrylic',65],
['supplies','Natural Wood Hangers (100)','Wood',98],['supplies','Size Ring Sizers, Letters','Acrylic',16],['supplies','Tagging Gun Kit','Steel',29]
].map((r,i)=>({id:'p'+(i+1),cat:r[0],name:r[1],mat:r[2],price:r[3],sku:'R3-'+(1000+i*7),lead:i%3?'Ships in 3 to 5 days':'Made to order'}));
const cat=id=>CATS.find(c=>c.id===id);
const svg=k=>`<svg viewBox="0 0 48 48" aria-hidden="true">${ICON[k]}</svg>`;
const thumb=k=>`<div class="thumb">${svg(k)}<span class="ph">Placeholder image</span></div>`;
