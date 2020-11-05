import React, { useState } from 'react'

function LinksMenu(props) {

  const dropdownMenuBtnRef = React.useRef();

  const [isLinksMenuOpened, setisLinksMenuOpened] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Стриминги");
  console.log(buttonText)

  const changeText = (text) => setButtonText(text);

  
  const onClick = () => {
    setisLinksMenuOpened(!isLinksMenuOpened);
    if (!isLinksMenuOpened) {
      setButtonText(' ')
    } else { setButtonText('Стриминги') }
  };

  
  return (
    <div className="turbina__dropdown-menu">
    <button onClick={onClick} ref={dropdownMenuBtnRef} className={`turbina__dropbtn ${isLinksMenuOpened && 'turbina__dropbtn-active' }`}>{buttonText}</button>

    <ul className="turbina__music-links" className={`turbina__music-links ${isLinksMenuOpened && 'opened'}`}>
      <li className="turbina__music-elem">
        <a
          href="https://music.yandex.ru/home"
          className="turbina__music-link"
          lang="ru"
        >
          Яндекс.Музыка ↗
        </a>
      </li>
      <li className="turbina__music-elem">
        <a
          href="https://www.spotify.com/ru-ru/"
          className="turbina__music-link"
          lang="en"
        >
          Spotify ↗
        </a>
      </li>
      <li className="turbina__music-elem">
        <a
          href="https://music.apple.com/us/browse"
          className="turbina__music-link"
          lang="en"
        >
          Apple Music ↗
        </a>
      </li>
      <li className="turbina__music-elem">
        <a
          href="https://mp3.vkmusic.me/"
          className="turbina__music-link"
          lang="en"
        >
          VK Music ↗
        </a>
      </li>
    </ul>
  </div>
  )
}

export default LinksMenu