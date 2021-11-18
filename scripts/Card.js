class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

    this._cardImage = this._element.querySelector('.element__pic');
    this._cardTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__like-btn');
    this._deleteButton = this._element.querySelector('.element__delete-btn');

    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._alt;

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._clickLikeButton();
    });
    this._deleteButton.addEventListener('click', () => {
      this._removePicture();
    })
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._alt, this._name);
    })
  }

  _clickLikeButton() {
    this._likeButton.classList.toggle('element__like-btn_active');
  }

  _removePicture() {
    this._deleteButton.closest('.element').remove();
  }
}

export { Card };
