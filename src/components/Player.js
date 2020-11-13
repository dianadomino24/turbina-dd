import React, { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import { serverSongs } from '../utils/song-list'
import Release from './Release'
import { maincolor, countRemainingTime } from '../utils/utils'
import Icons from './icons/Icons'
import playIcon from '../images/play-clip.svg'
import api from '../utils/Api'

function Player({
  isDetailsOpen,
  handleDetailsClick,
  windowWidth,
  breakpoint,
  windowHeight,
}) {
  const [releaseList, setReleaseList] = useState([])
  const [currentSong, setCurrentSong] = useState({})
  const [showRelease, setShowRelease] = useState(true)
  const [onlyOneRelease, setOnlyOneRelease] = useState(false)

  const [isTrackPlaying, setIsTrackPlaying] = useState(false)
  const [currentSongDuration, setCurrentSongDuration] = useState(0)
  const [currentSongPlayed, setCurrentSongPlayed] = useState(0)
  const [currentSongSeekerMovedTo, setCurrentSongSeekerMovedTo] = useState(0)

  const audioEl = useRef(null)

  function handleDetailsOpen() {
    handleDetailsClick(true)
  }
  function handleDetailsClose() {
    handleDetailsClick(false)
  }

  const feat = !currentSong.originalAuthor ? (
    ''
  ) : (
    <span>
      <span className="song-item__feat">feat.&nbsp;</span>
      {currentSong.originalAuthor}
    </span>
  )

  function handleTrackPlay() {
    setIsTrackPlaying(true)
    audioEl.current.play()
  }

  function handleTrackPause() {
    setIsTrackPlaying(false)
    audioEl.current.pause()
  }

  // function handleShowClip() {

  // }

  //const serverSongs = api.getSongs()

  useEffect(() => {
    setCurrentSong(serverSongs[0])

    if (serverSongs.length === 1) {
      setShowRelease(false)
      setOnlyOneRelease(true)
    }

    setReleaseList(serverSongs.slice(1))
  }, [])

  function handleReleaseClick(track) {
    // находим в списке релизов тот, на который кликнули, удаляем его
    const list = releaseList.filter((obj) => {
      return obj.id !== track.id
    })
    // добавляем в конец релизов текущую песню
    list.push(currentSong)
    // обновляем список релизов и песню
    setIsTrackPlaying(false)
    setReleaseList(list)
    setCurrentSong(track)
  }

  function handleLyricsReleaseClick() {
    if (showRelease) {
      setShowRelease(false)
    } else setShowRelease(true)
  }

  //логика перемещения бегунка по таймлайн
  function handleClickOnTimeline(event) {
    function findTargetParent() {
      if (
        event.target.classList.contains(
          'song-item__timeline-playhead' || 'song-item__timeline-hover-playhead'
        )
      ) {
        return event.target.parentElement
      } else {
        return event.target
      }
    }

    const timeline = findTargetParent()

    setCurrentSongSeekerMovedTo(
      (event.nativeEvent.layerX / timeline.getBoundingClientRect().width) * 100
    )
  }

  useEffect(() => {
    audioEl.current.currentTime =
      (currentSongDuration * currentSongSeekerMovedTo) / 100
  }, [currentSongSeekerMovedTo])

  return (
    <section className="player">
      <div
        className="player__container"
        style={{
          display: isDetailsOpen
            ? windowWidth < breakpoint
              ? 'flex'
              : 'grid'
            : 'block',
        }}
      >
        <img
          className={classnames('player__cover', 'player__cover_type_screen', {
            disabled: !isDetailsOpen,
          })}
          //   style={{
          //   display:
          //     (windowWidth < breakpoint && windowHeight < 380)
          //       ? 'block'
          //       : 'none'

          // }}
          src={currentSong.cover}
          alt={currentSong.name}
        ></img>
        <audio
          className="player__audio"
          ref={audioEl}
          src={currentSong.audioFile}
          onLoadedData={() => {
            setCurrentSongDuration(audioEl.current.duration)
          }}
          onTimeUpdate={() => {
            setCurrentSongPlayed(audioEl.current.currentTime)
          }}
        >
          Your browser does not support the audio element.
        </audio>
        <div className="player__controls controls">
          <button
            className="controls__play-button"
            data-icon="P"
            aria-label="play pause toggle"
          >
            {isTrackPlaying ? (
              <Icons.SvgPauseButton
                className="controls__pause-icon"
                maincolor={maincolor}
                onClick={handleTrackPause}
              ></Icons.SvgPauseButton>
            ) : (
              <Icons.SvgPlayButton
                className="controls__play-icon"
                maincolor={maincolor}
                onClick={handleTrackPlay}
              ></Icons.SvgPlayButton>
            )}
          </button>
          <div
            className="song-item"
            style={{ marginBottom: windowHeight < 460 && '20px' }}
          >
            <div className="song-item__wrap">
              <marquee
                className="song-item__name-wrap"
                style={{
                  maxWidth: !isDetailsOpen
                    ? windowWidth > 900
                      ? 'calc(100vw - 130px)'
                      : 'calc(100vw - 150px)'
                    : '',
                }}
              >
                {currentSong.title}&nbsp;&mdash;&nbsp;
                {currentSong.author}&nbsp;{feat}
              </marquee>
              <div className="song-item__timer">
                <span aria-label="timer">
                  {countRemainingTime(currentSongDuration, currentSongPlayed)}
                </span>
              </div>
            </div>
            <div
              className="song-item__timeline"
              onClick={handleClickOnTimeline}
            >
              <div
                className="song-item__timeline-playhead"
                style={{
                  width: (currentSongPlayed / currentSongDuration) * 100 + '%',
                }}
              ></div>
            </div>
          </div>
          <div
            className={classnames(
              'player__cover',
              'player__cover_type_mobile',
              {
                disabled: !isDetailsOpen,
              },
              { disabled: windowHeight < 460 }
            )}
            style={{
              backgroundImage: `url( ${currentSong.cover})`,
              height: windowHeight < 562 && '150px',
            }}
          >
            {currentSong.cover
              ? ''
              : 'Здесь должна была быть обложка альбома :)'}
          </div>
          {currentSong.video ? (
            <a
              className={classnames('controls__video-clip-button', {
                disabled: !isDetailsOpen,
              })}
              href={currentSong.video}
              target="_blank"
            >
              <img
                className="controls__play-clip-icon"
                alt="play-clip"
                src={playIcon}
              />{' '}
              Клип
            </a>
          ) : (
            ''
          )}

          <button
            className={classnames('controls__lyrics-release-button', {
              disabled: !isDetailsOpen,
            })}
            onClick={handleLyricsReleaseClick}
          >
            {showRelease ? 'Текст песни' : 'Релизы'}
          </button>
          <button className="controls__open-details-button">
            {isDetailsOpen ? (
              <Icons.SvgCrossButton
                className="controls__cross-icon"
                maincolor={maincolor}
                onClick={handleDetailsClose}
              />
            ) : (
              <Icons.SvgArrowButton
                className="controls__arrow-icon"
                maincolor={maincolor}
                onClick={handleDetailsOpen}
              />
            )}
          </button>
        </div>
        <div
          className={classnames('player__details-container', {
            disabled: !isDetailsOpen,
          })}
          style={{
            overflowY: onlyOneRelease
              ? 'hidden'
              : releaseList.length < 2
              ? 'hidden'
              : 'scroll',
          }}
        >
          <p className="details__title">
            {!showRelease
              ? 'Текст песни:'
              : onlyOneRelease
              ? 'Пока что у нас только 1 релиз.'
              : 'Релизы:'}
          </p>

          <ul
            className={classnames('details__songs-list', {
              disabled: !showRelease,
            })}
          >
            {releaseList.map((release) => (
              <Release
                key={release.id}
                release={release}
                handleReleaseClick={handleReleaseClick}
              />
            ))}
          </ul>
          <div
            className={classnames('details__song-text display-linebreak', {
              disabled: showRelease,
            })}
          >
            {currentSong.text}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Player
