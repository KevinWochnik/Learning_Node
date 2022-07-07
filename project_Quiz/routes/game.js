const gameRoute = (app) => {
  let goodAnswers = 0;
  let isGameOver = false;
  let callToAFriendUsed = false;
  let questionToTheCrowdUsed = false;
  let halfOnHalfUsed = false;

  const questions = [
    {
      question: "Jaki jest najlepszy język programowania na świecie?",
      answers: ["C++", "Java", "Python", "JavaScript"],
      correctAnswer: 3,
    },
    {
      question: "Czy chcesz zjeść pizzę",
      answers: ["tak", "nie", "nawet dwie", "jestem na diecie"],
      correctAnswer: 3,
    },
    {
      question: "Czy ten kurs jest fajny?",
      answers: ["nie wiem", "może", "na pewno!", "nie"],
      correctAnswer: 2,
    },
  ];

  app.get("/question", (req, res) => {
    if (goodAnswers === questions.length) {
      res.json({
        winner: true,
      });
    } else if (isGameOver) {
      res.json({
        loser: true,
      });
    } else {
      const nextQuestion = questions[goodAnswers];
      const { question, answers } = nextQuestion;
      res.json({
        question,
        answers,
      });
    }
  });
  app.post("/answer/:index", (req, res) => {
    if (isGameOver) {
      res.json({
        loser: true,
      });
    }
    const { index } = req.params;

    const question = questions[goodAnswers];

    const correct = question.correctAnswer === Number(index);

    if (correct) {
    } else {
      isGameOver = true;
    }

    res.json({
      correct,
      goodAnswers,
    });
  });
};

module.exports = gameRoute;
