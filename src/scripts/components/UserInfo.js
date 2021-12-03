class UserInfo {
  constructor({ userName, userInfo }) {
    this._userName = userName;
    this._userINfo = userInfo;
  }

  getUserInfo() {
    const userData = {
      userName: this._userName,
      userInfo: this._userINfo
    };

    return userData;
  }

  setUserInfo() {
    inputName.value = username.textContent;
    inputJob.value = job.textContent;
  }
}
