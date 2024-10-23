const apiUrl = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean';
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

async function fetchQuestions() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    questions = data.results; add
    displayQuestion();
}
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').innerHTML = decodeHtml(currentQuestion.question);

        // shuffle answers
        const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
        shuffleArray(answers);

        const answersDiv = document.getElementById('answers');
        answersDiv.innerHTML = '';
        answers.forEach(answer => {
            const answerButton = document.createElement('button');
            answerButton.innerHTML = decodeHtml(answer);
            answerButton.className = 'answer';
            answerButton.onclick = () => checkAnswer(answer);
            answersDiv.appendChild(answerButton);
        });
        document.getElementById('next').style.display = 'none';
        document.getElementById('feedback').style.display = 'none';
    } else {
        showScore();
    }
}
function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correct_answer;

    if (selectedAnswer === correctAnswer) {
        score++;
        showFeedback("Well Done!", true);
    } else {
        showFeedback("Bad Luck! ", + correctAnswer, false);
    }