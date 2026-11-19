const C='akl-v4',A=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','data/ing.js','data/r1.js','data/r2.js','data/r3.js','data/r4.js','data/r5.js','data/r6.js','data/r7.js','data/r8.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(res=>{
    if(res.ok&&new URL(e.request.url).origin===location.origin){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp))}
    return res}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
