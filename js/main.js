const secondEl = document.getElementById("second");
const minuteEl = document.getElementById("minute");
const hourEl = document.getElementById("hour");

const now = new Date();
console.log(now);

const tomorrow = new Date ("2023-02-07 09:30:00");
console.log(tomorrow);

const sTomorrow = tomorrow.getTime()
console.log(sTomorrow);
const snow = now.getTime()
console.log(snow);

let timeleft = sTomorrow - snow;
console.log(timeleft);

const clock = setInterval(countdown, 1000)

function countdown() {

    let timing = Math.floor(timeleft / 1000)

    --timing;

    const second = (timing % 60);
    const minute = Math.floor((timing / 60)) % 60;
    const hour = Math.floor((timing / 60 / 60)) % 24;

    secondEl.innerHTML = (second < 10) ? "0" + second : second;
    minuteEl.innerHTML = (minute < 10) ? "0" + minute + ":" : minute + ":";
    hourEl.innerHTML = (hour < 10) ? "0" + hour + ":" : hour + ":";
}
