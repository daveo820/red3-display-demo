(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const mb=$('.menu-btn');mb&&mb.addEventListener('click',()=>mb.setAttribute('aria-expanded',$('#menu').classList.toggle('open')));
const top=$('.top');addEventListener('scroll',()=>top.classList.toggle('scrolled',scrollY>8),{passive:true});
const money=n=>'$'+n.toLocaleString();
const tile=p=>`<a class="tile" href="product.html?id=${p.id}">${thumb(cat(p.cat).icon)}<div class="meta"><span class="row"><span>${p.sku}</span><span>${p.mat}</span></span><h3>${p.name}</h3><span class="row"><span class="price">${money(p.price)}</span><span>placeholder</span></span></div></a>`;
const pad=n=>String(n).padStart(2,'0');
if($('#sheet'))$('#sheet').innerHTML=CATS.map((c,i)=>`<li><a href="catalog.html?cat=${c.id}">${c.name}</a><span>${pad(i+1)}</span></li>`).join('');
if($('#index'))$('#index').innerHTML=CATS.map((c,i)=>`<li class="rv"><a href="catalog.html?cat=${c.id}"><span class="idx">${pad(i+1)}</span><h3>${c.name}</h3><p>${c.blurb}</p><span class="go" aria-hidden="true">&rarr;</span></a></li>`).join('');
if($('#featured'))$('#featured').innerHTML=['p6','p1','p17','p21','p10','p14'].map(i=>tile(P.find(p=>p.id==i))).join('');
if($('#results')){const pre=new URLSearchParams(location.search).get('cat');
 $('#f-cat').innerHTML=CATS.map(c=>`<label class="check"><input type="checkbox" value="${c.id}"${c.id==pre?' checked':''}> ${c.name}</label>`).join('');
 $('#f-mat').innerHTML=MAT.map(m=>`<label class="check"><input type="checkbox" value="${m}"> ${m}</label>`).join('');
 const vals=s=>$$(s+' input:checked').map(i=>i.value);
 const run=()=>{const q=$('#q').value.trim().toLowerCase(),c=vals('#f-cat'),m=vals('#f-mat'),f=$('#f-fast').checked;
  let r=P.filter(p=>(!c.length||c.includes(p.cat))&&(!m.length||m.includes(p.mat))&&(!f||p.lead.startsWith('Ships'))&&(p.name+' '+cat(p.cat).name+' '+p.sku).toLowerCase().includes(q));
  const s=$('#sort').value;if(s=='lo')r.sort((a,b)=>a.price-b.price);if(s=='hi')r.sort((a,b)=>b.price-a.price);if(s=='az')r.sort((a,b)=>a.name.localeCompare(b.name));
  $('#bigcount').textContent=pad(r.length);$('#count').textContent=`${r.length} of ${P.length} fixtures`;
  $('#chips').innerHTML=[...c.map(x=>[x,cat(x).name]),...m.map(x=>[x,x])].map(([v,l])=>`<button data-v="${v}" aria-label="Remove filter ${l}">${l} &times;</button>`).join('');
  $('#results').innerHTML=r.map(tile).join('')||'<p>No matches. Clear a filter or call (858) 900-7318.</p>'};
 $('#chips').addEventListener('click',e=>{const v=e.target.dataset.v;if(!v)return;$$('#filters input').forEach(i=>{if(i.value==v)i.checked=false});run()});
 $$('#filters input,#q,#sort').forEach(e=>e.addEventListener('input',run));run();
 $('#ftoggle').addEventListener('click',e=>e.currentTarget.setAttribute('aria-expanded',$('#filters').classList.toggle('open')));}
if($('#pdp')){const p=P.find(x=>x.id==new URLSearchParams(location.search).get('id'))||P[5],c=cat(p.cat);
 document.title=`${p.name} | Red3 Display`;
 $('#pdp').innerHTML=`<p class="crumbs" style="padding-top:32px"><a href="index.html">Home</a> / <a href="catalog.html?cat=${c.id}">${c.name}</a> / ${p.name}</p>
 <div class="pdp"><div class="pdp-media rv">${thumb(c.icon,1)}<span class="sku-tag">${p.sku} &middot; placeholder</span></div><div>
 <p class="kicker">${c.name}</p><h1>${p.name}</h1><p class="price">${money(p.price)} <span class="mono" style="font-size:.8rem;color:var(--concrete)">placeholder price</span></p>
 <p style="margin-top:16px">${p.lead}. Volume pricing and custom sizes on request. Ask about leasing.</p>
 <p class="idx" style="margin-top:24px">Finish</p><div class="opts" role="group" aria-label="Finish">${['Standard','Black','White','Custom'].map((o,i)=>`<button type="button" aria-pressed="${!i}">${o}</button>`).join('')}</div>
 <div style="display:flex;gap:16px;flex-wrap:wrap"><a class="btn" href="contact.html">Request a quote <span class="arr" aria-hidden="true">&rarr;</span></a><a class="btn btn--line" href="tel:8589007318">Call</a></div>
 <table class="spec"><caption class="sr">Specifications (placeholder)</caption><tr><th scope="row">Material</th><td>${p.mat}</td></tr><tr><th scope="row">Assembly</th><td>Knock down (placeholder)</td></tr><tr><th scope="row">Lead time</th><td>${p.lead} (placeholder)</td></tr><tr><th scope="row">SKU</th><td class="mono">${p.sku}</td></tr></table></div></div>
 <section style="padding-bottom:96px"><div class="rail"><div><p class="idx">More in this department</p><h2>${c.name}</h2></div></div><div class="tiles" style="margin-top:32px">${P.filter(x=>x.cat==p.cat&&x!=p).slice(0,4).map(tile).join('')}</div></section>`;
 const ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Product","name":p.name,"sku":p.sku,"brand":"Red3 Display","material":p.mat});document.head.append(ld);
 $$('.opts button').forEach(b=>b.onclick=()=>$$('.opts button').forEach(x=>x.setAttribute('aria-pressed',x==b)));}
const f=$('#cform');f&&f.addEventListener('submit',e=>{e.preventDefault();$('#cmsg').textContent=f.checkValidity()?'Thanks. On the live site this reaches the Red3 team. (Demo: nothing sent.)':'Add your name, a valid email and a few words about your space.'});
const els=$$('.rv');if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(e=>e.classList.add('in'));return}
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){const sib=[...en.target.parentNode.children].filter(x=>x.classList.contains('rv'));en.target.style.transitionDelay=Math.min(sib.indexOf(en.target),5)*80+'ms';en.target.classList.add('in');io.unobserve(en.target)}}),{rootMargin:'0px 0px -80px 0px'});
els.forEach(e=>io.observe(e));})();
