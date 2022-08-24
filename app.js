let redirectionTrueBtn = document.querySelector(
  "button[data-trigger='reviewQ']"
);
let reviewTrueBtn = document.querySelector("button[data-trigger='rating'");
let firstQuestion = document.querySelector(".question.first");
let ratingQuestion = document.querySelector(".rating");
let ratingContainer = document.querySelector(".rv_container");
let radio_buttons = document.querySelectorAll(".rv_rating input[type=radio]");
let ratingMessage = document.querySelector("#ratingMessage");
let footerCloseBtn = document.querySelector(".cz_rv_btn");

redirectionTrueBtn.addEventListener("click", function () {
  firstQuestion.classList.remove("fadeinbottom");
  firstQuestion.classList.add("fadeoutbottom");
  ratingQuestion.style.display = "flex";
  ratingQuestion.classList.add("fadeinbottom2");
});

reviewTrueBtn.addEventListener("click", function () {
  ratingQuestion.classList.add("fadeoutbottom2");
  ratingContainer.style.display = "flex";
  ratingContainer.classList.add("fadeinbottom_rating");
});

radio_buttons.forEach((button) => {
  button.addEventListener("click", function () {
    footerCloseBtn.style.display = "block";
    rating = parseInt(button.getAttribute("data-rating"));
    // document.cookie = "rating=" + rating;
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
        "https://apps.shopify.com/cozy-country-redirect?#modal-show=ReviewListingModal";
      window.open(location);
      ratingMessage.innerHTML =
        "We are grateful. Let us know what we should improve.";
    } else if (rating === 5) {
      let location =
        "https://apps.shopify.com/cozy-country-redirect?#modal-show=ReviewListingModal";
      window.open(location);
      ratingMessage.innerHTML = "We are overjoyed. You just made our day.";
    }
  });
});
footerCloseBtn.addEventListener("click", function () {
  document.querySelector(".rv_modal_wrapper").style.display = "none";
  document.cookie = "close=true";
});

(function () {
  let cookieArray = document.cookie.split(";");
  console.log(cookieArray);
  cookieArray.forEach((cookie) =>
    cookie.search("close=") ? console.log("yes") : console.log("no")
  );
  if (document.cookie == "close=true") {
    document.querySelector(".rv_modal_wrapper").style.display = "none";
  }
})();
