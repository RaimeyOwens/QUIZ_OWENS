console.log("script.js connected!");
/**
 * 
 * I decided to do the point system this way
 * Points    Type
 * 4-6    =   A
 * 7-9    =   P 
 * 10-12  =   H 
 * 13-16  =   C
 * 
 */
document.addEventListener("DOMContentLoaded", function(){ //Make sure the page is loaded fully before using any JavaScript
    let selectedPoints = {};

    //Tracking the clicks
    document.querySelectorAll(".question-block").forEach((question, index) => {
    question.querySelectorAll(".answer-btn").forEach((button) => {
      button.addEventListener("click", function () {
        // Removes the highlight from other answers
        question.querySelectorAll(".answer-btn").forEach((b) => {
          b.classList.remove("btn-primary");
          b.classList.add("btn-outline-primary");
        });

        // Highlights the selected answer
        this.classList.remove("btn-outline-primary");
        this.classList.add("btn-primary");

        // Stores the points for this question
        selectedPoints[index] = parseInt(this.dataset.points);
      });
    });
  });

    function displayResult() {
        // Sum all selected points
        const totalPoints = Object.values(selectedPoints).reduce(
        (sum, val) => sum + val,
        0
        );

        // Determine career type based on total points
        let resultText = "";
        if (totalPoints >= 4 && totalPoints <= 6) resultText = "Congrats! You are Analytical";
        else if (totalPoints >= 7 && totalPoints <= 9) resultText = "Congrats! You are People-Oriented";
        else if (totalPoints >= 10 && totalPoints <= 12) resultText = "Congrats! You are Practical / Hands-On";
        else if (totalPoints >= 13 && totalPoints <= 16) resultText = "Congrats! You are Creative";

        // Display the result
        const resultContainer = document.getElementById("result-container");
        const resultTextElement = document.getElementById("result-text");
        resultTextElement.textContent = resultText;
        resultContainer.style.display = "block";
    }

        // The click listener to "Show Results" button
        document.getElementById("show-result").addEventListener("click", displayResult);
});