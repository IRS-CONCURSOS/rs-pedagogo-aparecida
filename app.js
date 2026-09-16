(function(){
'use strict';
const config=RS_CONFIG;
function activeLot(date=new Date()){
 const d=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(date);
 return config.lots.findIndex(l=>!l.until||d<=l.until);
}
function init(){
 const root=document.getElementById('rs-pedagogo');if(!root||root.dataset.ready)return;root.dataset.ready='true';
 const q=s=>root.querySelector(s),qa=s=>root.querySelectorAll(s);
 const dateLabel=new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'numeric',month:'long',year:'numeric'}).format(new Date(config.start+'T12:00:00-03:00'));
 qa('[data-start]').forEach(el=>el.textContent=dateLabel);
 function prices(){const index=activeLot();q('[data-lots]').innerHTML=config.lots.map((l,i)=>`<article class="rs-price ${i===index?'current':''}"><p class="rs-price-status">${i===index?'LOTE VIGENTE':i<index?'PERÍODO ENCERRADO':'PRÓXIMO LOTE'}</p><h3>${i+1}º lote presencial</h3><strong>R$ ${l.price}</strong><p>à vista</p><p class="rs-price-date">${l.label} de 2026</p></article>`).join('');qa('[data-current-price]').forEach(el=>el.textContent='R$ '+config.lots[index].price)}prices();setInterval(prices,60000);
 function whatsapp(form){const val=id=>form.querySelector(`[name="form_fields[${id}]"]:checked`)?.value||form.querySelector(`[name="form_fields[${id}]"]`)?.value||'';return 'https://wa.me/'+config.phone+'?text='+encodeURIComponent(`Olá! Tenho interesse no preparatório Pedagogo — Aparecida de Goiânia.\nNome: ${val('nome')}\nModalidade: ${val('modalidade')}\nExperiência: ${val('experiencia')}`)}
 const slot=q('#rs-form-slot');let hooked=false;let savedMessage='';
 function mount(){
  const widget=document.querySelector('.rs-native-form');if(!widget)return false;
  if(widget.parentElement!==slot)slot.append(widget);
  const form=widget.querySelector('form');
  if(form&&!form.dataset.rsCapture){
   form.dataset.rsCapture='true';
   form.addEventListener('submit',()=>{savedMessage=whatsapp(form)},true);
   const tel=form.querySelector('[name="form_fields[whatsapp]"]');
   if(tel){tel.setAttribute('pattern','[+()0-9 .-]{10,20}');tel.setAttribute('maxlength','20');tel.setAttribute('autocomplete','tel')}
   const name=form.querySelector('[name="form_fields[nome]"]');if(name)name.setAttribute('autocomplete','name');
  }
  if(window.jQuery&&!hooked){
   hooked=true;
   window.jQuery(widget).on('submit_success',function(){
    if(!form)return;
    q('#rs-whatsapp').href=savedMessage||whatsapp(form);
    widget.hidden=true;q('#rs-success').hidden=false;q('#rs-success').focus();
    if(!root.dataset.converted){root.dataset.converted='true';
     if(typeof window.gtag==='function')window.gtag('event','generate_lead',{content_name:config.course});
     if(typeof window.fbq==='function')window.fbq('track','Lead',{content_name:config.course});
    }
   });
  }
  return !!form&&hooked;
 }
 if(!mount()){
  const observer=new MutationObserver(()=>{if(mount())observer.disconnect()});
  observer.observe(document.body,{childList:true,subtree:true});
  const retry=setInterval(()=>{if(mount()){clearInterval(retry);observer.disconnect()}},250);
  setTimeout(()=>{clearInterval(retry);observer.disconnect()},15000);
 }
 const stats=qa('.sec-inst .n[data-count]');
 if(stats.length&&'IntersectionObserver' in window){
  const sObs=new IntersectionObserver(entries=>{
   if(entries[0].isIntersecting){
    sObs.disconnect();
    stats.forEach(el=>{
     const target=parseInt(el.dataset.count,10);
     const prefix=el.dataset.prefix||'';
     const suffix=el.dataset.suffix||'';
     const duration=1200;
     const t0=performance.now();
     const tick=t=>{
      const p=Math.min((t-t0)/duration,1);
      const ease=1-Math.pow(1-p,3);
      el.textContent=prefix+Math.floor(ease*target)+suffix;
      if(p<1)requestAnimationFrame(tick);
     };
     requestAnimationFrame(tick);
    });
   }
  },{threshold:0.25});
  sObs.observe(stats[0]);
 }
 const demo=q('#rs-preview-form');if(demo){let step=0;const panes=[...demo.querySelectorAll('fieldset')];const show=()=>{panes.forEach((el,i)=>el.hidden=i!==step);demo.querySelectorAll('.rs-progress span').forEach((el,i)=>el.classList.toggle('active',i<=step));q('.rs-step-label').textContent=`Etapa ${step+1} de 3`;panes[step].querySelector('input')?.focus()};demo.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>{const fields=[...panes[step].querySelectorAll('input')];if(fields.every(el=>el.reportValidity())){step++;show()}}));demo.querySelectorAll('[data-back]').forEach(btn=>btn.addEventListener('click',()=>{step--;show()}));demo.addEventListener('submit',e=>{e.preventDefault();q('.rs-error').hidden=false;q('.rs-error a').href=whatsapp(demo)});}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
