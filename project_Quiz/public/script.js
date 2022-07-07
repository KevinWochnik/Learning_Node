const question = document.querySelector("#question");

const buttonsArr = [...document.querySelectorAll("button")];

const fillQuestionElements = (data) => {
  question.textContent = data.question;

  buttonsArr.forEach((answer, i) => {
    answer.textContent = data.answers[i];
  });
};

const showNextQuestion = async () => {
  let response = await fetch("/question", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  let data = await response.json();
  fillQuestionElements(data);
};

const sendAnswer = async (answerIndex) => {
  let response = await fetch(`/answer/${answerIndex}`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  let data = await response.json();
  handleAnswerFeedback(data);
};

const goodAsnwersSpan = document.querySelector("#good-answers");

const handleAnswerFeedback = (data) => {
  goodAsnwersSpan.textContent = data.goodAnswers;
};

try {
  showNextQuestion();
  sendAnswer();
} catch (err) {
  console.log(err);
}

buttonsArr.forEach((button, i) => {
  const answerIndex = button.dataset.answer;
  button.addEventListener("click", () => {
    sendAnswer(answerIndex);
  });
});
