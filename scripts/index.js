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
const inputName = editInfoForm.querySelector('#username');
const inputJob = editInfoForm.querySelector('#job');
const pictureTitle = addPictureForm.querySelector('#pictureTitle');
const pictureLink = addPictureForm.querySelector('#pictureLink');
const username = document.querySelector('.profile-info__name');
const job = document.querySelector('.profile-info__job');
let fullsizePicture = imagePopup.querySelector('.popup__picture');
let fullsizePictureCaption = imagePopup.querySelector('.popup__caption');
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
const initialCardsTemplate = document.querySelector('#elements-template').content;
const elementsSection = document.querySelector('.elements');

const addPicture = (picture) => {
  let sectionElement = initialCardsTemplate.cloneNode(true);
  let elementPicture = sectionElement.querySelector('.element__pic');
  let elementTitle = sectionElement.querySelector('.element__title');
  let pictureLikeButton = sectionElement.querySelector('.element__like-btn');
  let pictureDeleteButton = sectionElement.querySelector('.element__delete-btn');

  elementPicture.src = picture.link;
  elementPicture.alt = picture.alt;
  elementTitle.textContent = picture.name;

  pictureLikeButton.addEventListener('click', clickLikeButton);
  pictureDeleteButton.addEventListener('click', removePicture);
  elementPicture.addEventListener('click', openPicturePreviewPopup);

  elementsSection.prepend(sectionElement);
};

initialCards.forEach(addPicture);

function openAddPicturePopup() {
  addPicturePopupWindow.classList.add('popup_opened');
}

function openEditInfoPopup() {
  inputName.value = username.textContent;
  inputJob.value = job.textContent;
  editInfoPopupWindow.classList.add('popup_opened');
}

function openPicturePreviewPopup(evt) {
  fullsizePicture.src = evt.target.src;
  fullsizePicture.alt = evt.target.alt;
  fullsizePictureCaption.textContent = evt.target.parentNode.querySelector('.element__title').textContent;
  imagePopup.classList.add('popup_opened');
}

function closePopupWindow() {
  editInfoPopupWindow.classList.remove('popup_opened');
  addPicturePopupWindow.classList.remove('popup_opened');
  imagePopup.classList.remove('popup_opened');
}

// закомментировано на будущее :) (close pop-up window by clicking on the overlay layer)
// function popupOverlayClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopupWindow();
//   }
// }
// popupWindow.addEventListener('click', popupOverlayClick);

function editInfoFormSubmitHandler (evt) {
  evt.preventDefault();
  username.textContent = inputName.value;
  job.textContent = inputJob.value;
  closePopupWindow();
}

function addPictureFormSumbitHandler (event) {
  event.preventDefault();

  const picture = {
    name: pictureTitle.value,
    link: pictureLink.value,
    alt: pictureTitle.value
  }

  // initialCards.unshift(picture); - add the picture to the beginning of the array, commented for future use.
  addPicture(picture);

  pictureTitle.value = '';
  pictureLink.value = '';

  closePopupWindow();
}

function clickLikeButton (evt) {
  evt.target.classList.toggle('element__like-btn_active');
}

function removePicture(evt) {
  evt.target.closest('.element').remove();
}

addPictureBtn.addEventListener('click', openAddPicturePopup);
editBtn.addEventListener('click', openEditInfoPopup);
editInfoPopupWindowCloseBtn.addEventListener('click', closePopupWindow);
addPicturePopupWindowCloseBtn.addEventListener('click', closePopupWindow);
picturePreviewPopupCloseBtn.addEventListener('click', closePopupWindow);
editInfoForm.addEventListener('submit', editInfoFormSubmitHandler);
addPictureForm.addEventListener('submit', addPictureFormSumbitHandler);
