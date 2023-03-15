const bookmarkButton1 = document.querySelector('[data-js="bookmarkButton1"]')
const bookmarkButton2 = document.querySelector('[data-js="bookmarkButton2"]')
const h1Element = document.querySelector('[data-js="h1Element"]')

const buttonQ1 = document.querySelector('[data-js="buttonQ1"]')
const answer1 = document.querySelector('[data-js="answer1"]')

const pAnswer = document.querySelector('[data-js="pAnswer"]')
const showAnswer = document.querySelector('[data-js="showAnswer"]')


buttonQ1.addEventListener("click", () => {
    answer1.classList.toggle("show");
    // answer1.setAttribute(display, flex);
    // buttonQ1.innerHTML="Hide Answer";
    pAnswer.classList.toggle("show");
    showAnswer.classList.toggle("hide");
});

// buttonQ1.addEventListener("click", () => {
//     answer1.innerHTML="";
//     buttonQ1.innerHTML="Show answer";
// });

bookmarkButton2.addEventListener("click", () => {
    h1Element.classList.add("dark")
});