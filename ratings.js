function autoFillRatings() {
    const getRating = document.querySelectorAll("[class*='myrating']");
    const getReview = document.querySelectorAll("[class*='p-']");

    getRating.forEach((el) => {
        el.textContent = el.textContent.trim() || 'N/A';
    });

    getReview.forEach((el) => {
        el.textContent = el.textContent.trim() || 'Did not play';
    });
};

function europeanSubs() {
    const playerTwentyOne = document.querySelector(".player-twentyone");
    const playerTwentyTwo = document.querySelector(".player-twentytwo");

    if (playerTwentyOne.textContent.trim() === "" && playerTwentyTwo.textContent.trim() === "") {
        document.getElementById("european-games").style.display = "none";
    };
};

document.addEventListener("DOMContentLoaded", () => {
    autoFillRatings();
    europeanSubs();
});