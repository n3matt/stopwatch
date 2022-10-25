
let milSec = 00;
let sec = 00;
let min = 00;
let hour = 00;

let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');
let interval;

function startTimer() {
    milSec++;
   document.querySelector('.milsec').innerHTML = checkZero(milSec);

   if(milSec >= 60) {
       milSec = 0;
       sec++  
       document.querySelector('.seconds').innerHTML = checkZero(sec);
   }

   if(sec >= 60) {
       milSec = 00;
       sec = 00
       min++  
       document.querySelector('.minutes').innerHTML = checkZero(min);
   }

   if(min >= 60) {
       milSec = 00;
       sec = 00
       min = 00;
       hour++  
       document.querySelector('.hours').innerHTML = checkZero(hour);
   }

}


startBtn.addEventListener('click', () => { 
    interval = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => {
   clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    milSec = 00;
    sec = 00;
    min = 00;
    hour = 00;
    document.querySelector('.milsec').innerHTML = checkZero(milSec);
    document.querySelector('.seconds').innerHTML = checkZero(sec);
    document.querySelector('.minutes').innerHTML = checkZero(min);
    document.querySelector('.hours').innerHTML = checkZero(hour);
});


function checkZero(i) {
    if (i < 10) {
        i = `0${i}`;
    }
    return i;
}