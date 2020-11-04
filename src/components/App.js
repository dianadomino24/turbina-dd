import React, { useEffect, useState } from 'react'
// import api from '../utils/api'
import Main from './Main'
import Footer from './Footer'

function App() {
  //   const dropdownMenuBtn = document.querySelector('.turbina__dropbtn')
  //   /* When the user clicks on the button,
  //   toggle between hiding and showing the dropdown content */
  //   function showDropdownMenu() {
  //     document.querySelector('.turbina__music-links').classList.toggle('opened')
  //   }

  //   function changeDropdownBtnStyle(event) {
  //     event.target.classList.toggle('turbina__dropbtn-active')
  //   }

  //   const bindClick = () => {
  //     console.log('clicked')
  //     showDropdownMenu()
  //     changeDropdownBtnStyle()
  //     if (dropdownMenuBtn.classList.contains('turbina__dropbtn-active')) {
  //       dropdownMenuBtn.textContent = ' '
  //     } else {
  //       dropdownMenuBtn.textContent = 'Стриминги'
  //     }
  //   }

  //   console.log(dropdownMenuBtn)

  //   dropdownMenuBtn.addEventListener('click', bindClick)

  return (
    <body>
      <div class="page">
        <Main />
        <Footer />
      </div>
    </body>
  )
}

export default App
