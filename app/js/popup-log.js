(()=>{const e=document.querySelector(".popup-btn-click"),c=document.querySelector(".popup-log__info-btn-close"),o=document.querySelector(".popup-log"),t=document.querySelector("body");e.addEventListener("click",(()=>{t.classList.add("_lock"),o.classList.remove("_hidden")})),c.addEventListener("click",(()=>{t.classList.remove("_lock"),o.classList.add("_hidden")}))})();