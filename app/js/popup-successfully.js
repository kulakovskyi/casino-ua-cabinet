(()=>{const e=document.querySelector(".popup-btn-click"),c=document.querySelector(".popup-successfully__info-btn-close"),s=document.querySelector(".popup-successfully"),o=document.querySelector("body");e.addEventListener("click",(()=>{o.classList.add("_lock"),s.classList.remove("_hidden")})),c.addEventListener("click",(()=>{o.classList.remove("_lock"),s.classList.add("_hidden")}))})();