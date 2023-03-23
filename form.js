const cardContainer = document.querySelector('[data-js="cardContainer"]')
const form = document.querySelector('[data-js="form"]')
const questionInput = document.querySelector('[data-js="question"]')
const answerInput = document.querySelector('[data-js="answer"]')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newCard = document.createElement("li");
    newCard.classList.add("card");
    
    
    newCard.innerHTML = `
    <h2>${questionInput.value}</h2>
    <h3>${answerInput.value}</h3>
    `
    cardContainer.append(newCard);


});