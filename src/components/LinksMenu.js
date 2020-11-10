import React from 'react'
import cn from 'classnames'

function LinksMenu(props) {
    const dropdownMenuBtnRef = React.useRef(null)

    const [isLinksMenuOpened, setIsLinksMenuOpened] = React.useState(false)

    const onClick = () => {
        setIsLinksMenuOpened(!isLinksMenuOpened)
    }

    return (
        <div className="turbina__dropdown-menu">
            <button
                onClick={onClick}
                ref={dropdownMenuBtnRef}
                className={cn('turbina__dropbtn', {
                    turbina__dropbtn_active: isLinksMenuOpened,
                })}
            >
                {isLinksMenuOpened ? ' ' : 'Стриминги'}
            </button>

            <ul
                className={cn('turbina__music-links', {
                    opened: isLinksMenuOpened,
                })}
            >
                <li className="turbina__music-elem">
                    <a
                        href="https://music.yandex.ru/home"
                        className="turbina__music-link"
                        lang="ru"
                        target="blank"
                    >
                        Яндекс.Музыка ↗
                    </a>
                </li>
                <li className="turbina__music-elem">
                    <a
                        href="https://www.spotify.com/ru-ru/"
                        className="turbina__music-link"
                        lang="en"
                        target="blank"
                    >
                        Spotify ↗
                    </a>
                </li>
                <li className="turbina__music-elem">
                    <a
                        href="https://music.apple.com/us/browse"
                        className="turbina__music-link"
                        lang="en"
                        target="blank"
                    >
                        Apple Music ↗
                    </a>
                </li>
                <li className="turbina__music-elem">
                    <a
                        href="https://mp3.vkmusic.me/"
                        className="turbina__music-link"
                        lang="en"
                        target="blank"
                    >
                        VK Music ↗
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default LinksMenu
