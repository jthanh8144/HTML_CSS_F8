const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// modal 
var modal = $('.modal');

var buyBtns = $$('.tour-places__buy');
buyBtns.forEach(buyBtn => {
    buyBtn.onclick = (e) => {
        modal.classList.add('active');
    }
});

function removeClass() {
    modal.classList.remove('active');
}

$('.modal-btn-close').onclick = removeClass;
$(".modal-cancel").onclick = removeClass;
modal.onclick = removeClass;
$(".modal-container").onclick = (e) => {
    e.stopPropagation();
}

// mobile nav
var header = $('.header');
$('.mobile-menu__btn').onclick = () => {
    var isClose = header.clientHeight === 50;
    if (isClose) {
        header.style.height = 'auto';
        $('.nav-item:nth-child(2)').style.borderTop = '1px solid var(--white-color)';
    } else {
        header.style.height = null;
        $('.nav-item:nth-child(2)').style.borderTop = null;
    }
}

// close sub nav
console.log();
var subnav = $('.subnav');
$('.nav-more').onclick = () => {
    if (!subnav.classList.contains('subnav--active')) {
        subnav.classList.add('subnav--active');
        subnav.classList.remove('subnav--hidden');
    } else {
        subnav.classList.remove('subnav--active');
        subnav.classList.add('subnav--hidden');
    }
}