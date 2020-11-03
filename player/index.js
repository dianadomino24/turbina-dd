const playControlButton = document.querySelector('.controls__play-button')
const pauseButton = document.querySelector('.controls__pause-icon')
const playButton = document.querySelector('.controls__play-icon')

const detailsButton = document.querySelector('.controls__open-details-button')
const arrowButton = document.querySelector('.controls__arrow-icon')
const crossButton = document.querySelector('.controls__cross-icon')

const lyricsReleaseButton = document.querySelector(
    '.controls__lyrics-release-button'
)
const playerDetailsContainer = document.querySelector(
    '.player__details-container'
)

function switchButton(buttonState1, buttonState2) {
    if (buttonState2.classList.contains('disabled')) {
        buttonState2.classList.remove('disabled')
        buttonState1.classList.add('disabled')
    } else {
        buttonState2.classList.add('disabled')
        buttonState1.classList.remove('disabled')
    }
}
function switchPlayPause() {
    switchButton(playButton, pauseButton)
}
playControlButton.addEventListener('click', switchPlayPause)

function showPlayerDetails() {
    if (crossButton.classList.contains('disabled')) {
        lyricsReleaseButton.classList.add('disabled')
        playerDetailsContainer.classList.add('disabled')
    } else {
        playerDetailsContainer.classList.remove('disabled')
        lyricsReleaseButton.classList.remove('disabled')
    }
}

function switchArrowCross() {
    switchButton(arrowButton, crossButton)
    showPlayerDetails()
}

detailsButton.addEventListener('click', switchArrowCross)
showPlayerDetails()
