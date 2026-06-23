/* Seton Estate — embers (blue palette) + live-reload */
(function(){
  function spawnLayer(host,o){
    for(var i=0;i<o.N;i++){
      var m=document.createElement('span');
      var startX=o.xMin+Math.random()*(o.xMax-o.xMin);
      var startY=o.yMin+Math.random()*(o.yMax-o.yMin);
      var dx=(Math.random()-0.5)*o.dxRange;
      var dy=-(o.dyMin+Math.random()*(o.dyMax-o.dyMin));
      var dur=o.speedMin+Math.random()*(o.speedMax-o.speedMin);
      var delay=-Math.random()*dur;
      m.style.cssText=
        'left:'+startX+'%;top:'+startY+'%;'+
        'width:'+o.size+'px;height:'+o.size+'px;'+
        'background:rgba('+o.r+','+o.g+',255,'+o.alpha+');'+
        'box-shadow:0 0 '+o.blur+'px rgba('+o.r+','+o.g+',255,'+o.glow+'),'+
        ' 0 0 '+(o.blur*2.8)+'px rgba(60,120,255,'+(o.glow*0.5)+');'+
        'animation:emberDrift '+dur+'s linear infinite;'+
        'animation-delay:'+delay+'s;'+
        '--mx:'+dx+'vw;--my:'+dy+'vh;';
      host.appendChild(m);
    }
  }
  var host=document.getElementById('embers');
  if(host){
    var mobile=window.matchMedia('(pointer:coarse)').matches||window.innerWidth<720;
    var scale=mobile?0.55:1;
    var LAYERS=[
      {N:80,size:1,blur:4, alpha:0.55,glow:0.60,r:80, g:140,speedMin:24,speedMax:46,xMin:0,xMax:100,yMin:55,yMax:100,dxRange:28,dyMin:30,dyMax:90},
      {N:55,size:2,blur:9, alpha:0.80,glow:0.90,r:60, g:120,speedMin:15,speedMax:28,xMin:0,xMax:100,yMin:55,yMax:100,dxRange:50,dyMin:40,dyMax:110},
      {N:24,size:3,blur:18,alpha:0.95,glow:1.05,r:40, g:100,speedMin:8, speedMax:16,xMin:0,xMax:100,yMin:60,yMax:100,dxRange:80,dyMin:55,dyMax:140}
    ];
    LAYERS.forEach(function(L){ var c=Object.assign({},L); c.N=Math.round(L.N*scale); spawnLayer(host,c); });
    document.addEventListener('visibilitychange',function(){ host.style.display=document.hidden?'none':''; });
  }

  // living tabs — scoped so nested tab-groups (e.g. Data: Codex/Collected → sub-tabs) work independently
  document.querySelectorAll('.tab').forEach(function(t){
    t.addEventListener('click',function(){
      var strip=t.closest('.tabs');
      var panels=strip && strip.nextElementSibling;
      if(!panels) return;
      var key=t.getAttribute('data-tab');
      strip.querySelectorAll('.tab').forEach(function(x){ x.classList.toggle('is-active',x===t); });
      Array.prototype.forEach.call(panels.children,function(p){
        if(p.classList && p.classList.contains('panel'))
          p.classList.toggle('is-active', p.getAttribute('data-panel')===key);
      });
    });
  });

  // accordion rows — detail revealed only on click
  document.querySelectorAll('.acc').forEach(function(a){
    a.addEventListener('click',function(){
      var open=a.classList.toggle('is-open');
      var body=a.nextElementSibling;
      if(body) body.style.maxHeight = open ? (body.scrollHeight+'px') : '0px';
    });
  });

  // live-reload while iterating
  var h0=null;
  setInterval(async function(){
    try{
      var r=await fetch(location.pathname,{cache:'no-store'});
      var t=await r.text(); var h=0;
      for(var i=0;i<t.length;i++) h=(h*31+t.charCodeAt(i))|0;
      if(h0===null) h0=h; else if(h!==h0) location.reload();
    }catch(e){}
  },6000);
})();
