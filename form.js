const cardContainer = document.querySelector('[data-js="cardContainer"]');
const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = document.createElement("li");
  newCard.classList.add("card");

  // newCard.innerHTML = `
  // <h2>${questionInput.value}</h2>
  // <h3>${answerInput.value}</h3>
  // `
  cardContainer.append(newCard);

  const pForm = document.createElement("p");
  pForm.classList.add("pQ1");
  pForm.innerHTML = `${questionInput.value}`;
  newCard.append(pForm);

  const buttonForm = document.createElement("button");
  buttonForm.classList.add("buttonQ1");
  buttonForm.type = "button";
  buttonForm.setAttribute("data-js", "buttonQ1");
  newCard.append(buttonForm);

  const answerParagraphForm = document.createElement("p");
  answerParagraphForm.setAttribute("data-js", "showAnswer");
  answerParagraphForm.textContent = "Show Answer";
  buttonForm.append(answerParagraphForm);

  const answerParagraphForm2 = document.createElement("p");
  answerParagraphForm2.classList.add("pAnswer");
  answerParagraphForm2.setAttribute("data-js", "pAnswer");
  answerParagraphForm2.textContent = "Hide Answer";
  buttonForm.append(answerParagraphForm2);

  const answerParagraphForm3 = document.createElement("p");
  answerParagraphForm3.classList.add("answer1");
  answerParagraphForm3.setAttribute("title", "answer");
  answerParagraphForm3.setAttribute("data-js", "answer1");
  answerParagraphForm3.innerHTML = `${answerInput.value}`;
  newCard.append(answerParagraphForm3);

  //added

  // const answerTagUl = document.createElement("ul");
  // answerTag.classList.add("answerTagUl");
  // answerTag.setAttribute("data-js", "answerTagUl");
  // newCard.append(answerTagUl);

  const answerTag = document.createElement("p");
  answerTag.classList.add("answerTag");
  answerTag.setAttribute("data-js", "answerTag");
  answerTag.innerHTML = `#${tagInput.value}`;
  newCard.append(answerTag);

  buttonForm.addEventListener("click", () => {
    answerParagraphForm3.classList.toggle("show");
    // answer1.setAttribute(display, flex);
    // buttonQ1.innerHTML="Hide Answer";
    answerParagraphForm2.classList.toggle("show");
    answerParagraphForm.classList.toggle("hide");
  });

  form.reset();
  questionInput.focus();
});

const outputQuestion = document.querySelector('[data-js="pFormQuestion"]');
const outputAnswer = document.querySelector('[data-js="pFormAnswer"]');

questionInput.addEventListener("input", (event) => {
  const textInput = event.target.value;
  const inputLength = textInput.length;
  const symbolsLeft = questionInput.maxLength - inputLength;
  outputQuestion.innerHTML = `You entered ${inputLength} symbols and have ${symbolsLeft} left
    `;
});

answerInput.addEventListener("input", (event) => {
  const textInput = event.target.value;
  const inputLength = textInput.length;
  const symbolsLeft = answerInput.maxLength - inputLength;
  outputAnswer.innerHTML = `You entered ${inputLength} symbols and have ${symbolsLeft} left
    `;
});

//button show answer function

const formData = new FormData(event.target);
const data = Object.fromEntries(formData);
console.log(data.question);
