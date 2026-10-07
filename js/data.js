// Departments and subcategories are REAL, taken from the red3display.com menu (Oct 2026), typos corrected.
// Every product name, SKU, price, price tier, spec and image below is a PLACEHOLDER for the demo.
const ICON={
racks:'<path d="M6 10h36M10 10v28M38 10v28M6 38h12M30 38h12M16 10v14M22 10v14M28 10v14" stroke="currentColor" stroke-width="2.5" fill="none"/>',
showcase:'<rect x="6" y="8" width="36" height="32" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M6 22h36M14 8l-4 14" stroke="currentColor" stroke-width="2" fill="none"/>',
acrylic:'<path d="M10 36l8-24h12l8 24zM14 26h20" stroke="currentColor" stroke-width="2.5" fill="none"/>',
slat:'<path d="M6 10h36M6 16h36M6 22h36M6 28h36M6 34h36M18 22v10M30 16v10" stroke="currentColor" stroke-width="2" fill="none"/>',
light:'<path d="M8 10h32M16 10v8M32 10v8M12 18h8l-4 8zM28 18h8l-4 8z" stroke="currentColor" stroke-width="2.5" fill="none"/>',
manq:'<circle cx="24" cy="9" r="5" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M16 18h16l-3 16h-10zM24 34v8M16 42h16" stroke="currentColor" stroke-width="2.5" fill="none"/>',
counter:'<path d="M4 18h40v20H4zM4 24h40M30 18v20" stroke="currentColor" stroke-width="2.5" fill="none"/>',
supply:'<path d="M24 8a4 4 0 1 1 4 4c-2 0-4 1-4 4L6 30h36L24 16" stroke="currentColor" stroke-width="2.5" fill="none"/>',
hw:'<path d="M14 6v36M34 6v36M14 14h20M14 24h20M14 34h20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/>'};
const CATS=[
{id:'floor',name:'Floor Fixtures & Clothing Racks',short:'Clothing Racks',icon:'racks',subs:['2-Way Racks','4-Way Racks','Combo Racks','Rounders','Raw Steel Racks','Custom Racks']},
{id:'showcases',name:'Showcases',short:'Showcases',icon:'showcase',subs:['Economy Showcases','Standard Showcases','Classic Wood Showcases','Euro Tower Showcases','Custom Showcases']},
{id:'counters',name:'POS Counters',short:'POS Counters',icon:'counter',subs:['Wrap Counters','Register Stands','KD Counters','Counter Kiosks','Reception Counters']},
{id:'wall',name:'Slatwall & Wall Fixtures',short:'Slatwall',icon:'slat',subs:['Slatwall Panels','Slatwall Hooks','Slatwall Shelves','Faceouts & Hangbars']},
{id:'hardware',name:'Display Hardware',short:'Hardware',icon:'hw',subs:['Universal Slotting','Heavy Duty Slotting','Puck Hardware','Rectangular Tubing','Round Tubing']},
{id:'acrylic',name:'Acrylic Displays',short:'Acrylic',icon:'acrylic',subs:['Risers & Pedestals','Food & Bulk Dispensers','Cosmetics','Eyewear Displays','Sign Displays']},
{id:'lighting',name:'Ceilings & Lighting',short:'Lighting',icon:'light',subs:['Track Heads','LED Bulbs','Decorative Pendants','Dressing Room Lights']},
{id:'mannequins',name:'Mannequins & Forms',short:'Mannequins',icon:'manq',subs:['Sports Mannequins','Fiberglass Forms','Head Forms','Body Parts','Kids Forms']},
{id:'supplies',name:'Store Supplies',short:'Supplies',icon:'supply',subs:['Hangers','Sizers','Tagging Guns & Tags','Price Tags']}];
const STORE_TYPES=[['Apparel boutiques','floor'],['Shoe stores','wall'],['Jewelry stores','showcases'],['Eyewear','acrylic'],['Cosmetics','acrylic'],['Sporting goods','mannequins']]; // store types Red3's menu calls out
const MAT=['Steel','Chrome','Wood','Acrylic','Glass'];
const R=[
['floor','4-Way Racks','Standard 4-Way Rack, Rectangular Arms','Chrome',189],['floor','Raw Steel Racks','Raw Steel Rolling Rack','Steel',249],['floor','Rounders','Bauhaus Satin Rounder','Chrome',159],['floor','2-Way Racks','2-Way Rack, Square Tubing Arms','Chrome',139],['floor','Combo Racks','8 Shelf Combo Rack','Steel',329],['floor','Custom Racks','Custom Branded Garment Rack','Steel',0],
['showcases','Standard Showcases','Full Vision Showcase, 70 in','Glass',1290],['showcases','Classic Wood Showcases','Classic Wood Jewelry Case','Wood',1890],['showcases','Euro Tower Showcases','Euro Tower Showcase','Glass',1450],['showcases','Economy Showcases','Economy KD Showcase','Glass',690],['showcases','Custom Showcases','Custom Lit Showcase','Glass',0],
['counters','Wrap Counters','Wrap Counter with Corner Filler','Wood',2150],['counters','Register Stands','Standard Register Stand','Wood',980],['counters','Counter Kiosks','Counter Kiosk','Wood',1760],['counters','KD Counters','KD Counter, 48 in','Wood',640],['counters','Reception Counters','Reception Counter','Wood',2390],
['wall','Slatwall Panels','Textured Slatwall Panel 4x8','Wood',129],['wall','Slatwall Panels','Slatwall Panel with Aluminum Inserts','Wood',189],['wall','Slatwall Hooks','Slatwall Hook Pack (25)','Chrome',34],['wall','Slatwall Shelves','Acrylic Slatwall Shelf','Acrylic',21],['wall','Faceouts & Hangbars','Slatwall Hangbar, 24 in','Chrome',14],
['hardware','Universal Slotting','Universal Slotted Standard, 84 in','Steel',18],['hardware','Heavy Duty Slotting','HD Slotted Standard, 96 in','Steel',26],['hardware','Puck Hardware','Puck Faceout, Round Tubing','Chrome',22],['hardware','Rectangular Tubing','Rectangular Tubing Faceout','Chrome',17],['hardware','Round Tubing','Round Tubing Bracket Pair','Chrome',12],
['acrylic','Risers & Pedestals','Acrylic Riser Set (3)','Acrylic',39],['acrylic','Food & Bulk Dispensers','Bulk Food Dispenser','Acrylic',119],['acrylic','Eyewear Displays','Countertop Eyewear Display','Acrylic',89],['acrylic','Cosmetics','Tiered Cosmetics Display','Acrylic',74],['acrylic','Sign Displays','Countertop Sign Holder 8.5x11','Acrylic',9],
['lighting','Track Heads','LED Track Head, Line Voltage','Steel',79],['lighting','Decorative Pendants','Decorative Pendant','Glass',145],['lighting','LED Bulbs','LED PAR Bulb (6 pack)','Glass',54],['lighting','Dressing Room Lights','Dressing Room Light Bar','Steel',96],
['mannequins','Fiberglass Forms','Fiberglass Female Form','Steel',420],['mannequins','Sports Mannequins','Basketball Sports Mannequin','Steel',560],['mannequins','Head Forms','Head Form, Matte','Acrylic',65],['mannequins','Kids Forms','Kids Jersey Form','Steel',85],['mannequins','Body Parts','Display Hand Pair','Acrylic',38],
['supplies','Hangers','Natural Wood Hangers (100)','Wood',98],['supplies','Sizers','Size Ring Sizers, Letters (100)','Acrylic',16],['supplies','Tagging Guns & Tags','Tagging Gun Kit','Steel',29],['supplies','Price Tags','Pricing Cubes (50)','Acrylic',24]];
const P=R.map((r,i)=>({id:'p'+(i+1),cat:r[0],sub:r[1],name:r[2],mat:r[3],price:r[4],sku:'R3-'+String(1000+i*7),stock:r[4]===0?'Made to order':(i%3?'In stock, ships in 3 to 5 days':'Made to order, 2 to 3 weeks')}));
const tiers=p=>p.price?[[1,p.price],[10,Math.round(p.price*.92*100)/100],[25,Math.round(p.price*.85*100)/100]]:[];
const cat=id=>CATS.find(c=>c.id===id);
const svg=k=>`<svg viewBox="0 0 48 48" aria-hidden="true">${ICON[k]}</svg>`;
const thumb=(k,big)=>`<div class="ph-img${big?" ph-img--big":""}">${svg(k)}<span class="ph-label">Placeholder image</span></div>`;
