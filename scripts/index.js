import { Card } from './Card.js';
import { openPopup, closePopup, imagePopup, formValidatorAddPicture, formValidatorUserInfo, config } from './utils.js';

const editInfoPopupWindow = document.querySelector(".popup_type_edit-user-info");
const addPicturePopupWindow = document.querySelector(".popup_type_add-new-card");
const editInfoPopupWindowCloseBtn = editInfoPopupWindow.querySelector(".popup__close-btn");
const addPicturePopupWindowCloseBtn = addPicturePopupWindow.querySelector(".popup__close-btn");
const picturePreviewPopupCloseBtn = imagePopup.querySelector(".popup__close-btn");
const profile = document.querySelector('.profile');
const editBtn = profile.querySelector(".profile-info__edit-button");
const addPictureBtn = profile.querySelector(".profile__add-button");
const editInfoForm = editInfoPopupWindow.querySelector(".popup-form");
const addPictureForm = addPicturePopupWindow.querySelector(".popup-form");
const inputName = editInfoForm.querySelector("#username-input");
const inputJob = editInfoForm.querySelector("#job-input");
const pictureTitle = addPictureForm.querySelector("#pictureTitle-input");
const pictureLink = addPictureForm.querySelector("#pictureLink-input");
const username = profile.querySelector(".profile-info__name");
const job = profile.querySelector(".profile-info__job");
const fullsizePicture = imagePopup.querySelector(".popup__picture");
const fullsizePictureCaption = imagePopup.querySelector(".popup__caption");

const initialCards = [
  {
    name: 'Йосемите',
    link: 'https://images.unsplash.com/photo-1600562732757-7e5a9490b37d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    alt: 'Национальный парк Йосемите, Калифорния',
  },
  {
    name: 'Дикие животные Калифорнии',
    link: 'https://images.unsplash.com/photo-1606287201181-42f1340c1306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Дикие животные Калифорнии',
  },
  {
    name: 'Пальмы',
    link: 'https://images.unsplash.com/photo-1536683971968-835ee504010f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Пальмы, Калифорния',
  },
  {
    name: 'Мост "Золотые Ворота"',
    link: 'https://images.unsplash.com/photo-1504912490605-888b88cd7b94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    alt: 'Мост Золотые Ворота, Калифорния',
  },
  {
    name: 'Хайвей Калифорния',
    link: 'https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Шоссе, Калифорния',
  },
  {
    name: 'Биг Сюр',
    link: 'https://images.unsplash.com/photo-1557409220-4b1eb4229462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'Биг Сюр, Калифорния',
  },
];

initialCards.forEach((item) => {
  const card = new Card(item, '.elements-template');
  const cardElement = card.generateCard();

  document.querySelector('.elements').prepend(cardElement);
});

function validateOnOpen(popup) {
  const formElement = popup.querySelector(".popup-form");
  formValidatorUserInfo.updateSubmitState();
  formValidatorAddPicture.updateSubmitState();
}

function closePopupOnOverlay() {
  const overlayPopups = Array.from(document.querySelectorAll(".popup"));

  overlayPopups.forEach((overlayPopup) => {
    overlayPopup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(overlayPopup);
      }
    });
  });
}

closePopupOnOverlay();

function editInfoFormSubmitHandler(evt) {
  evt.preventDefault();
  username.textContent = inputName.value;
  job.textContent = inputJob.value;
  closePopup(editInfoPopupWindow);
}

function addCardFormSumbitHandler(event) {
  event.preventDefault();

  const params = {
    name: pictureTitle.value,
    link: pictureLink.value,
    alt: pictureTitle.value,
  };

  const card = new Card(params, '.elements-template');
  const cardElement = card.generateCard();
  document.querySelector(".elements").prepend(cardElement);

  addPictureForm.reset();
  closePopup(addPicturePopupWindow);
}

function getUserInfoValues() {
  inputName.value = username.textContent;
  inputJob.value = job.textContent;
}

addPictureBtn.addEventListener("click", () => {
  addPictureForm.reset();
  openPopup(addPicturePopupWindow);
  validateOnOpen(addPicturePopupWindow, config);
});

editBtn.addEventListener("click", () => {
  getUserInfoValues();
  openPopup(editInfoPopupWindow);
  validateOnOpen(editInfoPopupWindow, config);
});

editInfoPopupWindowCloseBtn.addEventListener("click", () => {
  closePopup(editInfoPopupWindow);
});

addPicturePopupWindowCloseBtn.addEventListener("click", () => {
  closePopup(addPicturePopupWindow);
});

picturePreviewPopupCloseBtn.addEventListener("click", () => {
  closePopup(imagePopup);
});

editInfoForm.addEventListener("submit", editInfoFormSubmitHandler);

addPictureForm.addEventListener("submit", addCardFormSumbitHandler);
