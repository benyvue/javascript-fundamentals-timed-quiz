//Press button to start quiz
var startBtnEl = document.querySelector("#quiz-button")
var pageContentEl = document.querySelector("#page-content");


var startQuiz = function () {
  if (startBtnEl) {
    var questionOne = prompt("What is a function?");
      if (questionOne === "localStorage.getItem") {
        alert("Correct!");
      } else if (questionOne === "" || questionOne != "localStorage.getItem") {
        alert("Incorrect");
        }


    var questionOne = prompt("What function is used in javascript for retrieving stored data?");
      if (questionOne === "localStorage.getItem") {
        alert("Correct!");
      } else if (questionOne === "" || questionOne != "localStorage.getItem") {
        alert("Incorrect");
        }


  }
}; 


function startTimer() {
    document.querySelector("#quiz-button")
}



// for edit and delete buttons


startBtnEl.addEventListener("click", startQuiz);