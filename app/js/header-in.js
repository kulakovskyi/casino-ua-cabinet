(()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".circle"),c=document.querySelector(".header__menu"),o=document.querySelector("body"),s=document.querySelector(".header");e.addEventListener("click",(function(n){e.classList.toggle("_active"),c.classList.toggle("_active"),t.classList.toggle("_active"),o.classList.toggle("_lock"),s.classList.toggle("_open")}));const n=document.querySelectorAll(".menu__item-open");window.screen.width<=1024&&n.forEach((e=>{e.classList.remove("menu__item-hover"),e.addEventListener("click",(()=>{e.querySelector(".menu__item-list").classList.toggle("_open"),e.classList.toggle("_open")}))}));const l=document.querySelector(".header__cabinet-mob"),r=document.querySelector(".header__cabinet-btns");l.addEventListener("click",(()=>{r.classList.toggle("_open")}))})();