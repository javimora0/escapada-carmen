const startButton = document.getElementById("startButton");
const gameScreen = document.getElementById("gameScreen");

startButton.addEventListener("click", () => {

    document.querySelector(".welcome").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".welcome").style.visibility = "hidden";

        gameScreen.classList.add("active");

    }, 700);

});