"use strict";

const questions = document.querySelectorAll(".content-wrapper");

questions.forEach((question) => {
  const btn = question.querySelector(".bi");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      // console.log(item, question);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");

    if (this.classList.contains("bi-plus-square-fill")) {
      this.classList.remove("bi-plus-square-fill");
      this.classList.toggle("bi-dash-square-fill");
    } else {
      this.classList.remove("bi-dash-square-fill");
      this.classList.toggle("bi-plus-square-fill");
    }
  });
});
