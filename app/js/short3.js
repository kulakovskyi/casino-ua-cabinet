(()=>{const e=document.querySelector(".icon-pass"),t=document.querySelector(".popup-login__info-pass");e.addEventListener("click",(()=>{"password"===t.getAttribute("type")?(t.removeAttribute("type"),t.setAttribute("type","text")):(t.removeAttribute("type"),t.setAttribute("type","password"))}));const o=document.querySelector(".popup-login__info-form"),r=document.querySelectorAll(".js-input");o.addEventListener("submit",(()=>{if(event.preventDefault(),emptyInputs=Array.from(r).filter((e=>""===e.value)),r.forEach((function(e){""===e.value?e.classList.add("_error"):e.classList.remove("_error")})),0!==emptyInputs.length)return console.log("inputs not filled"),!1;console.log("go")}))})();