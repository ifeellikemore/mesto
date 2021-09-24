let popupWindow = document.querySelector('.popup');
let popupWindowCloseBtn = popupWindow.querySelector('.popup__close-btn');
let editBtn = document.querySelector('.profile-info__edit-button');

function togglePopupWindow() {
  popupWindow.classList.toggle('popup_opened');
}

editBtn.addEventListener('click', togglePopupWindow);
popupWindowCloseBtn.addEventListener('click', togglePopupWindow);

function popupOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    togglePopupWindow();
  }
}

popupWindow.addEventListener('click', popupOverlayClick);

let form = document.querySelector('.popup-form');
let inputName = form.querySelector('#username');
let inputJob = form.querySelector('#job');
let submitBtn = form.querySelector('.popup-form__submit-btn');

function formSubmitHandler (evt) {
  evt.preventDefault();
  let inputNameValue = inputName.value;
  let inputJobValue = inputJob.value;
  let username = document.querySelector('.profile-info__name');
  let job = document.querySelector('.profile-info__job');
  username.textContent = `${inputNameValue}`;
  job.textContent = `${inputJobValue}`;
}

form.addEventListener('submit', formSubmitHandler);
submitBtn.addEventListener('click', togglePopupWindow);
