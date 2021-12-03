import './index.css';
import '../scripts/constants.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { config } from '../scripts/utils.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo';
import { initialCards, addPictureBtn, editBtn, username, inputName, job, inputJob, pictureTitle, pictureLink, cardsContainerSelector } from '../scripts/constants.js';

const formValidatorUserInfo = new FormValidator(config, '#userInfo');
formValidatorUserInfo.enableValidation();
const formValidatorAddPicture = new FormValidator(config, '#addPicture');
formValidatorAddPicture.enableValidation();

const userInfo = new UserInfo({
  userName: username.textContent,
  userInfo: job.textContent
});
userInfo.getUserInfo();

const popupUserInfo = new PopupWithForm('.popup_type_edit-user-info', {
  formSubmitHandler: (evt) => {
    evt.preventDefault();
    username.textContent = inputName.value;
    job.textContent = inputJob.value;
    popupUserInfo.close();
  }
});
popupUserInfo.setEventListeners();

const popupAddPicture = new PopupWithForm('.popup_type_add-new-card', {
  formSubmitHandler: (evt) => {
    evt.preventDefault();
    console.log('wertfgh');
      const params = [{
      name: pictureTitle.value,
      link: pictureLink.value,
      alt: pictureTitle.value,
    }];

    const newCard = new Section({
      items: params,
      renderer: (item) => {
        const card = new Card(item, '.elements-template', handleCardClick);
        const cardElement = card.generateCard();

        newCard.addItem(cardElement);
      }
    }, cardsContainerSelector);
    newCard.renderItems();
  popupAddPicture.close();
  }
});
popupAddPicture.setEventListeners();

const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.elements-template', handleCardClick);
    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
  }
}, cardsContainerSelector);

cardList.renderItems();

function handleCardClick(link, alt, name) {
  popupImage.open(link, alt, name);
}

addPictureBtn.addEventListener("click", () => {
  popupAddPicture.open();
  formValidatorAddPicture.clearPopupFormErrors();
  formValidatorAddPicture.updateSubmitState();
});

editBtn.addEventListener("click", () => {
  popupUserInfo.open();
  formValidatorUserInfo.clearPopupFormErrors();
  formValidatorUserInfo.updateSubmitState();
});
