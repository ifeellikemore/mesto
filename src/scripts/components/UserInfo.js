export default class UserInfo {
  constructor({ userName, userInfo }) {
    this._userName = userName;
    this._userInfo = userInfo;
    this._inputName = document.querySelector('#username-input');
    this._inputJob = document.querySelector('#job-input');
  }

  getUserInfo() {
    const userData = {
      userName: this._userName,
      userInfo: this._userInfo
    };

    this._inputName.value = userData.userName;
    this._inputJob.value = userData.userInfo;
  }

  setUserInfo() {
    this._inputName.value = username.textContent;
    this._inputJob.value = job.textContent;
  }
}
