(()=>{
  const reel=document.querySelector('[data-showreel]');
  if(!reel)return;
  const slides=[...reel.querySelectorAll('.showreel-slide')];
  const dotsHost=document.querySelector('.showreel-dots');
  const labels=['Product analytics','Digital commerce','Travel and hospitality','Creative studio','Cybersecurity','Live events','Learning platform','Climate intelligence','Real estate','Creator community'];
  const accents=['#b4ee73','#e6a180','#9fb7a0','#ed7654','#62deca','#ff4b9a','#92ad7e','#79a77c','#d38d69','#d6f080'];
  labels.forEach((label,i)=>{const dot=document.createElement('button');dot.type='button';dot.className=i===0?'active':'';dot.setAttribute('role','tab');dot.setAttribute('aria-selected',String(i===0));dot.setAttribute('aria-label',`Concept ${i+1}: ${label}`);dot.dataset.showreelDot=i;dotsHost.append(dot);});
  const dots=[...dotsHost.querySelectorAll('[data-showreel-dot]')];
  const counter=document.querySelector('[data-showreel-index]');
  const pause=document.querySelector('[data-showreel-pause]');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active=0,timer=null,paused=reduced,touchX=0;
  const show=index=>{
    active=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>{
      slide.classList.toggle('active',i===active);
      slide.setAttribute('aria-hidden',String(i!==active));
    });
    dots.forEach((dot,i)=>{
      dot.classList.toggle('active',i===active);
      dot.setAttribute('aria-selected',String(i===active));
    });
    counter.textContent=String(active+1).padStart(2,'0');
    reel.closest('.design-showreel').style.setProperty('--show-accent',accents[active]);
  };
  const stop=()=>{clearInterval(timer);timer=null;};
  const start=()=>{stop();if(!paused)timer=setInterval(()=>show(active+1),7500);};
  document.querySelector('[data-showreel-prev]').addEventListener('click',()=>{show(active-1);start();});
  document.querySelector('[data-showreel-next]').addEventListener('click',()=>{show(active+1);start();});
  dots.forEach(dot=>dot.addEventListener('click',()=>{show(Number(dot.dataset.showreelDot));start();}));
  pause.addEventListener('click',()=>{
    paused=!paused;
    pause.setAttribute('aria-pressed',String(paused));
    pause.lastChild.textContent=paused?' PLAY MOTION':' PAUSE MOTION';
    start();
  });
  reel.addEventListener('mouseenter',stop);
  reel.addEventListener('mouseleave',start);
  reel.addEventListener('focusin',stop);
  reel.addEventListener('focusout',start);
  reel.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});
  reel.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-touchX;
    if(Math.abs(dx)>45){show(active+(dx<0?1:-1));start();}
  },{passive:true});
  reel.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'){show(active+1);start();}
    if(e.key==='ArrowLeft'){show(active-1);start();}
  });
  reel.querySelectorAll('[data-toast]').forEach(button=>button.addEventListener('click',()=>{
    let toast=button.parentElement.querySelector('.concept-toast');
    if(!toast){toast=document.createElement('span');toast.className='concept-toast';toast.setAttribute('role','status');button.parentElement.append(toast);}
    toast.textContent=button.dataset.toast;
    clearTimeout(button._toastTimer);
    button._toastTimer=setTimeout(()=>toast.textContent='',2600);
  }));
  document.querySelector('[data-sol-next]').addEventListener('click',e=>{
    const art=e.currentTarget.closest('.sol-hero').querySelector('.sol-art');
    art.classList.toggle('product-alt');
    e.currentTarget.textContent=art.classList.contains('product-alt')?'\u2190':'\u2192';
  });
  if(!reduced)start();
})();
