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