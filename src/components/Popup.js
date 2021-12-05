import { ESC_KEYCODE } from "../utils/constants";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClick = this._handleEscClose.bind(this)
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener("keydown", this._handleEscClick);

  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener("keydown", this._handleEscClick);
  }

  _handleEscClose(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.querySelector('.popup__close-btn').addEventListener("click", () => {
      this.close();
    });
    this._popupSelector.addEventListener("click", (evt) => {
          if (evt.target === evt.currentTarget) {
            this.close();
          }
        });
    }
}
