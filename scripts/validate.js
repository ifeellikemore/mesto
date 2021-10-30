function showInputError(formElement, inputElement, errorMessage, {inputErrorClass, spanErrorClass}) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(spanErrorClass);
}

function hideInputError(formElement, inputElement, {inputErrorClass, spanErrorClass}) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(spanErrorClass);
  errorElement.textContent = "";
}

function checkInputValidity(formElement, inputElement, validateEmpty, rest) {
  if (!inputElement.validity.valid && (!inputElement.validity.valueMissing || validateEmpty)) {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest);
  } else {
    hideInputError(formElement, inputElement, rest);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function updateSubmitState(formElement, {inputSelector, submitButtonSelector, inactiveButtonClass}) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

function setFormsEventListeners(formElement, selectors) {
  const inputList = Array.from(
    formElement.querySelectorAll(selectors.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, true, selectors);
      updateSubmitState(formElement, selectors);
    });
  });
}

function enableValidation({formSelector, ...rest}) {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setFormsEventListeners(formElement, rest);
  });
}

enableValidation({
  formSelector: ".popup-form",
  inputSelector: ".popup-form__input",
  inputErrorClass: "popup-form__input_type_error",
  spanErrorClass: "popup-form__input-error_active",
  submitButtonSelector: ".popup-form__submit-btn",
  inactiveButtonClass: "popup-form__submit-btn_inactive",
});
