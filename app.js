let redirectionTrueBtn = document.querySelector("button[data-target='review']");
let firstQuestion = document.querySelector(".question.first");
let ratingQuestion = document.querySelector(".rating");

redirectionTrueBtn.addEventListener("click", function () {
  firstQuestion.classList.remove("fadeinbottom");
  firstQuestion.classList.add("fadeoutbottom");
  ratingQuestion.classList.add("fadeinbottom2");
});
