import './index.css';
import '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import { config } from '../utils/utils.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, addPictureBtn, editBtn, pictureTitle, pictureLink, cardsContainerSelector } from '../utils/constants.js';

const formValidatorUserInfo = new FormValidator(config, '#userInfo');
formValidatorUserInfo.enableValidation();
const formValidatorAddPicture = new FormValidator(config, '#addPicture');
formValidatorAddPicture.enableValidation();

const userInfo = new UserInfo({
  usernameSelector: ".profile-info__name",
  jobSelector: ".profile-info__job"
});

const popupUserInfo = new PopupWithForm('.popup_type_edit-user-info', {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    const inputValues = popupUserInfo._getInputValues();
    userInfo.setUserInfo(inputValues);
    popupUserInfo.close();
  }
});
popupUserInfo.setEventListeners();

function createCard(data) {
  return new Card(data, '.elements-template', handleCardClick);
}

const popupAddPicture = new PopupWithForm('.popup_type_add-new-card', {
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    const card = createCard({
      name: pictureTitle.value,
      link: pictureLink.value,
      alt: pictureTitle.value,
    })
    cardList.addItem(card.generateCard());
    popupAddPicture.close();
  }
});
popupAddPicture.setEventListeners();

const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item).generateCard());
  }
}, cardsContainerSelector);

cardList.renderItems();

function handleCardClick(link, alt, name) {
  popupImage.open(link, alt, name);
}

addPictureBtn.addEventListener("click", () => {
  formValidatorAddPicture.updateSubmitState();
  formValidatorAddPicture.clearPopupFormErrors();
  popupAddPicture.open();

});

editBtn.addEventListener("click", () => {
  formValidatorUserInfo.updateSubmitState();
  formValidatorUserInfo.clearPopupFormErrors();
  popupUserInfo.open(userInfo.getUserInfo());

});
