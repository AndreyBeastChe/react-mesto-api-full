class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser() {
    debugger
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
    }, 
    }).then(this.checkResponse);
  }

  setUser({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
    }, 
      body: JSON.stringify({ name, about }),
    }).then(this.checkResponse);
  }

  gerCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
    }, 
    }).then(this.checkResponse);
  }

  addCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
    }, 
      body: JSON.stringify({ name, link }),
    }).then(this.checkResponse);
  }

  changeAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
    }, 
      body: JSON.stringify({ avatar }),
    }).then(this.checkResponse);
  }

  likeCard(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
    }, 
    }).then(this.checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
    }, 
    }).then(this.checkResponse);
  }
}

const api = new Api({
  url: "https://api.vse-na-meste.nomoredomains.xyz",
});

export default api;