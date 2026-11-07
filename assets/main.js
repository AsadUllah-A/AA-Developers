document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const hdr=document.querySelector('.hdr'),b=document.querySelector('.burger'),m=document.getElementById('menu');
const onScroll=()=>hdr.classList.toggle('sc',scrollY>20);onScroll();addEventListener('scroll',onScroll,{passive:true});
if(b){b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',e=>{if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1}):null;
document.querySelectorAll('.reveal').forEach(e=>io?io.observe(e):e.classList.add('in'));
const links=[...document.querySelectorAll('#menu a[href*="#"]')],secs=links.map(a=>document.getElementById(a.hash.slice(1))).filter(Boolean);
if(secs.length&&'IntersectionObserver'in window){const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});secs.forEach(s=>so.observe(s))}
document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{const t=btn.textContent;try{await navigator.clipboard.writeText(btn.dataset.copy);btn.textContent='Email Copied'}catch(e){btn.textContent=btn.dataset.copy}setTimeout(()=>btn.textContent=t,2200)}));
