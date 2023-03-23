const cardContainer = document.querySelector('[data-js="cardContainer"]')
const form = document.querySelector('[data-js="form"]')
const questionInput = document.querySelector('[data-js="question"]')
const answerInput = document.querySelector('[data-js="answer"]')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newCard = document.createElement("li");
    newCard.classList.add("pQ1");
    
    
    newCard.innerHTML = `
    <h2>${questionInput.value}</h2>
    <h3>${answerInput.value}</h3>
    `
    cardContainer.append(newCard);


    form.reset();
    questionInput.focus();

});

const outputQuestion = document.querySelector('[data-js="pFormQuestion"]')
const outputAnswer = document.querySelector('[data-js="pFormAnswer"]')

questionInput.addEventListener("input", (event) => {
    const textInput = event.target.value;
    const inputLength = textInput.length;
    const symbolsLeft = questionInput.maxLength-inputLength;
    outputQuestion.innerHTML = `You entered ${inputLength} symbols and have ${symbolsLeft} left
    `;
    
})

answerInput.addEventListener("input", (event) => {
    const textInput = event.target.value;
    const inputLength = textInput.length;
    const symbolsLeft = answerInput.maxLength-inputLength;
    outputAnswer.innerHTML = `You entered ${inputLength} symbols and have ${symbolsLeft} left
    `;
    
})