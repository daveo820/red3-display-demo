(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const money=n=>'$'+n.toLocaleString(undefined,{minimumFractionDigits:n%1?2:0});
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
/* header shadow */
const top=$('.top');addEventListener('scroll',()=>top.classList.toggle('scrolled',scrollY>8),{passive:true});
/* mega menus: click or hover, Esc closes */
const dds=$$('.dept .dd');const closeAll=()=>dds.forEach(d=>{d.querySelector('button').setAttribute('aria-expanded','false');d.querySelector('.mega').hidden=true});
dds.forEach(d=>{const b=d.querySelector('button'),m=d.querySelector('.mega');let t;
 const open=()=>{closeAll();b.setAttribute('aria-expanded','true');m.hidden=false};
 b.addEventListener('click',()=>b.getAttribute('aria-expanded')=='true'?closeAll():open());
 if(matchMedia('(hover:hover)').matches){d.addEventListener('mouseenter',()=>{t=setTimeout(open,120)});d.addEventListener('mouseleave',()=>{clearTimeout(t);closeAll()})}});
addEventListener('keydown',e=>{if(e.key=='Escape'){closeAll();closeDrawer()}});
document.addEventListener('click',e=>{if(!e.target.closest('.dd'))closeAll()});
/* quote list (localStorage) */
const KEY='r3quote';const Q=()=>JSON.parse(localStorage.getItem(KEY)||'[]');const saveQ=q=>{localStorage.setItem(KEY,JSON.stringify(q));renderQ()};
const addQ=(id,n)=>{const q=Q(),f=q.find(x=>x.id==id);f?f.qty+=n:q.push({id,qty:n});saveQ(q);const p=P.find(x=>x.id==id);toast(`Added ${n} x ${p.name} to your quote list`)};
const qRow=(x,cls)=>{const p=P.find(y=>y.id==x.id);return p?`<div class="it ${cls||''}"><div><a href="product.html?id=${p.id}">${esc(p.name)}</a><br><small class="mono" style="color:var(--concrete)">${p.sku}</small></div><label class="sr" for="qq-${p.id}${cls}">Quantity</label><input id="qq-${p.id}${cls}" type="number" min="1" value="${x.qty}" data-id="${p.id}"><button aria-label="Remove ${esc(p.name)}" data-rm="${p.id}">&times;</button></div>`:''};
function renderQ(){const q=Q();$('#qcount').textContent=q.reduce((a,b)=>a+b.qty,0);
 $('#ditems').innerHTML=q.length?q.map(x=>qRow(x,'d')).join(''):'<p style="color:var(--concrete);padding:16px 0">Your quote list is empty. Add products from any product page.</p>';
 const ql=$('#qlist');if(ql)ql.innerHTML=q.length?q.map(x=>qRow(x,'p')).join(''):'<p class="empty">No products yet. You can still send a request for custom fixtures or store planning.</p>';}
document.addEventListener('change',e=>{const id=e.target.dataset&&e.target.dataset.id;if(!id)return;const q=Q(),f=q.find(x=>x.id==id);if(f){f.qty=Math.max(1,+e.target.value||1);saveQ(q)}});
document.addEventListener('click',e=>{const rm=e.target.dataset&&e.target.dataset.rm;if(rm){saveQ(Q().filter(x=>x.id!=rm))}
 const add=e.target.closest('[data-add]');if(add){e.preventDefault();const qi=$('#pqty');addQ(add.dataset.add,add.dataset.add&&qi&&add.closest('#pdp')?Math.max(1,+qi.value||1):1)}});
const drawer=$('#drawer'),scrim=$('#scrim');
function openDrawer(){drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');scrim.hidden=false;$('#qclose').focus()}
function closeDrawer(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');scrim.hidden=true}
if(!location.pathname.endsWith('quote.html'))$('#qopen').addEventListener('click',e=>{e.preventDefault();openDrawer()});
$('#qclose').addEventListener('click',closeDrawer);scrim.addEventListener('click',closeDrawer);
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(()=>t.hidden=true,2600)}
renderQ();
/* search with suggestions */
const sq=$('#sq'),sg=$('#suggest');let sel=-1;
const matches=q=>{q=q.toLowerCase();const c=CATS.filter(x=>x.name.toLowerCase().includes(q)).map(x=>({h:`catalog.html?cat=${x.id}`,t:x.name,s:'Department'}));
 const sub=CATS.flatMap(x=>x.subs.filter(s=>s.toLowerCase().includes(q)).map(s=>({h:`catalog.html?cat=${x.id}&sub=${slug(s)}`,t:s,s:x.short})));
 const p=P.filter(x=>(x.name+' '+x.sku).toLowerCase().includes(q)).map(x=>({h:`product.html?id=${x.id}`,t:x.name,s:x.sku}));return [...c,...sub,...p].slice(0,9)};
sq.addEventListener('input',()=>{const v=sq.value.trim();sel=-1;if(v.length<2){sg.hidden=true;sq.setAttribute('aria-expanded','false');return}
 const m=matches(v);sg.innerHTML=m.map((x,i)=>`<li role="option" id="sg${i}"><a href="${x.h}">${esc(x.t)}<small>${esc(x.s)}</small></a></li>`).join('')||'<li style="padding:9px 16px">No matches. Press Enter to search all.</li>';sg.hidden=false;sq.setAttribute('aria-expanded','true')});
sq.addEventListener('keydown',e=>{const a=$$('#suggest a');if(!a.length)return;if(e.key=='ArrowDown'||e.key=='ArrowUp'){e.preventDefault();sel=(sel+(e.key=='ArrowDown'?1:-1)+a.length)%a.length;a.forEach((x,i)=>x.classList.toggle('on',i==sel));sq.setAttribute('aria-activedescendant','sg'+sel)}
 if(e.key=='Enter'&&sel>-1){e.preventDefault();location.href=a[sel].getAttribute('href')}});
sq.addEventListener('blur',()=>setTimeout(()=>sg.hidden=true,150));
/* cards */
const tile=p=>{const t=tiers(p);return `<article class="tile"><a href="product.html?id=${p.id}">${thumb(cat(p.cat).icon)}</a><div class="meta"><span class="sku">${p.sku} &middot; ${esc(p.sub)}</span><h3><a href="product.html?id=${p.id}" style="text-decoration:none">${esc(p.name)}</a></h3>
 ${p.price?`<span class="price">${t.length>1?'<small>As low as </small>':''}${money(t[t.length-1][1])} <small>placeholder</small></span>`:'<span class="price">Quote <small>custom build</small></span>'}<span class="stock ${p.stock.startsWith('In')?'':'mto'}">${p.stock}</span></div>
 <div class="act">${p.price?`<button class="btn btn--sm" data-add="${p.id}">Add to quote</button>`:`<a class="btn btn--sm btn--dark" href="quote.html">Request quote</a>`}</div></article>`};
const tg=$('#tgrid');if(tg)tg.innerHTML=STORE_TYPES.map(([n,c])=>`<a href="catalog.html?cat=${c}">${svg(cat(c).icon)}<strong>${n}</strong><span style="font-size:.85rem;color:var(--concrete)">Shop ${cat(c).short.toLowerCase()} &rarr;</span></a>`).join('');
const fe=$('#featured');if(fe)fe.innerHTML=['p7','p1','p17','p22','p37'].map(i=>tile(P.find(p=>p.id==i))).join('');
/* catalog */
if($('#results')){const u=new URLSearchParams(location.search),pre=u.get('cat'),preSub=u.get('sub'),pq=u.get('q')||'';
 if(pq)sq.value=pq;
 $('#f-cat').innerHTML=CATS.map(c=>`<label class="check"><input type="checkbox" value="${c.id}"${c.id==pre?' checked':''}> ${c.short}<small>${P.filter(p=>p.cat==c.id).length}</small></label>`).join('');
 $('#f-mat').innerHTML=MAT.map(m=>`<label class="check"><input type="checkbox" value="${m}"> ${m}<small>${P.filter(p=>p.mat==m).length}</small></label>`).join('');
 let sub=preSub;
 const vals=s=>$$(s+' input:checked').map(i=>i.value);
 const run=()=>{const c=vals('#f-cat'),m=vals('#f-mat'),f=$('#f-fast').checked,cu=$('#f-custom').checked,q=pq.toLowerCase();
  const one=c.length==1?cat(c[0]):null;
  $('#ctitle').textContent=one?one.name:(q?`Results for “${pq}”`:'All fixtures');$('#cdesc').textContent=one?`${one.subs.join(', ')}.`:'Every department in one place. Filter on the left or search above.';
  $('#crumbs').innerHTML=`<a href="index.html">Home</a> / <a href="catalog.html">Shop</a>${one?' / '+one.name:''}`;
  $('#subnav').innerHTML=one?[`<a href="catalog.html?cat=${one.id}"${!sub?' aria-current="true"':''}>All</a>`,...one.subs.map(s=>`<a href="catalog.html?cat=${one.id}&sub=${slug(s)}"${sub==slug(s)?' aria-current="true"':''}>${s}</a>`)].join(''):'';
  let r=P.filter(p=>(!c.length||c.includes(p.cat))&&(!one||!sub||slug(p.sub)==sub)&&(!m.length||m.includes(p.mat))&&(!f||p.stock.startsWith('In'))&&(!cu||!p.stock.startsWith('In'))&&(p.name+' '+p.sub+' '+cat(p.cat).name+' '+p.sku).toLowerCase().includes(q));
  const s=$('#sort').value,pr=p=>p.price||1e9;if(s=='lo')r.sort((a,b)=>pr(a)-pr(b));if(s=='hi')r.sort((a,b)=>(b.price||0)-(a.price||0));if(s=='az')r.sort((a,b)=>a.name.localeCompare(b.name));
  $('#count').textContent=`${r.length} product${r.length==1?'':'s'}`;
  $('#chips').innerHTML=[...c.map(x=>[x,cat(x).short]),...m.map(x=>[x,x]),...(q?[['__q','“'+pq+'”']]:[])].map(([v,l])=>`<button data-v="${esc(v)}" aria-label="Remove filter ${esc(l)}">${esc(l)} &times;</button>`).join('')+(c.length+m.length?'<button data-v="__all">Clear all</button>':'');
  $('#results').innerHTML=r.map(tile).join('')||'<p>No matches. Clear a filter, or <a href="quote.html">ask a specialist</a> to source it.</p>'};
 $('#chips').addEventListener('click',e=>{const v=e.target.dataset.v;if(!v)return;if(v=='__q'){location.href='catalog.html'+(pre?'?cat='+pre:'');return}
  $$('#filters input').forEach(i=>{if(v=='__all'||i.value==v)i.checked=false});sub=null;run()});
 $$('#filters input').forEach(e=>e.addEventListener('change',()=>{sub=null;run()}));$('#sort').addEventListener('change',run);run();
 $$('.viewbtns button').forEach(b=>b.addEventListener('click',()=>{$$('.viewbtns button').forEach(x=>x.setAttribute('aria-pressed',x==b));$('#results').classList.toggle('list',b.dataset.v=='list')}));
 $('#ftoggle').addEventListener('click',e=>e.currentTarget.setAttribute('aria-expanded',$('#filters').classList.toggle('open')));}
/* product page */
if($('#pdp')){const p=P.find(x=>x.id==new URLSearchParams(location.search).get('id'))||P[6],c=cat(p.cat),t=tiers(p);
 document.title=`${p.name} | ${c.short} | Red3 Display`;
 $('#pdp').innerHTML=`<p class="crumbs"><a href="index.html">Home</a> / <a href="catalog.html?cat=${c.id}">${c.name}</a> / <a href="catalog.html?cat=${c.id}&sub=${slug(p.sub)}">${p.sub}</a> / ${esc(p.name)}</p>
 <div class="pdp"><div>${thumb(c.icon,1)}<div class="thumbs">${thumb(c.icon).repeat(4)}</div></div><div>
 <p class="kicker">${c.name}</p><h1>${esc(p.name)}</h1><p class="sku">SKU ${p.sku} <span class="ph-note">placeholder</span></p>
 <p class="stock ${p.stock.startsWith('In')?'':'mto'}">${p.stock}</p>
 ${p.price?`<table class="tier"><caption class="sr">Volume pricing</caption><thead><tr><th scope="col">Quantity</th><th scope="col">Price each</th></tr></thead><tbody>${t.map((x,i)=>`<tr><td>${x[0]}${t[i+1]?' to '+(t[i+1][0]-1):'+'}</td><td>${money(x[1])}</td></tr>`).join('')}</tbody></table><p class="ph-note">Placeholder prices and tiers</p>
 <div class="buy"><div class="qty"><button type="button" aria-label="Decrease quantity" id="qm">&minus;</button><label class="sr" for="pqty">Quantity</label><input id="pqty" type="number" min="1" value="1"><button type="button" aria-label="Increase quantity" id="qp">+</button></div><button class="btn" data-add="${p.id}">Add to quote list</button></div>
 <p style="font-size:.95rem">Ordering 50 or more, or outfitting several stores? <a href="quote.html">Request a volume quote</a>.</p>`
 :`<p style="font-size:1.1rem">This is a custom build, priced per project.</p><div class="buy"><a class="btn" href="quote.html">Request a custom quote</a></div>`}
 <div class="assure"><span><strong>Freight:</strong> quoted with your order. Free freight on textured slatwall and wall panels.</span><span><strong>Custom sizes and finishes:</strong> available on request.</span><span><strong>Lease option:</strong> ask about leasing on larger orders.</span></div>
 <a class="btn btn--line btn--sm" href="tel:8589007318">Questions? Call (858) 900-7318</a></div></div>
 <div class="tabs"><div><h2 style="font-size:1.4rem;margin-bottom:12px">Specifications</h2><table class="spec"><tr><th scope="row">Department</th><td>${c.name}</td></tr><tr><th scope="row">Type</th><td>${p.sub}</td></tr><tr><th scope="row">Material</th><td>${p.mat}</td></tr><tr><th scope="row">Assembly</th><td>Placeholder</td></tr><tr><th scope="row">Dimensions</th><td>Placeholder</td></tr><tr><th scope="row">SKU</th><td class="mono">${p.sku}</td></tr></table></div>
 <div><h2 style="font-size:1.4rem;margin-bottom:12px">Pairs with</h2><div class="tiles">${P.filter(x=>x.cat==p.cat&&x!=p).slice(0,2).map(tile).join('')}</div></div></div>`;
 const ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Product","name":p.name,"sku":p.sku,"brand":{"@type":"Brand","name":"Red3 Display"},"material":p.mat,"category":c.name});document.head.append(ld);
 const qi=$('#pqty');if(qi){$('#qm').onclick=()=>qi.value=Math.max(1,+qi.value-1);$('#qp').onclick=()=>qi.value=+qi.value+1}}
/* demo forms */
[['#qform','#qmsg','Thanks. On the live site this list goes to a Red3 fixture specialist. (Demo: nothing sent.)'],['#planner','#pmsg','Thanks. On the live site this goes to the Red3 planning team. (Demo: nothing sent.)']].forEach(([f,m,ok])=>{const el=$(f);el&&el.addEventListener('submit',e=>{e.preventDefault();$(m).textContent=el.checkValidity()?ok:'Please add your name and a valid email.'})});
/* reveal */
const els=$$('.rv');if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(e=>e.classList.add('in'))}else{
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){const s=[...en.target.parentNode.children];en.target.style.transitionDelay=Math.min(s.indexOf(en.target),5)*60+'ms';en.target.classList.add('in');io.unobserve(en.target)}}),{rootMargin:'0px 0px -60px 0px'});els.forEach(e=>io.observe(e))}
})();
