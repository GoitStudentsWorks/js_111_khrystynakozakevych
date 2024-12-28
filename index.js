import{A as h,S as m,N as q,K as C,i as k}from"./assets/vendor-CnWMDTTw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const x=document.querySelector(".menu-button"),v=document.querySelector(".mobile-menu"),I=document.querySelector(".close-menu"),M=document.querySelectorAll(".mobile-menu a");x.addEventListener("click",()=>{v.classList.add("active")});I.addEventListener("click",()=>{v.classList.remove("active")});M.forEach(e=>{e.addEventListener("click",()=>{v.classList.remove("active")})});const P=document.querySelector(".tablet-menu"),b=document.querySelector(".nav-tablet"),A=document.querySelectorAll(".nav-tablet a, .order-button");P.addEventListener("click",()=>{b.classList.toggle("active")});A.forEach(e=>{e.addEventListener("click",()=>{b.classList.remove("active")})});function B(){new h(".accordion-block",{showMultiple:!0,openOnInit:[0]}),window.addEventListener("load",()=>{document.querySelector(".accordion-block").classList.remove("no-animation")})}function V(){new m(".skills-swiper",{modules:[q,C],slidesPerView:"auto",loop:!0,navigation:{nextEl:".swiper-next-skill"},keyboard:{enabled:!0,onlyInViewport:!0}})}B();V();new m(".swiper",{keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,navigation:{nextEl:".arrow-next",prevEl:".arrow-prev"},speed:400,simulateTouch:!0});const O=document.querySelectorAll(".project-image");O.forEach(e=>{e.addEventListener("mouseover",()=>{e.style.cursor="grab"}),e.addEventListener("mouseout",()=>{e.style.cursor="default"})});new h(".faq-accordion-container",{showMultiple:!0});window.addEventListener("load",()=>{document.querySelector(".faq-accordion-container").classList.remove("no-animation")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#covers"),t=document.querySelectorAll(".marquee__line");function n(o){const r=o.getBoundingClientRect();return r.bottom>0&&r.top<(window.innerHeight||document.documentElement.clientHeight)}function s(){n(e)?(t.forEach(o=>{o.style.animationPlayState="running"}),console.log("running")):(t.forEach(o=>{o.style.animationPlayState="paused"}),console.log("paused"))}t.forEach(o=>{o.style.animationPlayState="paused"}),console.log("paused"),window.addEventListener("scroll",s),window.addEventListener("resize",s)});const z=document.querySelector(".container"),j=document.querySelector(".reviews-list"),y=document.querySelector(".not-found");function g(){const e=z.clientWidth;if(e===320)return 1;if(e===375)return 1;if(e===768)return 2;if(e===1440)return 4}const p=new m(".swiper2",{direction:"horizontal",slidesPerView:g(),spaceBetween:16,scrollbar:{el:".swiper-scrollbar",hide:!0},navigation:{nextEl:".right-btn2",prevEl:".left-btn2"},speed:750,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});function R(){p.params.slidesPerView=g(),p.update()}window.addEventListener("resize",R);async function T(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`Error ${e.status}`);const t=await e.json();F(t),y.classList.add("visually-hidden")}catch{y.classList.remove("visually-hidden"),k.error({title:"Error",message:"Failed to fetch reviews from server",position:"bottomRight"})}}const F=e=>{e.forEach(t=>{const n=`<li class="reviews-item swiper-slide">
      <img class="img-reviews" src="${t.avatar_url}" alt="reviews" loading="lazy" width="48" height="48"/>
      <h3 class="reviews-head">${t.author}</h3>
      <p class="reviews-text">${t.review}</p>  
    </li>`;j.insertAdjacentHTML("beforeend",n)})};T();const E=document.querySelector(".footer"),w=document.getElementById("contactForm"),c=document.getElementById("modal"),N=document.querySelector(".modal-backdrop"),$=document.querySelector(".modal-close"),l=document.getElementById("email"),a=document.getElementById("statusMessage"),d=document.getElementById("comments"),u=document.getElementById("commetMessage");function _(){c.classList.remove("hidden"),c.style.opacity="1",c.style.visibility="visible",E.classList.add("page-content")}function f(){c.classList.add("hidden"),c.style.opacity="0",c.style.visibility="hidden",E.classList.remove("page-content")}$.addEventListener("click",f);N.addEventListener("click",f);document.addEventListener("keydown",e=>{e.key==="Escape"&&f()});function L(e,t,n,s,o,r){const i=e.value.trim();return i?n(i)?(e.classList.remove("invalid"),e.classList.add("valid"),t.textContent=r,t.classList.remove("error"),t.classList.add("success"),!0):(e.classList.add("invalid"),e.classList.remove("valid"),t.textContent=o,t.classList.add("error"),t.classList.remove("success"),!1):(e.classList.add("invalid"),e.classList.remove("valid"),t.textContent=s,t.classList.add("error"),t.classList.remove("success"),!1)}function H(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function K(e){return e.length>=5}function D(){l.classList.remove("valid","invalid"),d.classList.remove("valid","invalid"),a.textContent="",u.textContent="",a.classList.remove("success","error"),u.classList.remove("success","error")}w.addEventListener("submit",async e=>{e.preventDefault();const t=L(l,a,H,"Email is required.","Invalid email, try again.","Valid email!"),n=L(d,u,K,"Comments are required.","Comments must be at least 5 characters.","Valid comments!");if(!(!t||!n))try{if(!(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.value.trim(),comment:d.value.trim()})})).ok)throw new Error("Server error: Unable to process your request.");D(),w.reset(),_()}catch(s){console.error(s.message),a.textContent=`Error: ${s.message}`,a.classList.add("error")}});const S=document.createElement("style");S.textContent=`
  .valid {
    border-color: #3cbc81;
  }
  .invalid {
    border-color: #e74a3b;
  }
  .success {
    color: #3cbc81;
  }
  .error {
    color: #e74a3b;
  }
`;document.head.appendChild(S);
//# sourceMappingURL=index.js.map