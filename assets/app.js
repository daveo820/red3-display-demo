const $=s=>document.querySelector(s);
const mb=$('.menu-btn');mb&&mb.addEventListener('click',()=>{const o=$('#menu').classList.toggle('open');mb.setAttribute('aria-expanded',o)});
const card=p=>`<a class="card" href="product.html?id=${p.id}">${thumb(cat(p.cat).icon)}<div class="body"><span class="tag">${cat(p.cat).name}</span><h3>${p.name}</h3><p>${p.mat} &middot; $${p.price.toLocaleString()} <small>(placeholder)</small></p></div></a>`;
if($('#cats'))$('#cats').innerHTML=CATS.map(c=>`<a class="card" href="catalog.html?cat=${c.id}">${thumb(c.icon)}<div class="body"><h3>${c.name}</h3><p>${c.blurb}</p></div></a>`).join('');
if($('#featured'))$('#featured').innerHTML=['p6','p1','p17','p21'].map(i=>card(P.find(p=>p.id==i))).join('');
if($('#results')){
 const u=new URLSearchParams(location.search),pre=u.get('cat');
 $('#f-cat').innerHTML=CATS.map(c=>`<label><input type="checkbox" value="${c.id}"${c.id==pre?' checked':''}> ${c.name}</label>`).join('');
 $('#f-mat').innerHTML=MAT.map(m=>`<label><input type="checkbox" value="${m}"> ${m}</label>`).join('');
 const vals=s=>[...document.querySelectorAll(s+' input:checked')].map(i=>i.value);
 const run=()=>{const q=$('#q').value.toLowerCase(),c=vals('#f-cat'),m=vals('#f-mat'),f=$('#f-fast').checked;
  let r=P.filter(p=>(!c.length||c.includes(p.cat))&&(!m.length||m.includes(p.mat))&&(!f||p.lead.startsWith('Ships'))&&(p.name+' '+cat(p.cat).name).toLowerCase().includes(q));
  const s=$('#sort').value;if(s=='lo')r.sort((a,b)=>a.price-b.price);if(s=='hi')r.sort((a,b)=>b.price-a.price);if(s=='az')r.sort((a,b)=>a.name.localeCompare(b.name));
  $('#count').textContent=r.length+' products';$('#results').innerHTML=r.map(card).join('')||'<p>No matches. Try clearing a filter.</p>'};
 document.querySelectorAll('#filters input,#q,#sort').forEach(e=>e.addEventListener('input',run));run();
 $('#ftoggle').addEventListener('click',e=>{const o=$('#filters').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)});}
if($('#pdp')){const p=P.find(x=>x.id==new URLSearchParams(location.search).get('id'))||P[5],c=cat(p.cat);document.title=p.name+' | Red3 Display';
 $('#pdp').innerHTML=`<p class="crumbs"><a href="index.html">Home</a> / <a href="catalog.html?cat=${c.id}">${c.name}</a> / ${p.name}</p><div class="pdp">${thumb(c.icon)}<div>
 <span class="tag">${c.name}</span><h1 style="margin:.3rem 0">${p.name}</h1><p class="count">SKU ${p.sku} (placeholder)</p><p style="font-size:1.6rem;font-weight:800;margin:.5rem 0">$${p.price.toLocaleString()} <small style="font-size:.8rem;color:#777">placeholder price</small></p>
 <p>${p.lead}. Volume pricing and custom sizes available. Ask about leasing.</p><strong>Finish</strong><div class="opts" role="group" aria-label="Finish">${['Standard','Black','White','Custom'].map((o,i)=>`<button aria-pressed="${!i}">${o}</button>`).join('')}</div>
 <div style="display:flex;gap:.75rem;flex-wrap:wrap"><a class="btn" href="contact.html">Request a quote</a><a class="btn ghost" href="tel:8589007318">Call (858) 900-7318</a></div>
 <h2 style="font-size:1.2rem;margin-top:2rem">Specs <small style="color:#777">(placeholder)</small></h2><table><tr><th scope="row">Material</th><td>${p.mat}</td></tr><tr><th scope="row">Assembly</th><td>Knock down, tools included</td></tr><tr><th scope="row">Lead time</th><td>${p.lead}</td></tr></table></div></div>
 <h2>More in ${c.name}</h2><div class="grid" style="margin-bottom:4rem">${P.filter(x=>x.cat==p.cat&&x!=p).slice(0,4).map(card).join('')}</div>`;
 document.querySelectorAll('.opts button').forEach(b=>b.onclick=()=>document.querySelectorAll('.opts button').forEach(x=>x.setAttribute('aria-pressed',x==b)));}
if($('#cform'))$('#cform').addEventListener('submit',e=>{e.preventDefault();const f=e.target;$('#cmsg').textContent=f.checkValidity()?'Thanks. In the live site this goes straight to the Red3 team. (Demo: nothing sent.)':'Please fill in name, a valid email and a message.'});
