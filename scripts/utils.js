import { FormValidator } from './FormValidator.js';

const ESC_KEYCODE = 27;

export const imagePopup = document.querySelector(".popup_type_image");
export const config = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__input",
  inputErrorClass: "popup-form__input_type_error",
  spanErrorClass: "popup-form__input-error_active",
  submitButtonSelector: ".popup-form__submit-btn",
  inactiveButtonClass: "popup-form__submit-btn_inactive"
  };

export const formValidatorUserInfo = new FormValidator(config, '#userInfo');
formValidatorUserInfo.enableValidation();
export const formValidatorAddPicture = new FormValidator(config, '#addPicture');
formValidatorAddPicture.enableValidation();

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
  formValidatorUserInfo.clearPopupFormErrors();
  formValidatorAddPicture.clearPopupFormErrors();
}

function closePopupOnEsc(evt) {
  const activePopup = document.querySelector(".popup_opened");
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup(activePopup);
  }
}
