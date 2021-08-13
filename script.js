// javascript

const content = document.getElementById("content");
const contentForm = document.getElementById("content-form");
const count = document.getElementById("count");
const reset = document.getElementById("reset");
const result = document.getElementById("result");

contentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let totalWords = content.value;
  let arrayWords = totalWords.split(" ");
  console.log(arrayWords);
  console.log(arrayWords.length);
  result.textContent = `Number of words: ${arrayWords.length} words`;
});

contentForm.addEventListener("reset", function () {
  result.textContent = `Number of words: 0`;
});
