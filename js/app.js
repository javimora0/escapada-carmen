const startButton = document.getElementById("startButton");
const gameScreen = document.getElementById("gameScreen");
const clueScreen = document.getElementById("clueScreen");

const answerButtons = document.querySelectorAll(".answer");
const continueButton = document.getElementById("continueButton");


// ======================================
// COMENZAR LA AVENTURA
// ======================================

startButton.addEventListener("click", () => {

    document.querySelector(".welcome").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".welcome").style.visibility = "hidden";

        gameScreen.classList.add("active");

    }, 700);

});


// ======================================
// RESPUESTA A LA PREGUNTA 1
// ======================================

answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.dataset.answer;

        console.log("Respuesta elegida:", answer);

        gameScreen.classList.remove("active");

        setTimeout(() => {

            clueScreen.classList.add("active");

        }, 700);

    });

});


// ======================================
// CONTINUAR
// ======================================

continueButton.addEventListener("click", () => {

    clueScreen.classList.remove("active");

    setTimeout(() => {

        gameScreen.classList.add("active");

    }, 700);

});