(()=>{const e=document.querySelector(".popup-btn-click"),t=document.querySelector("body"),o=document.querySelector(".popup-fall");e.addEventListener("click",(()=>{t.classList.add("_lock"),o.classList.remove("_hidden")}));const r=document.querySelector(".popup-attention__btn"),s=document.querySelector(".popup-attention__text"),c=document.querySelector(".popup-attention__arrow"),l=document.querySelector(".popup-attention__wrapper");document.querySelector(".popup-attention__btn-close").addEventListener("click",(()=>{o.classList.add("_hidden")})),document.querySelector(".popup-supply__btn-close").addEventListener("click",(()=>{o.classList.add("_hidden")})),document.querySelector(".popup-done__btn-close").addEventListener("click",(()=>{o.classList.add("_hidden")}));const d=document.querySelector(".popup-attention"),n=document.querySelector(".popup-supply");r.addEventListener("click",(()=>{d.classList.add("_hidden"),n.classList.remove("_hidden")})),s.addEventListener("scroll",(function e(){s.scrollHeight-s.scrollTop===s.clientHeight&&(r.classList.remove("_disabled"),c.classList.remove("_anim"),l.classList.remove("_top"),s.removeEventListener("scroll",e))})),r.addEventListener("click",(()=>{d.classList.add("_hidden")}));const i=document.querySelector(".popup-supply__form"),u=document.querySelector(".js-check"),p=document.querySelector(".js-email"),a=document.querySelector(".popup-supply__form-check-label"),m=document.querySelectorAll(".js-input"),_=document.querySelectorAll(".popup-supply__form-select"),L=document.querySelector(".popup-done");i.addEventListener("submit",(e=>{e.preventDefault(),emptyInputs=Array.from(m).filter((e=>""===e.value)),emptySelects=Array.from(_).filter((e=>0===e.selectedIndex)),m.forEach((function(e){""===e.value?e.classList.add("_error"):e.classList.remove("_error")})),_.forEach((e=>{0===e.selectedIndex?e.classList.add("_error"):e.classList.remove("_error")})),u.checked?a.classList.remove("_error"):a.classList.add("_error");let t=p.value;return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?(p.classList.remove("error"),0===emptyInputs.length&&u.checked&&0===emptySelects.length?(console.log("go"),L.classList.remove("_hidden"),void n.classList.add("_hidden")):(console.log("inputs not filled"),!1)):(p.classList.add("_error"),!1)})),document.querySelector(".popup-done__link").addEventListener("click",(()=>{o.classList.add("_hidden")}))})();