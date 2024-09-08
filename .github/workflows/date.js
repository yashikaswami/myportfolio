const curDate = document.getElementById("date");
let currentTime = new Date();

let month = currentTime.getMonth();
let day = currentTime.getDay();
let year = currentTime.getFullYear();
let hours = currentTime.getHours();
let date = currentTime.getDate();
let min = currentTime.getMinutes();
let sec = currentTime.getSeconds();
let period;

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getCurrentDay = () => weekday[day];
const getCurrentMonth = () => months[month];
const getCurrentDate = () => date;

const getCurrentHours = () => {
    let currentHours = hours;
    if (currentHours > 12) {
        currentHours -= 12;
    }
    return currentHours;
};

const getCurrentMin = () => {
    if (min < 10) {
        return "0" + min;
    }
    return min;
};

const getCurrentSec = () => {
    if (sec < 10) {
        return "0" + sec;
    }
    return sec;
};

const getPeriod = () => {
    if (hours >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
    return period;
};


setInterval(() => {
    currentTime = new Date();
    sec = currentTime.getSeconds();

    curDate.innerHTML = getCurrentDay() + "  <br>  " + getCurrentMonth() + "  " + getCurrentDate() + "  <br>  " + getCurrentHours() + ":" + getCurrentMin() + ":" + getCurrentSec() + " " + getPeriod();

}, 1000);
