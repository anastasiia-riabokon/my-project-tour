(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const o=document.querySelectorAll(".tour-card"),d=document.querySelector(".arrow-left"),f=document.querySelector(".arrow-right");let r=0;function i(){o.forEach(s=>s.classList.remove("active")),o[r].classList.add("active")}function a(){r++,r>=o.length&&(r=0),i()}function m(){r--,r<0&&(r=o.length-1),i()}d.addEventListener("click",m);f.addEventListener("click",a);i();
//# sourceMappingURL=commonHelpers.js.map
