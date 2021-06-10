import { Howl } from "./howler.js";

const timerInput = document.getElementById('time-input');
const sound = new Howl({
    src: ['sound.mp3']
});


export function startTimer() {
    const timeValue = (timerInput.value).split(':');
    let [hours = 0, minutes = 0] = timeValue;
    let time = parseInt(hours) * 3600 + parseInt(minutes) * 60;

    const timerId = setInterval(function () {
        if (time === 0) {
            clearInterval(timerId);
            timerInput.value = '00:00';
            sound.play();
            return;
        }

        let seconds = time % 60;
        minutes = Math.floor(time / 60) % 60;
        hours = Math.floor(time / 3600) % 60;

        seconds = (seconds < 10) ? `0${seconds}` : seconds;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        hours = (hours < 10) ? `0${hours}` : hours;

        timerInput.value = `${hours}:${minutes}:${seconds}`;
        time--;
    }, 1000);

    return timerId;
}

export function stopTimer(timerId) {
    clearInterval(timerId);
    timerInput.value = '00:00';
}