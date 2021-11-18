import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup, imagePopup, config } from './utils.js';

const formValidatorUserInfo = new FormValidator(config, '#userInfo');
formValidatorUserInfo.enableValidation();
const formValidatorAddPicture = new FormValidator(config, '#addPicture');
formValidatorAddPicture.enableValidation();

function createCard(item) {
  const card = new Card(item, '.elements-template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

initialCards.forEach((item) => {
  elementsSection.prepend(createCard(item));
});

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

  elementsSection.prepend(createCard(params));

  addPictureForm.reset();
  closePopup(addPicturePopupWindow);
}

function handleCardClick(link, alt, name) {
  fullsizePicture.src = link;
  fullsizePicture.alt = alt;
  fullsizePictureCaption.textContent = name;

  openPopup(imagePopup);
}

function getUserInfoValues() {
  inputName.value = username.textContent;
  inputJob.value = job.textContent;
}

addPictureBtn.addEventListener("click", () => {
  addPictureForm.reset();
  openPopup(addPicturePopupWindow);
  formValidatorAddPicture.clearPopupFormErrors();
  formValidatorAddPicture.updateSubmitState();
});

editBtn.addEventListener("click", () => {
  getUserInfoValues();
  openPopup(editInfoPopupWindow);
  formValidatorUserInfo.clearPopupFormErrors();
  formValidatorUserInfo.updateSubmitState();
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
