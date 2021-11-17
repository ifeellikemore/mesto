import { openPopup, imagePopup } from './utils.js';

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
  }

  _createCard() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._createCard();
    this._setEventListeners();

    this._element.querySelector('.element__pic').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__pic').alt = this._alt;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._clickLikeButton();
    });
    this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
      this._removePicture();
    })
    this._element.querySelector('.element__pic').addEventListener('click', () => {
      this._openFullSizePicture();
    })
  }

  _clickLikeButton() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active');
  }

  _removePicture() {
    this._element.querySelector('.element__delete-btn').closest('.element').remove();
  }

  _openFullSizePicture() {
    document.querySelector('.popup__picture').src = this._element.querySelector('.element__pic').src;
    document.querySelector('.popup__picture').alt = this._element.querySelector('.element__pic').alt;
    document.querySelector('.popup__caption').textContent = this._element.querySelector('.element__title').textContent;

    openPopup(imagePopup);
  }
}

export { Card };
