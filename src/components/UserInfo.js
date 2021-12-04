export default class UserInfo {
  constructor({ usernameSelector, jobSelector }) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      username: this._usernameElement.textContent,
      job: this._jobElement.textContent
    };
  }

  setUserInfo({username, job}) {
    this._usernameElement.textContent = username;
    this._jobElement.textContent = job;
  }
}
