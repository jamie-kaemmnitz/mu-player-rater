
function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}

function findDifference () {
    const yourRatingText = document.querySelectorAll("[class*='yourRating']");
    const myRatingText = document.querySelectorAll("[class*='myrating']");
    const difference = document.querySelectorAll("[class*='difference']");
    
    yourRatingText.forEach((el, index) => {   
        const yourRatingNumber = Number(el.textContent.trim());
        const myRatingNumber = Number(myRatingText[index].textContent.trim());

        if (!isNaN(yourRatingNumber) && !isNaN(myRatingNumber)) {
            difference[index].textContent = yourRatingNumber - myRatingNumber;
        } else {
            difference[index].textContent = "N/A";
        }
    });
};

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
        findDifference();
    } else {
        console.log("no ratings found");
    }
}
});

