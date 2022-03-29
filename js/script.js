var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

if(isMobile.any()){
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

//burger
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};

//sales-center
const salesCenter = document.querySelector('.sales-center');
const btn = document.querySelector('.btn__connect');
if(salesCenter){
    const menusalesCenter = document.querySelector('.black__menu');
    const header = document.querySelector('header');
    salesCenter.addEventListener("click", function(e){
        salesCenter.classList.toggle('_active');
        menusalesCenter.classList.toggle('_active');
        header.classList.toggle('_active');
        btn.classList.toggle('_active');
    });
};
if(btn){
    const menusalesCenter = document.querySelector('.black__menu');
    const header = document.querySelector('header');
    btn.addEventListener("click", function(e){
        salesCenter.classList.toggle('_active');
        menusalesCenter.classList.toggle('_active');
        header.classList.toggle('_active');
        btn.classList.toggle('_active');
    });
};
btn.onclick = function() {
    window.scrollTo(scrollX, 0);
};
const closeMenu = document.querySelector('.menu__close');
if(closeMenu){
    const menublack = document.querySelector('.black__menu');
    const header = document.querySelector('header');
    closeMenu.addEventListener("click", function(e){
        closeMenu.classList.toggle('_active');
        menublack.classList.toggle('_active');
        header.classList.toggle('_active');
    });
};
