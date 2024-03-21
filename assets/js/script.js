/**
 * Create questions for quiz with options for answers
 */

var questions = [
    {
        question: "If I make the cocktail 'Dark and Stormy', what spirit am I using?",
        options: ["Rum", "Vodka", "Cachaça"],
        correctAnswer: "Rum"
    }, 

    {
        question: "Which country does the potato hail from?",
        options: ["Ireland", "Peru", "China"],
        correctAnswer: "Peru"

    }, 

    {
        // Can I insert a song here to play possibly? 
        question: "What year did the following events take place? The Summer Olympics in Athens, Greece. The tsunami in the Indian Ocean. The last episode of 'Friends' was aired. NASA announces that they have found water on Mars. 'Drop it like it's hot'",
        options: ["2009", "2004", "2006"],
        correctAnswer: "2004"

    }, 

    {
        question: "Vilnius is the capital of which European country?",
        options: ["Liechtenstein", "Lithuania", "Andorra"],
        correctAnswer: "Lithuania"

    }, 

    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "NaOH", "H2SO4"],
        correctAnswer: "NaCl"

    }, 

    // Manage to get a song to play? 
    {
        question: "The song 'Strawberry Fields Forever' by The Beatles, is about a landmark in Liverpool. But what kind of landmark was it?",
        options: ["A theater", "A farm", "An orphanage"],
        correctAnswer: "An orphanage"

    }, 

    {

        question: "What is xanthophobia?",
        options: ["Fear of peanut butter sticking to the roof of your mouth", "Fear of the colour yellow", "Fear of being without your mobile phone"],
        correctAnswer: "Fear of the colour yellow"
    }, 

    {

        question: "Who invented 'The little black dress'?",
        options: ["Coco Chanel", "Yves Saint Laurent", "Pierre Cardin"],
        correctAnswer: "Coco Chanel"
    }, 

    {
        question: "'Siam' is the historical name of which country'?",
        options: ["Vietnam", "Sri Lanka", "Thailand"],
        correctAnswer: "Thailand"

    }, 

]

// Variables for keeping track of question and score

let currentQuestion = 0; 
let score = 0; 

// Create variables from DOM elements

let quetionBox = document.getElementById("questions-box");
let optionsBox = document.getElementById("options-box");
let answerBox = document.getElementById("answer-box");
let nextButton = document.getElementById("next-btn");

// Function to deliver question 

function deliverQuestion() = {
    
}