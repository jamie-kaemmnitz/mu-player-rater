

document.addEventListener("DOMContentLoaded", () => {
    const playerData = JSON.parse(localStorage.getItem('playerData'));

    if (playerData) {
        document.querySelector('.player-one').textContent = playerData.playerOne;
        document.querySelector('.player-two').textContent = playerData.playerTwo;
        document.querySelector('.player-three').textContent = playerData.playerThree;
        document.querySelector('.player-four').textContent = playerData.playerFour;
        document.querySelector('.player-five').textContent = playerData.playerFive;
        document.querySelector('.player-six').textContent = playerData.playerSix;
        document.querySelector('.player-seven').textContent = playerData.playerSeven;
        document.querySelector('.player-eight').textContent = playerData.playerEight;
        document.querySelector('.player-nine').textContent = playerData.playerNine;
        document.querySelector('.player-ten').textContent = playerData.playerTen;
        document.querySelector('.player-eleven').textContent = playerData.playerEleven;
        document.querySelector('.player-twelve').textContent = playerData.playerTwelve;
        document.querySelector('.player-thirteen').textContent = playerData.playerThirteen;
        document.querySelector('.player-fourteen').textContent = playerData.playerFourteen;
        document.querySelector('.player-fifteen').textContent = playerData.playerFifteen;
        document.querySelector('.player-sixteen').textContent = playerData.playerSixteen;
        document.querySelector('.player-seventeen').textContent = playerData.playerSeventeen;
        document.querySelector('.player-eighteen').textContent = playerData.playerEighteen;
        document.querySelector('.player-nineteen').textContent = playerData.playerNineteen;
        document.querySelector('.player-twenty').textContent = playerData.playerTwenty;
        document.querySelector('.player-twentyone').textContent = playerData.playerTwentyone;
        document.querySelector('.player-twentytwo').textContent = playerData.playerTwentytwo;
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const myRatingData = JSON.parse(localStorage.getItem('myRatingData'));

    if (myRatingData) {
        document.querySelector('.myrating-one').textContent = myRatingData.myRatingOne || 'N/A';
        document.querySelector('.myrating-two').textContent = myRatingData.myRatingTwo || 'N/A';
        document.querySelector('.myrating-three').textContent = myRatingData.myRatingThree || 'N/A';
        document.querySelector('.myrating-four').textContent = myRatingData.myRatingFour || 'N/A';
        document.querySelector('.myrating-five').textContent = myRatingData.myRatingFive || 'N/A';
        document.querySelector('.myrating-six').textContent = myRatingData.myRatingSix || 'N/A';
        document.querySelector('.myrating-seven').textContent = myRatingData.myRatingSeven || 'N/A';
        document.querySelector('.myrating-eight').textContent = myRatingData.myRatingEight || 'N/A';
        document.querySelector('.myrating-nine').textContent = myRatingData.myRatingNine || 'N/A';
        document.querySelector('.myrating-ten').textContent = myRatingData.myRatingTen || 'N/A';
        document.querySelector('.myrating-eleven').textContent = myRatingData.myRatingEleven || 'N/A';
        document.querySelector('.myrating-twelve').textContent = myRatingData.myRatingTwelve || 'N/A';
        document.querySelector('.myrating-thirteen').textContent = myRatingData.myRatingThirteen || 'N/A';
        document.querySelector('.myrating-fourteen').textContent = myRatingData.myRatingFourteen || 'N/A';
        document.querySelector('.myrating-fifteen').textContent = myRatingData.myRatingFifteen || 'N/A';
        document.querySelector('.myrating-sixteen').textContent = myRatingData.myRatingSixteen || 'N/A';
        document.querySelector('.myrating-seventeen').textContent = myRatingData.myRatingSeventeen || 'N/A';
    };
});

function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}

document.addEventListener("DOMContentLoaded", () => {
    const currentPage = getCurrentPage();

    if (currentPage === "index.html") {
        const form = document.getElementById("ratings-form");
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                const formData = new FormData(e.target);
                const formRatings = {};

                formData.forEach((value, key) => {
                    formRatings[key] = value;
                });

                localStorage.setItem("yourRatings", JSON.stringify(formRatings));

                window.location.href = 'yourRatings.html';
            });
        }
    } else if (currentPage === "yourRatings.html") {
        const storedFormRatings = JSON.parse(localStorage.getItem("yourRatings"));

    if (storedFormRatings) {

        for (const [key, value] of Object.entries(storedFormRatings)) {
            const cell = document.querySelector(`.${key.replace(/player/, "yourRating")}`);
            if (cell) {
                cell.textContent = value || "N/A";
            }
        }
    } else {
        console.log("no ratings found");
    }
}
});