var date = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var config = {
    'is_12_format': true,
    'is_gmt': false,
    'theme': 2
};

function setFormat(bool) {
    config.is_12_format = bool;
    setTime();
}

function setGmt(bool) {
    config.is_gmt = bool;
    setTime();
}

function changeElementClass(element, from, to) {
    element.classList.remove(from);
    element.classList.add(to);
}

function setTheme(id) {
    if (id != config.theme) {
        if (id == 1) {
            document.querySelectorAll('.bg-maroon').forEach(element => {
                changeElementClass(element, 'bg-maroon', 'bg-violet');
            });
            changeElementClass(document.querySelector("body"), 'text-zamrud', 'text-tomato');
        } else {
            document.querySelectorAll('.bg-violet').forEach(element => {
                changeElementClass(element, 'bg-violet', 'bg-maroon');
            });
            changeElementClass(document.querySelector("body"), 'text-tomato', 'text-zamrud');
        }
        config.theme = id;
    }
}

function setDate() {
    var day = date.getDate();
    var day_str = days[date.getDay()] + ",";
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    document.getElementById("date").innerText = [day_str, month, day, year].join(" ");
}

function setTime() {
    date = new Date();
    var hours, minutes, seconds;
    if (config.is_gmt) {
        hours = date.getUTCHours();
        minutes = date.getUTCMinutes();
        seconds = date.getUTCSeconds();
    } else {
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
    }
    if (config.is_12_format) {
        var hours = (hours > 12) ? hours - 12 : hours;
        time_str = [hours, minutes, seconds].join(':');
        time_str += (hours > 12) ? " PM" : " AM";
    } else {
        time_str = [hours, minutes, seconds].join(':');
    }
    setDate();
    document.getElementById('clock').innerText = time_str;
}

setInterval(setTime, 1000);