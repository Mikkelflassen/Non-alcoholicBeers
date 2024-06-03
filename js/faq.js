// Add click event listener to each question
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Hide all answers
    document.querySelectorAll(".answer").forEach((answer) => {
      answer.style.display = "none";
    });
    // Toggle the display of the next sibling (answer) when the question is clicked
    question.nextElementSibling.style.display = "block";
  });
});
