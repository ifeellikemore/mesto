const editInfoPopupWindow = document.querySelector(".popup_type_edit-user-info");
const addPicturePopupWindow = document.querySelector(".popup_type_add-new-card");
const profile = document.querySelector('.profile');
export const editBtn = profile.querySelector(".profile-info__edit-button");
export const addPictureBtn = profile.querySelector(".profile__add-button");
export const editInfoForm = editInfoPopupWindow.querySelector(".popup-form");
const addPictureForm = addPicturePopupWindow.querySelector(".popup-form");
export const inputName = editInfoForm.querySelector("#username-input");
export const inputJob = editInfoForm.querySelector("#job-input");
export const pictureTitle = addPictureForm.querySelector("#pictureTitle-input");
export const pictureLink = addPictureForm.querySelector("#pictureLink-input");
export const username = profile.querySelector(".profile-info__name");
export const job = profile.querySelector(".profile-info__job");
export const cardsContainerSelector = '.elements';
export const ESC_KEYCODE = 27;
export const initialCards = [
  {
    name: 'Йосемите',
    link: 'https://images.unsplash.com/photo-1600562732757-7e5a9490b37d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    alt: 'Национальный парк Йосемите, Калифорния',
  },
  {
    name: 'Дикие животные Калифорнии',
    link: 'https://images.unsplash.com/photo-1606287201181-42f1340c1306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Дикие животные Калифорнии',
  },
  {
    name: 'Пальмы',
    link: 'https://images.unsplash.com/photo-1536683971968-835ee504010f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Пальмы, Калифорния',
  },
  {
    name: 'Мост "Золотые Ворота"',
    link: 'https://images.unsplash.com/photo-1504912490605-888b88cd7b94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    alt: 'Мост Золотые Ворота, Калифорния',
  },
  {
    name: 'Хайвей Калифорния',
    link: 'https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Шоссе, Калифорния',
  },
  {
    name: 'Биг Сюр',
    link: 'https://images.unsplash.com/photo-1557409220-4b1eb4229462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'Биг Сюр, Калифорния',
  },
];
