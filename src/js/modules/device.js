export function isDevice() {
    const isMobile = {
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
            return navigator.userAgent.match(/IEMobile/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        document.body.classList.add('_touch');
        const menuArrow = document.querySelector('.menu__arrow');
        const menuLinkClick = document.querySelector('.menu__link_click');
        menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
        });
        menuLinkClick.addEventListener("click", function (e) {
            menuLinkClick.parentElement.classList.toggle('_active');
            e.preventDefault();
        });
    } else {
        document.body.classList.add('_pc');
    }

}