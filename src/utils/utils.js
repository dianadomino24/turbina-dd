//дефолтный цвет svg иконок в плеере
export const maincolor = '#fff'

//расчет отображения оставшегося времени проигрывания трека в плеере
export const countRemainingTime = (duration, currentTime) => {
  let sec_num = duration - currentTime
  let minutes = Math.floor(sec_num / 60)
  let seconds = Math.round(sec_num - minutes * 60)

  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return minutes + ':' + seconds
}

//ссылки для выпадающего меню
export const musicResourcesLinks = [
  {
    url: 'https://music.yandex.ru/home',
    resourceName: 'Яндекс.Музыка ↗',
    id: 1,
  },
  {
    url: 'https://www.spotify.com/ru-ru/',
    resourceName: 'Spotify ↗',
    id: 2,
  },
  {
    url: 'https://music.apple.com/us/browse',
    resourceName: 'Apple Music ↗',
    id: 3,
  },
  {
    url: 'https://mp3.vkmusic.me/',
    resourceName: 'VK Music ↗',
    id: 4,
  },
]

export const logoLink = 'https://marshakbooks.ru/'
export const footerLinkOfYandex = '#'
