import React from "react"


let timer;
let sec = 0;
let min = 0;

let start = document.getElementsByClassName('start')
start.addEventListener('click', function() {
  timer = setInterval(timerHandler, 1000);
})
let stop = document.getElementsByClassName('stop')
stop.addEventListener('click', function() {
  timer = clearInterval(timer);
})

function timerHandler() {
  sec++;
  if (sec = 60) {
    sec = 0;
    min++;
  }
  timerDisplay();
}
function timerDisplay() {
  let secTime;
  let minTime;
  let timer_element = document.getElementById("timer");
  if (sec < 10) {
    secTime = "0" + sec;
  }
  if (min < 10) {
    minTime = "0" + min;
  }
  timer_element.innerHTML = minTime + ":" + secTime;
}


function Contact(props) {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <br />
      <input className="messagebox" placeholder="your message here"></input>
      <br />
  <div id="timer">{timer}</div>
      <div className="buttons">
        <button className="start">Start</button>
        <button className="stop">Stop</button>
      </div>
      
    </div>
  )
}

export default Contact;