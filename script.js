/*Add your JavaScript here*/

var succScore = 0; 
var aloeScore = 0; 
var venusScore = 0;
var airScore = 0;

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", aloe);
q1a2.addEventListener("click", succ);
q1a3.addEventListener("click", venus);
q1a4.addEventListener("click", air);

q2a1.addEventListener("click", aloe);
q2a2.addEventListener("click", succ);
q2a3.addEventListener("click", venus);
q2a4.addEventListener("click", air);

q3a1.addEventListener("click", aloe);
q3a2.addEventListener("click", succ);
q3a3.addEventListener("click", venus);
q3a4.addEventListener("click", air);

// Listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);

// Track dog score and check if quiz is complete
function succ() {
  succScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "succScore = " + succScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Track cat score and check if quiz is complete
function aloe() {
  aloeScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "aloeScore = " + aloeScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

function venus() {
  venusScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "venusScore = " + venusScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

function air() {
  airScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "airScore = " + airScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Update quiz result
function updateResult() {
  if (aloeScore >= 2) {
    result.innerHTML = "You should donate to Coalition for Rainforest Nations! Find their name below!";
    console.log("You should donate to Coalition for Rainforest Nations! Find their name below!")
  } else if (succScore >= 2) {
    result.innerHTML = "You should donate to the Clean Air Task Force! Find their name below!";
    console.log("You should donate to the Clean Air Task Force! Find their name below!")
  } else if (venusScore >= 2) {
    result.innerHTML = "You should donate to  The Clean Energy Innovation program at the Information Technology and Innovation Foundation! Find their name below!";
    console.log("You should donate to  The Clean Energy Innovation program at the Information Technology and Innovation Foundation! Find their name below!")
  } else if (airScore >= 2) {
    result.innerHTML = "You should donate to he Rainforest Foundation US! Find their name below!";
    console.log("You should donate to the Rainforest Foundation US! Find their name below!")
  } else {
    result.innerHTML = "You should donate to the Climate Emergency Fund! Find their name below!";
    console.log("You should donate to the Climate Emergency Fund! Find their name below!")
  }
}

// Restart quiz
function restartQuiz() {
  result.innerHTML = "You should donate to...";
  questionCount = 0;
  succScore = 0;
  aloeScore = 0;
  venusScore = 0;
  airScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "aloeScore = " + aloeScore + "\t" + "succScore = " + succScore + "venusScore = " + venusScore + "\t" + "airCount = " + airCount + "\t");
}