var modal = document.querySelector('.modal');

var buyBtns = document.querySelectorAll('.tour-places__buy');
buyBtns.forEach(buyBtn => {
    buyBtn.onclick = (e) => {
        modal.classList.add('active');
    }
});

function removeClass() {
    modal.classList.remove('active');
}

document.querySelector('.modal-btn-close').onclick = removeClass;
document.querySelector(".modal-cancel").onclick = removeClass;
modal.onclick = removeClass;
document.querySelector(".modal-container").onclick = (e) => {
    e.stopPropagation();
}