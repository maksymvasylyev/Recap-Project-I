const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]')
const h1Element = document.querySelector('[data-js="h1Element"]')
bookmarkButton.addEventListener("click", () =>{
    h1Element.classList.add("dark")
});