const editInfoPopupWindow = document.querySelector(".popup_type_edit-user-info");
const addPicturePopupWindow = document.querySelector(".popup_type_add-new-card");
const imagePopup = document.querySelector(".popup_type_image");
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
const initialCardsTemplate = document.querySelector("#elements-template").content;
const elementsSection = document.querySelector(".elements");
const ESC_KEYCODE = 27;
const config = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__input",
  inputErrorClass: "popup-form__input_type_error",
  spanErrorClass: "popup-form__input-error_active",
  submitButtonSelector: ".popup-form__submit-btn",
  inactiveButtonClass: "popup-form__submit-btn_inactive"
};

const createCard = (card) => {
  const sectionElement = initialCardsTemplate.cloneNode(true);
  const elementPicture = sectionElement.querySelector(".element__pic");
  const elementTitle = sectionElement.querySelector(".element__title");
  const pictureLikeButton = sectionElement.querySelector(".element__like-btn");
  const pictureDeleteButton = sectionElement.querySelector(".element__delete-btn");

  elementPicture.src = card.link;
  elementPicture.alt = card.alt;
  elementTitle.textContent = card.name;

  pictureLikeButton.addEventListener("click", clickLikeButton);
  pictureDeleteButton.addEventListener("click", removePicture);
  elementPicture.addEventListener("click", openFullSizePicture);

  return sectionElement;
};

const addCard = (card) => {
  const sectionElement = createCard(card);
  elementsSection.prepend(sectionElement);
};

initialCards.forEach(addCard);

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
}

function openFullSizePicture (evt) {
  fullsizePicture.src = evt.target.src;
  fullsizePicture.alt = evt.target.alt;
  fullsizePictureCaption.textContent = evt.target.parentNode.querySelector(".element__title").textContent;
  openPopup(imagePopup);
}

function clearPopupFormErrors(popup, config) {
  const formElement = popup.querySelector(".popup-form");
  if (formElement) {
    const inputList = Array.from(formElement.querySelectorAll(".popup-form__input"));
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, config);
    });
  }
}

function validateOnOpen(popup, config) {
  const formElement = popup.querySelector(".popup-form");
  updateSubmitState(formElement, config);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
}

function closePopupOnEsc(evt) {
  const activePopup = document.querySelector(".popup_opened");
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup(activePopup);
    clearPopupFormErrors(activePopup, config);
  }
}

function closePopupOnOverlay() {
  const overlayPopups = Array.from(document.querySelectorAll(".popup"));

  overlayPopups.forEach((overlayPopup) => {
    overlayPopup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(overlayPopup);
        clearPopupFormErrors(overlayPopup, config);
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

  const card = {
    name: pictureTitle.value,
    link: pictureLink.value,
    alt: pictureTitle.value,
  };

  // initialCards.unshift(picture); - add the picture to the beginning of the array, commented for future use.
  createCard(card);
  addCard(card);
  addPictureForm.reset();
  closePopup(addPicturePopupWindow);
}

function clickLikeButton(evt) {
  evt.target.classList.toggle("element__like-btn_active");
}

function removePicture(evt) {
  evt.target.closest(".element").remove();
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
  clearPopupFormErrors(editInfoPopupWindow, config);
});

addPicturePopupWindowCloseBtn.addEventListener("click", () => {
  closePopup(addPicturePopupWindow);
  clearPopupFormErrors(addPicturePopupWindow, config);
});

picturePreviewPopupCloseBtn.addEventListener("click", () => {
  closePopup(imagePopup);
});

editInfoForm.addEventListener("submit", editInfoFormSubmitHandler);

addPictureForm.addEventListener("submit", addCardFormSumbitHandler);
