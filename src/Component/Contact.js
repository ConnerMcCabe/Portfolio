import React from "react"


let timer;
let sec = 0;
let min = 0;

function start() {
  timer = setInterval(timerHandler, 1000);
};
function stop() {
  timer = clearInterval(timer);
};
function clear() {
  timer = clearInterval(timer);
  sec = 0;
  min = 0;
}

function timerHandler() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }
  timerDisplay();
}
function timerDisplay() {
  let secTime = sec;
  let minTime = min;
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
  <div id="timer">00:00</div>
      <div className="buttons">
        <button onClick={start} className="start">Start</button>
        <button onClick={stop} className="stop">Stop</button>
        <button onClick={clear} className="stop">Clear</button>
      </div>
      
    </div>
  )
}

export default Contact;