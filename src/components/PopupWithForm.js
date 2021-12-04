import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupSelector.querySelector('.popup-form');
    this._popupCloseBtn = this._popupSelector.querySelector('.popup__close-btn');
  }

  _getInputValues() {
    const inputList = Array.from(this._popupForm.querySelectorAll('.popup-form__input'));
    const inputValues = {};
    inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    return inputValues;
  }

  open(initialFieldValues) {
   super.open();
   if (initialFieldValues) {
    for (let field in initialFieldValues) {
      this._popupForm.elements[field].value = initialFieldValues[field];
    }
   }
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  }
}
