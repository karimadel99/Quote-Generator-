var q = document.getElementById("quote");

var quotes = [
    "The best revenge is massive success.",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "No matter what anybody tells you, words and ideas can change the world. Dead Poets Society"
];

var lastQuoteDisplayed = -1; 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateQuote() {
    var index;

    do {
        index = getRandomInt(quotes.length);
    } while (index === lastQuoteDisplayed);

    q.innerHTML = quotes[index];
    lastQuoteDisplayed = index; 
}
