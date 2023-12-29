let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
const display = document.querySelector("#display");
let [seconds, minutes, hour] = [0, 0, 0]; 
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let timer = null;

function Timer() {
    // Converting input values to integers
    seconds = parseInt(sec.value, 10);
    minutes = parseInt(min.value, 10);
    hour = parseInt(hr.value, 10);

    if (seconds > 0 || minutes > 0 || hour > 0) {
        seconds--;

        if (seconds < 0) {
            seconds = 59;

            if (minutes > 0) {
                minutes--;
            } else {
                if (hour > 0) {
                    hour--;
                    minutes = 59;
                }
            }
        }
    } else {
        clearInterval(timer);
        display.innerText = "Timer Expired!";
    }

    hr.value = hour < 10 ? "0" + hour : hour;
    min.value = minutes < 10 ? "0" + minutes : minutes;
    sec.value = seconds < 10 ? "0" + seconds : seconds;
}

start.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval(Timer, 1000);
    display.innerText = "Timer Started...";
});

stop.addEventListener('click', function () {
    clearInterval(timer);
    display.innerText = "Timer Stopped!";
});

reset.addEventListener('click', function () {
    clearInterval(timer);
    [seconds, minutes, hour] = [0, 0, 0]; 
    display.innerText = "Timer Reset!";
    hr.value = "00";
    min.value = "00";
    sec.value = "00";
});
