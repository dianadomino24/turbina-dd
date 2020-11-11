class Api {
  constructor(options) {
    this._url = options.url
    this._headers = options.headers
  }

  putInfo() {
    return fetch(`${this._url}`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      // если ошибка, отклоняем промис
      Promise.reject(new Error(`Ошибка: ${res.status}`))
    })
  }

  getSongs() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`)
      })
      .then((data) => {
        return data
      })
      .catch((err) => {
        console.log(err) // "Что-то пошло не так: ..."
      })
  }
}

const api = new Api({
  url: 'https://xxx',
  headers: {
    authorization: 'xxx',
    'Content-Type': 'application/json',
  },
})

// const serverSongs = getSongsList()

export default api
