(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".tour-card"),n=document.querySelector(".arrow-left"),i=document.querySelector(".arrow-right");let r=0;function e(){o.forEach(s=>s.classList.remove("active")),o[r].classList.add("active")}function t(){r++,r>=o.length&&(r=0),e()}function c(){r--,r<0&&(r=o.length-1),e()}n.addEventListener("click",c),i.addEventListener("click",t),e()});
//# sourceMappingURL=commonHelpers.js.map
