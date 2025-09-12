function subAppearance() {
    const teamSheet = Array.from(document.querySelectorAll("[class*='player-']"));

    const subs = teamSheet.slice(11, 19);

    subs.forEach((el) => {
        if (el.textContent.trim() === "") {
            const ratingsRow = el.closest("tr");
            if (ratingsRow) {
                ratingsRow.style.display = "none";
            }
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    subAppearance();
});