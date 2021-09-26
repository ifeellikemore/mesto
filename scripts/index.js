let popupWindow = document.querySelector('.popup');
let popupWindowCloseBtn = popupWindow.querySelector('.popup__close-btn');
let editBtn = document.querySelector('.profile-info__edit-button');
let form = document.querySelector('.popup-form');
let inputName = form.querySelector('#username');
let inputJob = form.querySelector('#job');
let username = document.querySelector('.profile-info__name');
let job = document.querySelector('.profile-info__job');

function openPopupWindow() {
  inputName.value = username.textContent;
  inputJob.value = job.textContent;
  popupWindow.classList.add('popup_opened');
}

function closePopupWindow() {
  popupWindow.classList.remove('popup_opened');
}

// закомментировано на будущее :) (close pop-up window by clicking on the overlay layer)
// function popupOverlayClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopupWindow();
//   }
// }
// popupWindow.addEventListener('click', popupOverlayClick);

function formSubmitHandler (evt) {
  evt.preventDefault();
  username.textContent = inputName.value;
  job.textContent = inputJob.value;
  closePopupWindow();
}

editBtn.addEventListener('click', openPopupWindow);
popupWindowCloseBtn.addEventListener('click', closePopupWindow);
form.addEventListener('submit', formSubmitHandler);
