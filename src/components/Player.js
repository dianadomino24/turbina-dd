import React, { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import { serverSongs } from '../utils/song-list'
import Release from './Release'
import { maincolor } from '../utils/utils'
import Icons from './icons/Icons'

import { CurrentSongContext } from '../contexts/CurrentSongContext'

function Player() {
    const [isTrackPlaying, setIsTrackPlaying] = useState(false)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [releaseList, setReleaseList] = useState([])
    const [currentSong, setCurrentSong] = useState({})
    const [showRelease, setShowRelease] = useState(true)
    const [onlyOneRelease, setOnlyOneRelease] = useState(false)
    const [currentSongDuration, setCurrentSongDuration] = useState(0);
    const [currentSongPlayed, setCurrentSongPlayed] = useState(0);
    const [clickedTime, setClickedTime] = useState();

    const audioEl = useRef(null)

    const [timer, setTimer] = useState('00:00')

    function handleTimer() {
        let sec_num = (currentSongDuration - currentSongPlayed); 
        console.log(currentSongDuration, currentSongPlayed);
        let minutes = Math.floor(sec_num / 60); 
        let seconds = Math.round(sec_num - (minutes * 60)); 
     
        if (minutes < 10) {minutes = "0"+minutes}
        if (seconds < 10) {seconds = "0"+seconds}
        return minutes + ':' + seconds;
    }

    function handleDetailsOpen() {
        setIsDetailsOpen(true)
    }
    function handleDetailsClose() {
        setIsDetailsOpen(false)
    }
    function handleTrackPlay() {
        setIsTrackPlaying(true)
        audioEl.current.play()
    }
    function handleTrackPause() {
        setIsTrackPlaying(false)
        audioEl.current.pause()
    }

    function handleTimeUpdate() {
        setCurrentSongPlayed(audioEl.current.currentTime)
    }

    useEffect(() => {
        //  Promise(api.getItems('songs'))
        //     .then((data) => {
        //         const serverSongs = data

        setCurrentSong(serverSongs[0])
        if (serverSongs.length === 1) {
            setShowRelease(false)
            setOnlyOneRelease(true)
        }
        setReleaseList(serverSongs.slice(1))
        // })
        // .catch((err) => {
        //     console.log(`Загрузка песен: ${err}`)
        // })

        // Gets audio file duration
        audioEl.current.addEventListener("canplaythrough", function () {
            console.log('here1234', audioEl.current.duration)
            setCurrentSongDuration(audioEl.current.duration)
        }, false)
    
        audioEl.current.addEventListener("timeupdate", handleTimeUpdate, false);

        if (clickedTime && clickedTime !== audioEl.current.duration) {
            audioEl.current.duration = clickedTime;
            setClickedTime(null);
          }
    
    }, [])

    

    function handleReleaseClick(track) {
        // находим в списке релизов тот, на который кликнули, удаляем его
        const list = releaseList.filter((obj) => {
            return obj.id !== track.id
        })
        // добавляем в конец релизов текущую песню
        list.push(currentSong)
        // обновляем список релизов и песню
        setReleaseList(list)
        setCurrentSong(track)
    }
    function handleLyricsReleaseClick() {
        if (showRelease) {
            setShowRelease(false)
        } else setShowRelease(true)
    }

    //  const currentSongData= React.useContext(CurrentSongContext)

    return (
        // <CurrentSongContext.Provider value={currentSong}>
        <section className="player">
            <div className="player__container">
                <audio className="player__audio" ref={audioEl} controls>
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
                    <div className="song-item">
                        <div className="song-item__wrap">
                            <div className="song-item__name-wrap">
                                {currentSong.title}&mdash;{currentSong.author}
                                gggggggggggggggggggggggggggggggggggggggggggggggggggggg
                            </div>
                            <div className="song-item__timer">
                                <span aria-label="timer">
                                    {handleTimer()}
                                    {/* {((currentSongDuration - currentSongPlayed)/60)}
                                    {console.log(currentSong.duration, currentSongDuration, currentSongPlayed)} */}
                                </span>
                            </div>
                        </div>
                        <div className="song-item__timeline">
                        
                            <div className="song-item__timeline-playhead" style={{width: (currentSongPlayed / currentSongDuration * 100) + '%'}}></div>
                            {/* <div
                                className="song-item__timeline-hover-playhead"
                                data-content="1:00"
                            ></div> */}
                        </div>
                    </div>
                    <button
                        className={classnames(
                            'controls__lyrics-release-button',
                            { disabled: !isDetailsOpen }
                        )}
                        //     isDetailsOpen
                        //         ? 'controls__lyrics-release-button'
                        //         : 'controls__lyrics-release-button disabled'
                        // }
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
                    //     isDetailsOpen
                    //         ? 'player__details-container'
                    //         : 'player__details-container disabled'
                    // }
                >
                    <p className="details__title">
                        {!showRelease
                            ? 'Текст песни:'
                            : onlyOneRelease
                            ? 'Пока что у нас только 1 релиз.'
                            : 'Релизы:'}
                    </p>

                    <ul
                        className={classnames(
                            'details__songs-list',
                            { disabled: !showRelease })}
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
                        className={classnames(
                            'details__song-text display-linebreak',
                            { disabled: showRelease })}
                    >
                        {currentSong.text}
                    </div>
                </div>
            </div>
        </section>
        // </CurrentSongContext.Provider>
    )
}

export default Player
