# Generates the static pages with a shared header and footer. Output is plain HTML.
H='''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{t} | Red3 Display</title><meta name="description" content="{d}"><link rel="stylesheet" href="assets/style.css">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23c8102e'/%3E%3C/svg%3E"></head><body>
<a class="skip" href="#main">Skip to content</a>
<div class="demo-bar">Concept demo by <a href="https://luminarch.pro" style="color:#fff">LuminArch</a>. Not the official Red3 Display site. Product names, prices and images are placeholders.</div>
<header><div class="wrap nav"><a class="logo" href="index.html" aria-label="Red3 Display home">RED<b>3</b></a>
<button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu">{nav}</ul><a class="btn" href="tel:8589007318">(858) 900-7318</a></div></header><main id="main">'''
F='''</main><footer><div class="wrap"><p><strong style="color:#fff">Red3 Display</strong>. Retail planning, store fixtures and custom displays for stores and restaurants in the US and abroad for over 35 years. Southern California.</p>
<p>Call <a href="tel:8589007318">(858) 900-7318</a> &middot; <a href="contact.html">Start a project</a></p><p>Demo built by <a href="https://luminarch.pro">LuminArch</a>, hand coded websites.</p></div></footer>
<script src="assets/data.js"></script><script src="assets/app.js"></script></body></html>'''
L=[('index.html','Home'),('catalog.html','Shop Fixtures'),('product.html?id=p6','Featured Product'),('contact.html','Contact')]
def page(fn,t,d,body):
    nav=''.join(f'<li><a href="{h}"{" aria-current=\"page\"" if h.split("?")[0]==fn else ""}>{n}</a></li>' for h,n in L)
    open(fn,'w').write(H.format(t=t,d=d,nav=nav)+body+F)
page('index.html','Custom Retail Fixtures and Store Design','Red3 Display designs and supplies retail fixtures, showcases, counters, slatwall and lighting.','''
<section class="hero"><div class="wrap"><span class="tag" style="color:#ff6b7f">San Diego retail fixtures</span>
<h1>Stores that sell. Fixtures that last.</h1><p>Red3 Display plans stores and restaurants and supplies the fixtures, showcases, counters and lighting to build them. Standard or fully custom.</p>
<div class="cta"><a class="btn" href="catalog.html">Shop fixtures</a><a class="btn ghost" href="contact.html">Plan my store</a></div>
<div class="stats"><div><strong>35+</strong><span>years designing stores</span></div><div><strong>8</strong><span>core fixture families</span></div><div><strong>US + abroad</strong><span>clients served</span></div></div></div></section>
<section><div class="wrap"><h2>Shop by category</h2><p class="lead">Eight clear doors instead of a 300 link menu.</p><div class="grid" id="cats"></div></div></section>
<section class="band"><div class="wrap"><h2>From floor plan to grand opening</h2><p class="lead">The planning service Red3 already offers, made easy to find.</p><div class="steps">
<div><h3>1. Plan</h3><p>Answer 10 questions and we sketch a layout around your traffic flow and product mix.</p></div>
<div><h3>2. Design</h3><p>Renderings of your space with fixtures, finishes and lighting before anything is built.</p></div>
<div><h3>3. Build or lease</h3><p>Standard fixtures ship fast. Custom pieces are made to spec. Leasing is available.</p></div></div></div></section>
<section><div class="wrap"><h2>Popular right now</h2><p class="lead">Sample products, placeholder pricing.</p><div class="grid" id="featured"></div></div></section>''')
page('catalog.html','Shop Retail Fixtures','Browse Red3 Display fixtures by category and material.','''
<div class="wrap"><p class="crumbs"><a href="index.html">Home</a> / Shop fixtures</p><h1 style="margin:.5rem 0">Shop fixtures</h1>
<div class="layout"><aside class="filters" id="filters" aria-label="Filters"><fieldset><legend>Category</legend><div id="f-cat"></div></fieldset><fieldset><legend>Material</legend><div id="f-mat"></div></fieldset>
<fieldset><legend>Lead time</legend><label><input type="checkbox" id="f-fast"> Ships in 3 to 5 days</label></fieldset></aside>
<div><div class="toolbar"><label class="skip" for="q">Search</label><input type="search" id="q" placeholder="Search racks, showcases, slatwall..."><label class="skip" for="sort">Sort</label><select id="sort"><option value="rel">Featured</option><option value="lo">Price low to high</option><option value="hi">Price high to low</option><option value="az">Name A to Z</option></select>
<button class="btn ghost menu-btn" id="ftoggle" aria-controls="filters" aria-expanded="false" style="margin:0">Filters</button></div>
<p class="count" id="count" aria-live="polite"></p><div class="grid" id="results"></div></div></div></div>''')
page('product.html','Product','Red3 Display product detail.','<div class="wrap" id="pdp"></div>')
page('contact.html','Contact and Store Planning','Talk to Red3 Display about fixtures, custom displays or store planning.','''
<div class="wrap" style="padding:2.5rem 1.25rem 4rem"><h1>Start your project</h1><p class="lead">Quote requests, custom fixtures, or full store planning. Call <a href="tel:8589007318">(858) 900-7318</a> or send the form.</p>
<form class="form" id="cform" novalidate><div class="two"><div><label for="n">Name</label><input id="n" name="n" autocomplete="name" required></div><div><label for="e">Email</label><input id="e" type="email" name="e" autocomplete="email" required></div></div>
<div class="two"><div><label for="b">Business name</label><input id="b" name="b" autocomplete="organization"></div><div><label for="t">Project type</label><select id="t"><option>Standard fixtures quote</option><option>Custom fixtures</option><option>Full store planning</option><option>Lease fixtures</option></select></div></div>
<div><label for="m">Tell us about your space</label><textarea id="m" rows="5" required></textarea></div><button class="btn" type="submit">Send request</button>
<p class="note" id="cmsg" role="status">Demo form. Nothing is sent.</p></form></div>''')
