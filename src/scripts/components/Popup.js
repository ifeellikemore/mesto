export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupSelector.querySelector('.popup__close-btn');
  }

  open() {
    this._popupSelector.classList.add('popup_opened');

  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    const ESC_KEYCODE = 27;
    if (evt.keyCode === ESC_KEYCODE) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
    this._popupSelector.addEventListener("click", (evt) => {
          if (evt.target === evt.currentTarget) {
            this.close();
          }
        });
    }
}
