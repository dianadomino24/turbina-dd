import React from 'react'
import cn from 'classnames'
import { musicResourcesLinks } from '../utils/utils'

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
        {musicResourcesLinks.map((el) => {
          return (
            <li className="turbina__music-elem">
              <a
                href={el.url}
                className="turbina__music-link"
                lang="ru"
                target="blank"
              >
                {el.resourceName}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LinksMenu
