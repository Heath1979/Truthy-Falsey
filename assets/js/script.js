https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean



async function fetchQuestions() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    questions = data.results;
    displayQuestion();
}