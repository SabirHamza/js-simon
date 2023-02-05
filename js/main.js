const secondEl = document.getElementById("second");
const minuteEl = document.getElementById("minute");
const hourEl = document.getElementById("hour");

const now = new Date();
console.log(now);

const tomorrow = new Date ("2023-02-06 09:30:00");
console.log(tomorrow);

let timeleft = tomorrow - now;
console.log(timeleft);

const clock = setInterval(countdown, 1000)

function countdown() {

    --timeleft;

    const second = (timeleft % 60);
    const minute = Math.floor((timeleft / 60) % 60);
    const hour = Math.floor((timeleft / 60 / 60) % 24);

    secondEl.innerHTML = (second < 10) ? "0" + second : second;
    minuteEl.innerHTML = (minute < 10) ? "0" + minute + ":" : minute + ":";
    hourEl.innerHTML = (hour < 10) ? "0" + hour + ":" : hour + ":";
}
