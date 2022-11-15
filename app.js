// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const main = document.querySelector('.main');

// listen for click events on modal-btn and close-btn
modalBtn.addEventListener('click', function () {
  // console.log(modalBtn.classList);
  overlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
  overlay.classList.remove('open-modal');
});

// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
