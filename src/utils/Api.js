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
}

const api = new Api({
  url: 'https://xxx',
  headers: {
    authorization: 'xxx',
    'Content-Type': 'application/json',
  },
})

// получение объекта с песнями от сервера

// function getSongsList() {
//   fetch('https://api')
//     .then((res) => {
//       if (res.ok) {
//         return res.json()
//       }
//       return Promise.reject(`Что-то пошло не так: ${res.status}`)
//     })
//     .then((data) => {
//       return data
//     })
//     .catch((err) => {
//       console.log(err) // "Что-то пошло не так: ..."
//     })
// }

// const serverSongs = getSongsList()

export default api
