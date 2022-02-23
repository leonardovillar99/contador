var hour = 0;
var minute = 0;
var second = 0;

var time = 1000;
var cron;

function start(){
    cron = setInterval(() => {timer(); }, time);
}

function pause(){
    clearInterval(cron);
}

function stop(){
    clearInterval(cron);

    hour = 0;
    minute = 0;
    second = 0;

    document.getElementById('counter').innerText = '00:00:00'
}

function timer(){

    second++;

    if(second == 60){
        second = 0;
        minute++;

        if(minute == 60){
            minute = 0;
            hour++;
        }
    }

    var format = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    document.getElementById('counter').innerText = format;
}