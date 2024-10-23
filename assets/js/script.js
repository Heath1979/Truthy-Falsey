const apiUrl = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean';
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

async function fetchQuestions() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    questions = data.results;
    displayQuestion();
}
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').innerHTML = decodeHtml(currentQuestion.question);

        const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
        shuffleArray(answers);