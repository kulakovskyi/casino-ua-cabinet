(()=>{const e=document.querySelector(".icon-pass"),t=document.querySelector(".password__form-pass");e.addEventListener("click",(()=>{"password"===t.getAttribute("type")?(t.removeAttribute("type"),t.setAttribute("type","text")):(t.removeAttribute("type"),t.setAttribute("type","password"))}));const o=document.querySelector(".delete__btn"),s=document.querySelector(".popup-delete__info-btn-close"),c=document.querySelector(".popup-delete"),r=document.querySelector("body");o.addEventListener("click",(()=>{r.classList.add("_lock"),c.classList.remove("_hidden")})),s.addEventListener("click",(()=>{r.classList.remove("_lock"),c.classList.add("_hidden")}))})();