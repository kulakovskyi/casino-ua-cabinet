(()=>{document.querySelector("body"),document.querySelector(".supply");const e=document.querySelector(".supply__form"),t=document.querySelector(".js-check"),r=document.querySelector(".js-email"),o=document.querySelector(".supply__form-check-label"),s=document.querySelectorAll(".js-input"),l=document.querySelectorAll(".supply__form-select"),c=document.querySelector(".supply__form-number"),n=document.querySelector(".theme__select"),d=document.querySelector(".done__wrap");n.addEventListener("change",(()=>{console.log(n.value),"money"===n.value?c.classList.remove("_none"):c.classList.add("_none")})),e.addEventListener("submit",(e=>{e.preventDefault(),emptyInputs=Array.from(s).filter((e=>""===e.value)),emptySelects=Array.from(l).filter((e=>0===e.selectedIndex)),s.forEach((function(e){""===e.value?e.classList.add("_error"):e.classList.remove("_error")})),l.forEach((e=>{0===e.selectedIndex?e.classList.add("_error"):e.classList.remove("_error")})),t.checked?o.classList.remove("_error"):o.classList.add("_error"),"money"===n.value&&""===c.value?c.classList.add("_error"):c.classList.remove("_error");let a=r.value;return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?(r.classList.remove("error"),0!==emptyInputs.length||!t.checked||0!==emptySelects.length||"money"===n.value&&""===c.value?(console.log("inputs not filled"),!1):(console.log("go"),void d.classList.remove("_hidden"))):(r.classList.add("_error"),!1)}));const a=document.getElementById("file-input"),u=document.getElementById("choose-button"),i=document.getElementById("preview");let m=[];u.addEventListener("click",(()=>{a.click()})),a.addEventListener("change",(()=>{const e=a.files;for(let t=0;t<e.length;t++){const r=e[t],o=new FileReader;o.onload=e=>{const t=document.createElement("div");t.classList.add("previewItem"),i.appendChild(t);const r=document.createElement("img");r.src=e.target.result,r.classList.add("preview-image"),t.appendChild(r),m.push(r);const o=document.createElement("button");o.classList.add("delete-button"),o.addEventListener("click",(()=>{i.removeChild(t),m=m.filter((e=>e!==r)),o.remove()})),r.parentNode.insertBefore(o,r.nextSibling)},o.readAsDataURL(r)}}))})();