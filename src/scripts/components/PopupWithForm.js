import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
 constructor(popupSelector, { formSubmitHandler }) {
   super(popupSelector);
   this._formSumbitHandler = formSubmitHandler;
   this._popupForm = this._popupSelector.querySelector('.popup-form');
   this._popupCloseBtn = this._popupSelector.querySelector('.popup__close-btn');
 }

 _getInputValues() {
  const inputList = Array.from(this._popupForm.querySelectorAll('.popup-form__input'));
  const inputValues = [];
  inputList.forEach((input) => {
    inputValues.push(input.value);
  })
  return inputValues;
 }

 close() {
  super.close();
  this._popupForm.reset();
 }

 setEventListeners() {
  super.setEventListeners();
  this._popupForm.addEventListener('submit', this._formSumbitHandler);
  }
}
