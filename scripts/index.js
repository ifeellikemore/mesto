const editInfoPopupWindow = document.querySelector('.popup_type_edit-user-info');
const addPicturePopupWindow = document.querySelector('.popup_type_add-new-card');
const imagePopup = document.querySelector('.popup_type_image');
const editInfoPopupWindowCloseBtn = editInfoPopupWindow.querySelector('.popup__close-btn');
const addPicturePopupWindowCloseBtn = addPicturePopupWindow.querySelector('.popup__close-btn');
const picturePreviewPopupCloseBtn = imagePopup.querySelector('.popup__close-btn');
const editBtn = document.querySelector('.profile-info__edit-button');
const addPictureBtn = document.querySelector('.profile__add-button');
const editInfoForm = editInfoPopupWindow.querySelector('.popup-form');
const addPictureForm = addPicturePopupWindow.querySelector('.popup-form');
const inputName = editInfoForm.querySelector('#username-input');
const inputJob = editInfoForm.querySelector('#job-input');
const pictureTitle = addPictureForm.querySelector('#pictureTitle-input');
const pictureLink = addPictureForm.querySelector('#pictureLink-input');
const username = document.querySelector('.profile-info__name');
const job = document.querySelector('.profile-info__job');
const fullsizePicture = imagePopup.querySelector('.popup__picture');
const fullsizePictureCaption = imagePopup.querySelector('.popup__caption');
const initialCardsTemplate = document.querySelector('#elements-template').content;
const elementsSection = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Йосемите',
    link: 'https://images.unsplash.com/photo-1600562732757-7e5a9490b37d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    alt: 'Национальный парк Йосемите, Калифорния'
  },
  {
    name: 'Дикие животные Калифорнии',
    link: 'https://images.unsplash.com/photo-1606287201181-42f1340c1306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Дикие животные Калифорнии'
  },
  {
    name: 'Пальмы',
    link: 'https://images.unsplash.com/photo-1536683971968-835ee504010f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Пальмы, Калифорния'
  },
  {
    name: 'Мост "Золотые Ворота"',
    link: 'https://images.unsplash.com/photo-1504912490605-888b88cd7b94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    alt: 'Мост Золотые Ворота, Калифорния'
  },
  {
    name: 'Хайвей Калифорния',
    link: 'https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Шоссе, Калифорния'
  },
  {
    name: 'Биг Сюр',
    link: 'https://images.unsplash.com/photo-1557409220-4b1eb4229462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'Биг Сюр, Калифорния'
  }
];


const createCard = (card) => {
  const sectionElement = initialCardsTemplate.cloneNode(true);
  const elementPicture = sectionElement.querySelector('.element__pic');
  const elementTitle = sectionElement.querySelector('.element__title');
  const pictureLikeButton = sectionElement.querySelector('.element__like-btn');
  const pictureDeleteButton = sectionElement.querySelector('.element__delete-btn');

  elementPicture.src = card.link;
  elementPicture.alt = card.alt;
  elementTitle.textContent = card.name;

  pictureLikeButton.addEventListener('click', clickLikeButton);
  pictureDeleteButton.addEventListener('click', removePicture);
  elementPicture.addEventListener('click', (evt) => {
    fullsizePicture.src = evt.target.src;
    fullsizePicture.alt = evt.target.alt;
    fullsizePictureCaption.textContent = evt.target.parentNode.querySelector('.element__title').textContent;
    openPopup(imagePopup);
  });

  return sectionElement;
}

const addCard = (card) => {
  const sectionElement = createCard(card);
  elementsSection.prepend(sectionElement);
}

initialCards.forEach(createCard);
initialCards.forEach(addCard);

function openPopup (popup) {
  popup.classList.add('popup_opened');
  const formElement = popup.querySelector('.popup-form');
  updateSubmitState(formElement);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function setPopupCloseEventListeners() {
  const overlayPopups = Array.from(document.querySelectorAll('.popup'));

  overlayPopups.forEach((overlayPopup) => {
    overlayPopup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(overlayPopup);
      }
    });
      document.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27) {
          closePopup(overlayPopup);
        }
    });
  });
}

setPopupCloseEventListeners();

function editInfoFormSubmitHandler (evt) {
    evt.preventDefault();
    username.textContent = inputName.value;
    job.textContent = inputJob.value;
    closePopup(editInfoPopupWindow);
}

function addCardFormSumbitHandler (event) {
    event.preventDefault();

    const card = {
      name: pictureTitle.value,
      link: pictureLink.value,
      alt: pictureTitle.value
    };

  // initialCards.unshift(picture); - add the picture to the beginning of the array, commented for future use.
  createCard(card);
  addCard(card);
  addPictureForm.reset();
  closePopup(addPicturePopupWindow);
}

function clickLikeButton (evt) {
  evt.target.classList.toggle('element__like-btn_active');
}

function removePicture(evt) {
  evt.target.closest('.element').remove();
}

function showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('popup-form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup-form__input-error_active');
}

function hideInputError (formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup-form__input_type_error');
  errorElement.classList.remove('popup-form__input-error_active');
  errorElement.textContent = '';
}

function checkInputValidity (formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError (formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError (formElement, inputElement);
  }
}

function setFormsEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup-form__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      updateSubmitState(formElement);
    });
  });
}

function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.popup-form'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setFormsEventListeners(formElement);
  });
}

enableValidation();

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function updateSubmitState (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup-form__input'));
  const buttonElement = formElement.querySelector('.popup-form__submit-btn');
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup-form__submit-btn_inactive');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup-form__submit-btn_inactive');
  }
}

addPictureBtn.addEventListener('click', () => {
  openPopup(addPicturePopupWindow);
});
editBtn.addEventListener('click', () => {
  inputName.value = username.textContent;
  inputJob.value = job.textContent;
  openPopup(editInfoPopupWindow);
});
editInfoPopupWindowCloseBtn.addEventListener('click', () => {
  closePopup(editInfoPopupWindow);
});
addPicturePopupWindowCloseBtn.addEventListener('click', () => {
  closePopup(addPicturePopupWindow);
});
picturePreviewPopupCloseBtn.addEventListener('click', () => {
  closePopup(imagePopup);
});
editInfoForm.addEventListener('submit', editInfoFormSubmitHandler);
addPictureForm.addEventListener('submit', addCardFormSumbitHandler);
