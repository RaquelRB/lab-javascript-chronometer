const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.textContent = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.textContent = "RESET";
}

  // Start/Stop Button
  btnLeft.addEventListener("click", () => {
    if (btnLeft.className === "btn start") {
      setStopBtn()
      setSplitBtn()

      chronometer.startClick(printTime);
    } else {
      setStartBtn()
      setResetBtn()

      chronometer.stopClick();
    }
  });

  // Reset/Split Button
  btnRight.addEventListener("click", () => {
    let parent = document.getElementsByTagName('body')[0]

    if (btnRight.className === "btn split") {
      // let a = 0;
      // btnRight.onclick = function () {
      //   let list = document.createElement("li");
      //   a++;
      //   list.innerHTML = printTime()
      //   parent.appendChild(list);
      // }
      } else {
        chronometer.resetClick()
        printTime()
      }
    })
