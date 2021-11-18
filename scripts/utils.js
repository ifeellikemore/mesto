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

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
}

function closePopupOnEsc(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
}
