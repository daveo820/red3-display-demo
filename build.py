# Static page builder: shared head, nav and footer. Run: python3 build.py
import json
BASE='https://daveo820.github.io/red3-display-demo/'
ORG={"@context":"https://schema.org","@type":"Store","name":"Red3 Display","url":"https://red3display.com","telephone":"+1-858-900-7318",
 "description":"Retail planning, store fixtures and custom displays for stores and restaurants in the US and abroad.","areaServed":"US"}
HEAD='''<!doctype html><html lang="en" class="no-js"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{t}</title><meta name="description" content="{d}"><link rel="canonical" href="{url}">
<meta property="og:type" content="website"><meta property="og:title" content="{t}"><meta property="og:description" content="{d}"><meta property="og:url" content="{url}"><meta property="og:image" content="{base}og.png"><meta name="twitter:card" content="summary_large_image">
<meta name="robots" content="noindex"><!-- concept demo: keep out of search so it never competes with red3display.com -->
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap">
<link rel="stylesheet" href="css/design-system.css"><link rel="stylesheet" href="css/components.css"><link rel="stylesheet" href="css/pages.css">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23c8102e'/%3E%3C/svg%3E">
<script>document.documentElement.classList.remove('no-js')</script>
<script type="application/ld+json">{ld}</script></head><body class="{cls}">
<a class="skip" href="#main">Skip to content</a>
<div class="demo-bar">Concept by <a href="https://luminarch.pro">LuminArch</a>. Not the official Red3 Display site. Product names, prices and images are placeholders.</div>
<header class="top"><div class="wrap nav"><a class="mark" href="index.html" aria-label="Red3 Display home">RED<b>3</b><small>DISPLAY</small></a>
<button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu">{nav}</ul><a class="btn" href="tel:8589007318">(858) 900-7318</a></div></header><main id="main">'''
FOOT='''</main><footer><div class="wrap"><p class="kicker" style="color:#ff8a9a">Close of business</p>
<p class="foot-close">Every store starts as an empty floor. Tell us about yours.</p>
<a class="btn" href="contact.html">Start a project <span class="arr" aria-hidden="true">&rarr;</span></a>
<div class="foot-mark" aria-hidden="true">RED<b>3</b></div>
<div class="foot-row"><span>Red3 Display &middot; Southern California &middot; <a href="tel:8589007318">(858) 900-7318</a></span><span>Concept by <a href="https://luminarch.pro">LuminArch</a></span></div></div></footer>
<script src="js/data.js"></script><script src="js/main.js"></script></body></html>'''
NAV=[('index.html','Home'),('catalog.html','Shop fixtures'),('product.html?id=p6','Featured'),('contact.html','Plan a store')]
def crumbs(*names): return {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":i+1,"name":n,"item":BASE+u} for i,(n,u) in enumerate(names)]}
def page(fn,t,d,body,ld=None,cls=''):
    nav=''.join(f'<li><a href="{h}"'+(' aria-current="page"' if h.split('?')[0]==fn else '')+f'>{n}</a></li>' for h,n in NAV)
    url=BASE+('' if fn=='index.html' else fn)
    open(fn,'w').write(HEAD.format(t=t,d=d,url=url,base=BASE,nav=nav,cls=cls,ld=json.dumps(ld or ORG))+body+FOOT)
page('index.html','Retail Fixtures and Store Design | Red3 Display, Southern California',
 'Store fixtures, showcases, POS counters, slatwall and lighting from Red3 Display, plus store planning for 35+ years. Call (858) 900-7318 for a quote.','''
<section class="hero"><div class="wrap hero-grid"><div class="rv">
<p class="kicker">Retail planning &middot; Store fixtures &middot; Custom displays</p>
<h1>Fixtures with <em>35&nbsp;years</em> of retail behind them.</h1>
<p class="lede">Red3 Display designs stores and restaurants, then supplies what fills them: racks, showcases, counters, slatwall, lighting and custom pieces. Standard or built to spec.</p>
<div class="cta"><a class="btn" href="catalog.html">Shop fixtures <span class="arr" aria-hidden="true">&rarr;</span></a><a class="btn btn--line" href="contact.html">Plan my store</a></div></div>
<aside class="sheet rv" aria-label="Departments"><p class="kicker">Spec sheet / departments</p><ol id="sheet"></ol></aside></div>
<div class="wrap"><div class="facts rv"><div><strong>35+</strong><span>years designing stores</span></div><div><strong>US + abroad</strong><span>large and small clients</span></div><div><strong>Lease</strong><span>or buy your fixtures</span></div></div></div></section>
<section class="index"><div class="wrap"><header><div class="rail"><div><p class="idx">01 / Catalog</p><h2>Eight departments. One click each.</h2></div></div>
<p style="max-width:44ch;color:var(--concrete);margin:0">The current site hides these behind a 300 link menu. Here they are the front door.</p></header><ul id="index"></ul></div></section>
<section class="quote"><div class="wrap rv"><blockquote>&ldquo;We design fun, interesting and compelling stores and restaurants for customers in the US and abroad.&rdquo;</blockquote><cite>Red3 Display, from red3display.com, lightly trimmed</cite></div></section>
<section class="process"><div class="wrap process-grid"><div class="stick"><div class="rail"><div><p class="idx" style="color:#9aa0a8">02 / Store planning</p><h2>From empty floor to opening day.</h2>
<p style="margin-top:16px">Planning is what sets Red3 apart from a catalog. It deserves more than a footer link.</p><a class="btn" href="contact.html">Answer the 10 questions</a></div></div></div>
<div><div class="step rv"><span class="n">1</span><div><h3>Plan</h3><p>Answer Red3&rsquo;s 10 question intake. Traffic flow, product mix and budget shape the layout.</p></div></div>
<div class="step rv"><span class="n">2</span><div><h3>Render</h3><p>See the space with fixtures, finishes and lighting before anything ships.</p></div></div>
<div class="step rv"><span class="n">3</span><div><h3>Build or lease</h3><p>Standard fixtures from stock, custom pieces built to spec, or lease the lot.</p></div></div>
<div class="step rv"><span class="n">4</span><div><h3>Open</h3><p>Materials in wood, HPL, raw steel, acrylic and glass, so the store looks like yours.</p></div></div></div></div></section>
<section class="shelf"><div class="wrap"><header class="rail"><div><p class="idx">03 / On the floor</p><h2>Popular fixtures</h2><p style="color:var(--concrete)">Sample products. Names and prices are placeholders.</p></div></header></div><div class="shelf-track" id="featured" tabindex="0" aria-label="Popular fixtures, scrolls sideways"></div></section>''',cls='home')
page('catalog.html','Shop Store Fixtures, Showcases and Racks | Red3 Display',
 'Browse Red3 Display store fixtures by department, material and lead time. Racks, showcases, counters, slatwall and more. Request a quote today.','''
<div class="wrap"><div class="cat-head"><div><p class="crumbs"><a href="index.html">Home</a> / Shop fixtures</p><h1 style="font-size:clamp(2.8rem,6vw,5rem);margin-top:12px">Shop fixtures</h1></div><div class="big-count" id="bigcount" aria-hidden="true">00</div></div>
<div class="layout"><aside class="filters" id="filters" aria-label="Filters"><fieldset><legend>Department</legend><div id="f-cat"></div></fieldset><fieldset><legend>Material</legend><div id="f-mat"></div></fieldset>
<fieldset><legend>Lead time</legend><label class="check"><input type="checkbox" id="f-fast"> Ships in 3 to 5 days</label></fieldset></aside>
<div><div class="toolbar"><div class="field"><label for="q">Search</label><input type="search" id="q" placeholder="Racks, showcases, slatwall"></div>
<div class="field"><label for="sort">Sort</label><select id="sort"><option value="rel">Featured</option><option value="lo">Price, low to high</option><option value="hi">Price, high to low</option><option value="az">Name, A to Z</option></select></div>
<button class="btn btn--line ftoggle" id="ftoggle" aria-controls="filters" aria-expanded="false">Filters</button></div>
<div class="chips" id="chips"></div><p class="count" id="count" aria-live="polite"></p><div class="tiles" id="results"></div></div></div></div>''',
 ld=crumbs(('Home',''),('Shop fixtures','catalog.html')))
page('product.html','Fixture Detail | Red3 Display','Fixture specs, finishes and lead time from Red3 Display. Volume pricing, custom sizes and leasing available. Request a quote.','<div class="wrap" id="pdp"></div>',
 ld=crumbs(('Home',''),('Shop fixtures','catalog.html'),('Product','product.html')))
page('contact.html','Store Planning and Fixture Quotes | Contact Red3 Display','Get a fixture quote or start store planning with Red3 Display. Standard, custom and leased fixtures. Call (858) 900-7318 or send the form.','''
<div class="contact"><div class="dark"><p class="kicker" style="color:#ff8a9a">Plan a store</p><h1 style="font-size:clamp(2.6rem,5vw,4.4rem)">Talk to the people who build stores.</h1>
<a class="phone" href="tel:8589007318">(858) 900-7318</a><p>Quotes on standard fixtures, custom builds, full store planning, or leasing. Free freight available on textured slatwall and wall panels, per red3display.com.</p></div>
<form id="cform" novalidate><p class="crumbs"><a href="index.html">Home</a> / Plan a store</p>
<div class="two"><div class="field"><label for="n">Name</label><input id="n" autocomplete="name" required></div><div class="field"><label for="e">Email</label><input id="e" type="email" autocomplete="email" required></div></div>
<div class="two"><div class="field"><label for="b">Business</label><input id="b" autocomplete="organization"></div><div class="field"><label for="t">Project</label><select id="t"><option>Standard fixtures quote</option><option>Custom fixtures</option><option>Full store planning</option><option>Lease fixtures</option></select></div></div>
<div class="field"><label for="m">Your space</label><textarea id="m" rows="5" required placeholder="Square footage, what you sell, opening date"></textarea></div>
<div><button class="btn" type="submit">Send request <span class="arr" aria-hidden="true">&rarr;</span></button></div><p class="note" id="cmsg" role="status">Demo form. Nothing is sent.</p></form></div>''',
 ld=crumbs(('Home',''),('Plan a store','contact.html')))
page('404.html','Page Not Found | Red3 Display','This page is not on the floor. Browse Red3 Display fixtures or call (858) 900-7318.','<section class="wrap" style="padding:96px 24px"><p class="kicker">404</p><h1>Aisle not found.</h1><p style="margin-top:24px"><a class="btn" href="catalog.html">Shop fixtures</a></p></section>')
