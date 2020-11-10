//дефолтный цвет svg иконок в плеере
export const maincolor = '#fff';

//расчет отображения оставшегося времени проигрывания трека в плеере
export const countRemainingTime = (duration, currentTime) => {
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
