import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._fullsizePicture = this._popupSelector.querySelector(".popup__picture");
    this._fullsizePictureCaption = this._popupSelector.querySelector(".popup__caption");
  }

  open(link, alt, name) {
      this._fullsizePicture.src = link;
      this._fullsizePicture.alt = alt;
      this._fullsizePictureCaption.textContent = name;

    super.open();
  }
}
