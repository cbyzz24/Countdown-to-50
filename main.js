const bDay = new Date("2025-08-29T00:00:00");
const now = new Date();

const vBday = bDay.getTime();
const vNow = now.getTime();
const timeGap = (vBday - vNow)/(1000);

const d = (timeGap/86400);
const h = ((d % 1) * (24));
const m = ((h % 1) * (60));
const s = ((m % 1) * (60));

// console.log(vBday);
// console.log(vNow);
// console.log(timeGap);
// console.log(d);
// console.log(h);
// console.log(m);
// console.log(s);

function displayTime(){
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    days.innerHTML = Math.floor(d);
    hours.innerHTML = Math.floor(h);
    minutes.innerHTML = Math.floor(m);
    seconds.innerHTML = Math.floor(s);
}

displayTime();
setInterval(displayTime, 1000);