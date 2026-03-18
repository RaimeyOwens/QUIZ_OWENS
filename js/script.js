console.log("script.js connected!");

document.addEventListener("DOMContentLoaded", function(){ //Make sure the page is loaded fully before using any JavaScript
    let scores = {
        A: 0,
        C: 0,
        P: 0,
        H: 0 
    };

    //Tracking the clicks
    document.querySelectorAll(".answer-btn").forEach(button => {
        button.addEventListener("click", function() {
            const type = this.dataset.type;
            scores[type]++;
            //Shows the visually marked selection once the user clicks it
            this.classList.remove("btn-outline-primary");
            this.classList.add("btn-primary");
        });
    });

    document.getElementById("show-result").addEventListener("click", function() {

        let highest = Object.keys(scores).reduce((a, b) => //Compares all of the career type scores and decides which one is greatest
            scores[a] > scores[b] ? a : b);

        let resultText = "";
        //results displayed
        if (highest === "A") resultText = "Congrats! You are Analytical";
        if (highest === "C") resultText = "Congrats! You are Creative";
        if (highest === "P") resultText = "Congrats! You are People-Oriented";
        if (highest === "H") resultText = "Congrats! You are Practical/Hands-on";
    

        document.getElementById("result-text").textContent = resultText;
        document.getElementById("result-container").style.display = "block";
    });

});