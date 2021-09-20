//Press button to start quiz
var startBtnEl = document.querySelector("#quiz-button")
var timerElement = document.getElementById("timer");
var record = "";




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

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

function startTimer() {
    document.querySelector("#quiz-button")
}



// for edit and delete buttons


startBtnEl.addEventListener("click", startQuiz);

