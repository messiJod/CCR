let redirectionTrueBtn = document.querySelector(
  "button[data-trigger='reviewQ']"
);
let reviewTrueBtn = document.querySelector("button[data-trigger='rating'");
let firstQuestion = document.querySelector(".question.first");
let ratingQuestion = document.querySelector(".rating");
let ratingContainer = document.querySelector(".rv_container");
let radio_buttons = document.querySelectorAll(".rv_rating input[type=radio]");
let ratingMessage = document.querySelector("#ratingMessage");

redirectionTrueBtn.addEventListener("click", function () {
  firstQuestion.classList.remove("fadeinbottom");
  firstQuestion.classList.add("fadeoutbottom");
  ratingQuestion.classList.add("fadeinbottom2");
});

reviewTrueBtn.addEventListener("click", function () {
  ratingQuestion.classList.add("fadeoutbottom2");
  ratingContainer.classList.add("fadeinbottom_rating");
});

radio_buttons.forEach((button) => {
  button.addEventListener("click", function () {
    rating = parseInt(button.getAttribute("data-rating"));
    document.cookie = "rating=" + rating;
    if (rating === 1) {
      ratingMessage.innerHTML = "Oh No! Please let us know what went wrong!";
    } else if (rating === 2) {
      ratingMessage.innerHTML =
        "Sorry for the inconvenience. Kindly reach out and let us help.";
    } else if (rating === 3) {
      ratingMessage.innerHTML =
        "Thank you.<br> Please share some feedback for us to work on.";
    } else if (rating === 4) {
      let location =
        "https://apps.shopify.com/cozy-antitheft-for-images-and-more?utm_source=ask-review&#modal-show=ReviewListingModal&utm_medium=Review%20Modal";
      window.open(location);
      ratingMessage.innerHTML =
        "We are grateful. Let us know what we should improve.";
    } else if (rating === 5) {
      let location =
        "https://apps.shopify.com/cozy-antitheft-for-images-and-more?utm_source=ask-review&#modal-show=ReviewListingModal&utm_medium=Review%20Modal";
      window.open(location);
      ratingMessage.innerHTML = "We are overjoyed. You just made our day.";
    }
  });
});
