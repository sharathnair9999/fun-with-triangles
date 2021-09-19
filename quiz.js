const quizForm = document.querySelector('.quiz-form')
const submitAnswerBtn = document.querySelector('#submit-answer-btn')
const outputEl = document.querySelector('#output')

const correctAnswers = ["90°","Right Angled", "Scalene"];

function calculateScore(){
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for(let entry of formResults.values()){
    if(entry === correctAnswers[index]){
      score=score+1;
    }
    index=index+1;
  }
  if(score === correctAnswers.length){
    outputEl.innerText = "Wow!! Pat your back!! You got it all right"
    outputEl.style.color = "green"
    outputEl.style.fontSize = "1rem"
    return;
  }
  outputEl.innerText = "Oops! That's not a 100%. Your Score is "+score;
  outputEl.style.color = "red"
  outputEl.style.fontSize = "1rem"
}

submitAnswerBtn.addEventListener("click", calculateScore);