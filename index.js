const bookmarkButton1 = document.querySelector('[data-js="bookmarkButton1"]');
const bookmarkButton2 = document.querySelector('[data-js="bookmarkButton2"]');
const h1Element = document.querySelector('[data-js="h1Element"]');

const buttonQ1 = document.querySelector('[data-js="buttonQ1"]');
const answer1 = document.querySelector('[data-js="answer1"]');

const buttonQ2 = document.querySelector('[data-js="buttonQ2"]');
const answer2 = document.querySelector('[data-js="answer2"]');

const pAnswer = document.querySelector('[data-js="pAnswer"]');
const showAnswer = document.querySelector('[data-js="showAnswer"]');

const pAnswer2 = document.querySelector('[data-js="pAnswer2"]');
const showAnswer2 = document.querySelector('[data-js="showAnswer2"]');

const section1 = document.querySelector('[data-js="section1"]');

const bookmarkPicture1 = document.querySelector('[data-js="bookmarkPicture1"]');
const bookmarkPicture2 = document.querySelector('[data-js="bookmarkPicture2"]');

const bookmarkPicture11 = document.querySelector(
  '[data-js="bookmarkPicture11"]'
);
const bookmarkPicture22 = document.querySelector(
  '[data-js="bookmarkPicture22"]'
);

buttonQ1.addEventListener("click", () => {
  answer1.classList.toggle("show");
  // answer1.setAttribute(display, flex);
  // buttonQ1.innerHTML="Hide Answer";
  pAnswer.classList.toggle("show");
  showAnswer.classList.toggle("hide");
});

buttonQ2.addEventListener("click", () => {
  answer2.classList.toggle("show");
  // answer1.setAttribute(display, flex);
  // buttonQ2.innerHTML="Hide Answer";
  pAnswer2.classList.toggle("show");
  showAnswer2.classList.toggle("hide");
});

bookmarkButton1.addEventListener("click", () => {
  bookmarkPicture1.classList.toggle("bookmarkHide");
  bookmarkPicture2.classList.toggle("bookmarkShow");

  // bookmarkButton1.innerHTML='<img id="bookmark1" src="img/bookmarkChecked.png" alt="Question1" class="bookmarkImage1"/>';
  // section1.classList.add("sectionShow")
});

bookmarkButton2.addEventListener("click", () => {
  bookmarkPicture11.classList.toggle("bookmarkHide");
  bookmarkPicture22.classList.toggle("bookmarkShow");

  // bookmarkButton1.innerHTML='<img id="bookmark1" src="img/bookmarkChecked.png" alt="Question1" class="bookmarkImage1"/>';
  // section1.classList.add("sectionShow")
});
