class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = document.getElementById(formElement);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.spanErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.spanErrorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  updateSubmitState() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _setFormsEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.updateSubmitState();
      });
    });
  }

  clearPopupFormErrors() {
    if (this._formElement) {
      const inputList = Array.from(this._formElement.querySelectorAll(".popup-form__input"));
      inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    }
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._config.formSelector));

    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });

      this._setFormsEventListeners();
    });
  }
}

export { FormValidator };
