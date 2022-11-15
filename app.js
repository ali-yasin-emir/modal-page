// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
// listen for click events on modal-btn and close-btn
modalBtn.addEventListener('click');
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
