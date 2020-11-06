import React, { useState } from 'react'

function Player() {
    const [isTrackPlaying, setIsTrackPlaying] = useState(false)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    function handleDetailsOpen() {
        setIsDetailsOpen(true)
    }
    function handleDetailsClose() {
        setIsDetailsOpen(false)
    }
    function handleTrackPlay() {
        setIsTrackPlaying(true)
    }
    function handleTrackPause() {
        setIsTrackPlaying(false)
    }

    return (
        <div className="player">
            <div className="player__container">
                <audio className="player__audio" controls>
                    <source
                        src="https://www.bensound.com/bensound-music/bensound-buddy.mp3"
                        type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                </audio>
                <div className="player__controls controls">
                    <button
                        className="controls__play-button"
                        data-icon="P"
                        aria-label="play pause toggle"
                        // onClick={handleTrackPlay}
                    >
                        <svg
                            className={
                                isTrackPlaying
                                    ? 'controls__svg controls__play-icon disabled'
                                    : 'controls__svg controls__play-icon'
                            }
                            width="16"
                            height="20"
                            viewBox="0 0 16 20"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleTrackPlay}
                        >
                            <path d="M15.2578 8.62536C16.2474 9.27629 16.2474 10.7237 15.2578 11.3746L2.56208 19.725C1.46363 20.4475 -8.59461e-07 19.6622 -8.02119e-07 18.3503L-7.21088e-08 1.64966C-1.47664e-08 0.337816 1.46363 -0.447463 2.56208 0.275023L15.2578 8.62536Z" />
                        </svg>
                        <svg
                            className={
                                isTrackPlaying
                                    ? 'controls__svg controls__pause-icon'
                                    : 'controls__svg controls__pause-icon disabled'
                            }
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleTrackPause}
                        >
                            <rect x="2" width="4" height="16" rx="1" />
                            <rect x="11" width="4" height="16" rx="1" />
                        </svg>
                    </button>
                    <div className="song-item">
                        <div className="song-item__wrap">
                            <div className="song-item__name-wrap song-item__name-wrap_type_current">
                                Поезия &mdash; Мукулатура feat. Саша
                                Петровgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
                            </div>
                            <div className="song-item__timer">
                                <span aria-label="timer">00:00</span>
                            </div>
                        </div>
                        <div className="song-item__timeline">
                            <div className="song-item__timeline-playhead"></div>
                            <div
                                className="song-item__timeline-hover-playhead"
                                data-content="1:00"
                            ></div>
                        </div>
                    </div>
                    <button
                        className={
                            isDetailsOpen
                                ? 'controls__lyrics-release-button'
                                : 'controls__lyrics-release-button disabled'
                        }
                    >
                        {isDetailsOpen ? 'Текст песни' : ''}
                    </button>
                    <button className="controls__open-details-button">
                        <svg
                            onClick={handleDetailsOpen}
                            className={
                                isDetailsOpen
                                    ? 'controls__svg controls__arrow-icon disabled'
                                    : 'controls__svg controls__arrow-icon'
                            }
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.6402 8.23178L12 7.69829L11.3598 8.23178L5.35982 13.2318L6.64018 14.7682L12 10.3017L17.3598 14.7682L18.6402 13.2318L12.6402 8.23178Z"
                            />
                        </svg>
                        <svg
                            className={
                                isDetailsOpen
                                    ? 'controls__svg controls__cross-icon'
                                    : 'controls__svg controls__cross-icon disabled'
                            }
                            onClick={handleDetailsClose}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM10.5867 12L7.05116 8.46447L8.46537 7.05025L12.0009 10.5858L15.5364 7.05025L16.9507 8.46447L13.4151 12L16.9507 15.5355L15.5364 16.9497L12.0009 13.4142L8.46537 16.9497L7.05116 15.5355L10.5867 12Z"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        isDetailsOpen
                            ? 'player__details-container'
                            : 'player__details-container disabled'
                    }
                >
                    <p
                        className={
                            isDetailsOpen
                                ? 'details__title'
                                : 'details__title disabled'
                        }
                    >
                        {isDetailsOpen ? 'Релизы:' : ''}
                    </p>
                    <ul className="details__songs-list">
                        <li className="details__song-item">
                            <a
                                href="/#"
                                className="song-item__name-wrap song-item__name-wrap_type_release"
                            >
                                Поезия &mdash; Мукулатура feat. Саша
                                Петроввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввв
                            </a>
                        </li>
                        <li className="details__song-item">
                            <a
                                href="/#"
                                className="song-item__name-wrap song-item__name-wrap_type_release"
                            >
                                Поезия &mdash; Мукулатура feat. Саша Петров
                            </a>
                        </li>
                        <li className="details__song-item">
                            <a
                                href="/#"
                                className="song-item__name-wrap song-item__name-wrap_type_release"
                            >
                                Поезия &mdash; Мукулатура feat. Саша Петров
                            </a>
                        </li>
                        <li className="details__song-item">
                            <a
                                href="/#"
                                className="song-item__name-wrap song-item__name-wrap_type_release"
                            >
                                Поезия &mdash; Мукулатура feat. Саша Петров
                            </a>
                        </li>
                    </ul>
                    <p className="details__song-text">
                        Мой милый милый мальчик
                        <br />
                        Моя милая милая девочка
                        <br />
                        Никогда не знаешь что будет дальше
                        <br />В этой гадкой зиме
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Player
