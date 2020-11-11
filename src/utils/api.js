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

//отправление формы
//onClick
//'submit'

// const formSubmit = () => {
//   fetch('    ', {
//     method: 'POST',
//     body: JSON.stringify(formData),
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then((res) => {
//       if (!res.ok) {
//         return Promise.reject(`Что-то пошло не так: ${res.status}`)
//       }
//     })
//     .then((response) => {
//       console.log(response)
//       form.reset() // очищаем поля формы ??????
//     })
//     .catch((err) => console.error(err))
// }

// const handleSubmit = (evt) => {
//   evt.preventDefault()
//   formSubmit()
//   reset()
// }
