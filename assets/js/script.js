//Press button to start quiz
var startBtnEl = document.querySelector("#quiz-button");
const startingMinutes = 2;
let time = startingMinutes * 60;
var record = "";

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 2 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
}

var startQuiz = function () {
  if (startBtnEl) {
    var questionTwo = prompt("What method is used for capturing clicks?");
      if (questionTwo === "addEventListener") {
        alert("Correct!");
      } else if (questionTwo === "" || questionTwo != "addEventListener") {
        alert("Incorrect");
        }

    var questionOne = prompt("What method is used for returning the key value of a storage object?");
      if (questionOne === "localStorage.getItem") {
        alert("Correct!");
      } else if (questionOne === "" || questionOne != "localStorage.getItem") {
        alert("Incorrect");
        }

    var questionOne = prompt("Which function is used to print pre-defined variables or print messages?");
      if (questionOne === "console.log") {
        alert("Correct!");
      } else if (questionOne === "" || questionOne != "console.log") {
        alert("Incorrect");
        }

    var questionOne = prompt("What variable is used for storing values?");
      if (questionOne === "object") {
        alert("Correct!");
      } else if (questionOne === "" || questionOne != "object") {
        alert("Incorrect");
        }

    var questionOne = prompt("What is the convention of writing compound words or phrases with no spaces and an initial lowercase or uppercase letter, with each remaining word element beginning with an uppercase letter");
      if (questionOne === "camelCase") {
        alert("Correct!");
      } else if (questionOne === "" || questionOne != "camelCase") {
        alert("Incorrect");
        }

  }
}; 

startBtnEl.addEventListener("click", startQuiz);

