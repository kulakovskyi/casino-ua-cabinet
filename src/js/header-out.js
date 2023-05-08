//burger
const iconMenu = document.querySelector(".menu__icon");
const iconMenuSpan = document.querySelector(".circle");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");
const headerFix = document.querySelector('.header')
const headerCabinetBtnMob = document.querySelector('.header__cabinet-mob')
const headerDropMenuCabinet = document.querySelector('.header__cabinet-save__container')

function burgerMain(){
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    iconMenuSpan.classList.toggle("_active")
    headerFix.classList.toggle('_open')
    headerFix.classList.remove('_openCabinet')
}

function burgerMainRemove(){
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
    iconMenuSpan.classList.remove("_active")
    headerFix.classList.remove('_open')
}

iconMenu.addEventListener("click", function (e) {
    if(headerDropMenuCabinet.classList.contains('_open')) headerDropMenuCabinet.classList.remove('_open')
    burgerMain()
    let examinationOpenMenu = headerDropMenuCabinet.classList.contains('_open') || menuBody.classList.contains('_active')
    examinationOpenMenu ? body.classList.add('_lock') : body.classList.remove('_lock')

});

//new
headerCabinetBtnMob.addEventListener('click', deskButtonEventCabinet)
function deskButtonEventCabinet() {
    headerDropMenuCabinet.classList.toggle('_open')
}

if (window.innerWidth <= 1024) {
    headerCabinetBtnMob.removeEventListener('click', deskButtonEventCabinet)
    headerCabinetBtnMob.addEventListener('click', () => {
        headerDropMenuCabinet.classList.toggle('_open')
        headerFix.classList.toggle('_openCabinet')
        if (menuBody.classList.contains('_active')) {
            headerDropMenuCabinet.classList.add('_open')
            burgerMainRemove()
        }
        let examinationOpenMenu = headerDropMenuCabinet.classList.contains('_open') || menuBody.classList.contains('_active')
        examinationOpenMenu ? body.classList.add('_lock') : body.classList.remove('_lock')

    })
}


//tap in burger on mobile
const itemTitleAcord = document.querySelectorAll('.menu__item-open')
let screenWidth = window.screen.width;

if (screenWidth <= 1024) {
    itemTitleAcord.forEach(item => {
        item.classList.remove('menu__item-hover')
        item.addEventListener("click", () => {
            const itemList = item.querySelector('.menu__item-list')
            itemList.classList.toggle('_open')
            item.classList.toggle('_open')
        })
    })
}
