(()=>{document.querySelector("body"),document.querySelector(".supply");const e=document.querySelector(".supply__form"),r=document.querySelector(".js-check"),o=document.querySelector(".js-email"),t=document.querySelector(".supply__form-check-label"),s=document.querySelectorAll(".js-input"),l=document.querySelectorAll(".supply__form-select"),c=document.querySelector(".supply__form-number"),u=document.querySelector(".theme__select"),n=document.querySelector(".done__wrap");u.addEventListener("change",(()=>{console.log(u.value),"money"===u.value?c.classList.remove("_none"):c.classList.add("_none")})),e.addEventListener("submit",(e=>{e.preventDefault(),emptyInputs=Array.from(s).filter((e=>""===e.value)),emptySelects=Array.from(l).filter((e=>0===e.selectedIndex)),s.forEach((function(e){""===e.value?e.classList.add("_error"):e.classList.remove("_error")})),l.forEach((e=>{0===e.selectedIndex?e.classList.add("_error"):e.classList.remove("_error")})),r.checked?t.classList.remove("_error"):t.classList.add("_error"),"money"===u.value&&""===c.value?c.classList.add("_error"):c.classList.remove("_error");let a=o.value;return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?(o.classList.remove("error"),0!==emptyInputs.length||!r.checked||0!==emptySelects.length||"money"===u.value&&""===c.value?(console.log("inputs not filled"),!1):(console.log("go"),void n.classList.remove("_hidden"))):(o.classList.add("_error"),!1)}))})();