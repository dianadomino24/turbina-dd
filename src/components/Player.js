import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import { serverSongs } from "../utils/song-list";
import Release from "./Release";
import { maincolor } from "../utils/utils";
import SvgPauseButton from "./icons/pause/SvgPauseButton";
import SvgPlayButton from "./icons/play/SvgPlayButton";
import SvgCrossButton from "./icons/cross/SvgCrossButton";
import SvgArrowButton from "./icons/arrow/SvgArrowButton";

// import { CurrentSongContext } from "../contexts/CurrentSongContext";

function Player() {
  const [isTrackPlaying, setIsTrackPlaying] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [releaseList, setReleaseList] = useState([]);
  const [currentSong, setCurrentSong] = useState({});
  const [showRelease, setShowRelease] = useState(true);
  const [onlyOneRelease, setOnlyOneRelease] = useState(false);
  const [currentSongDuration, setCurrentSongDuration] = useState(0);
  const [currentSongPlayed, setCurrentSongPlayed] = useState(0);
  const [currentSongSeekerMovedTo, setCurrentSongSeekerMovedTo] = useState(0);
  const [clickedTime, setClickedTime] = useState();

  const audioEl = useRef(null);


//расчет оставшегося времени проигрования трека
  function countRemainingTime(duration, currentTime) {
    let sec_num = duration - currentTime;
    let minutes = Math.floor(sec_num / 60);
    let seconds = Math.round(sec_num - minutes * 60);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  function handleDetailsOpen() {
    setIsDetailsOpen(true);
  }
  function handleDetailsClose() {
    setIsDetailsOpen(false);
  }

  function handleTrackPlay() {
    setIsTrackPlaying(true);
    audioEl.current.play();
  }
  function handleTrackPause() {
    setIsTrackPlaying(false);
    audioEl.current.pause();
  }

  function handleTimeUpdate() {
    setCurrentSongPlayed(audioEl.current.currentTime);
  }

  useEffect(() => {
    //  Promise(api.getItems('songs'))
    //     .then((data) => {
    //         const serverSongs = data

    setCurrentSong(serverSongs[0]);
    if (serverSongs.length === 1) {
      setShowRelease(false);
      setOnlyOneRelease(true);
    }
    setReleaseList(serverSongs.slice(1));
    // })
    // .catch((err) => {
    //     console.log(`Загрузка песен: ${err}`)
    // })
  }, []);


  useEffect(() => {
    // Gets audio file duration
    audioEl.current.addEventListener(
        "canplaythrough",
        function () {
          console.log("here1234", audioEl.current.duration);
          setCurrentSongDuration(audioEl.current.duration);
        },
        false
      );
  
      audioEl.current.addEventListener("timeupdate", handleTimeUpdate, false);
  
      if (clickedTime && clickedTime !== audioEl.current.duration) {
        audioEl.current.duration = clickedTime;
        setClickedTime(null);
      }
  },[clickedTime])

  function handleReleaseClick(track) {
    // находим в списке релизов тот, на который кликнули, удаляем его
    const list = releaseList.filter((obj) => {
      return obj.id !== track.id;
    });
    // добавляем в конец релизов текущую песню
    list.push(currentSong);
    // обновляем список релизов и песню
    setReleaseList(list);
    setCurrentSong(track);
  }
  
  
  function handleLyricsReleaseClick() {
    if (showRelease) {
      setShowRelease(false);
    } else setShowRelease(true);
  }

  //логика перемещения бегунка по таймлайн
  function handleClickOnTimeline(event) {
    function findTargetParent() {
        if (event.target.classList.contains('song-item__timeline-playhead' || 'song-item__timeline-hover-playhead')) {
            return event.target.parentElement
        } else { return event.target }
    }

    const timeline = findTargetParent();

    setCurrentSongSeekerMovedTo(
      (event.nativeEvent.layerX / timeline.getBoundingClientRect().width) *
        100
    );
  }

  useEffect(() => {
    audioEl.current.currentTime =
      (currentSongDuration * currentSongSeekerMovedTo) / 100;
  }, [currentSongDuration, currentSongSeekerMovedTo]);

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
              <SvgPauseButton
                maincolor={maincolor}
                onClick={handleTrackPause}
              ></SvgPauseButton>
            ) : (
              <SvgPlayButton
                maincolor={maincolor}
                onClick={handleTrackPlay}
              ></SvgPlayButton>
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
                  {countRemainingTime(currentSongDuration, currentSongPlayed)}
                </span>
              </div>
            </div>
            <div className="song-item__timeline" onClick={handleClickOnTimeline}>
              <div
                className="song-item__timeline-playhead"
                style={{
                  width: (currentSongPlayed / currentSongDuration) * 100 + "%",
                }}
              ></div>
              {/* <div
                                className="song-item__timeline-hover-playhead"
                                data-content="1:00"
                            ></div> */}
            </div>
          </div>
          <button
            className={classnames("controls__lyrics-release-button", {
              disabled: !isDetailsOpen,
            })}
            //     isDetailsOpen
            //         ? 'controls__lyrics-release-button'
            //         : 'controls__lyrics-release-button disabled'
            // }
            onClick={handleLyricsReleaseClick}
          >
            {showRelease ? "Текст песни" : "Релизы"}
          </button>
          <button className="controls__open-details-button">
            {isDetailsOpen ? (
              <SvgCrossButton
                maincolor={maincolor}
                onClick={handleDetailsClose}
              />
            ) : (
              <SvgArrowButton
                maincolor={maincolor}
                onClick={handleDetailsOpen}
              />
            )}
          </button>
        </div>
        <div
          className={classnames("player__details-container", {
            disabled: !isDetailsOpen,
          })}
          //     isDetailsOpen
          //         ? 'player__details-container'
          //         : 'player__details-container disabled'
          // }
        >
          <p className="details__title">
            {!showRelease
              ? "Текст песни:"
              : onlyOneRelease
              ? "Пока что у нас только 1 релиз."
              : "Релизы:"}
          </p>

          <ul
            className={
              showRelease
                ? "details__songs-list"
                : "details__songs-list disabled"
            }
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
            className={
              showRelease
                ? "details__song-text display-linebreak disabled"
                : "details__song-text display-linebreak"
            }
          >
            {currentSong.text}
          </div>
        </div>
      </div>
    </section>
    // </CurrentSongContext.Provider>
  );
}

export default Player;
