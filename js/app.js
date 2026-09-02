// ======================================
// ELEMENTOS
// ======================================

const welcomeScreen = document.getElementById("welcomeScreen");
const startButton = document.getElementById("startButton");


// ======================================
// MOSTRAR UNA PANTALLA
// ======================================

function showScreen(screenId) {

    const currentScreen = document.querySelector(".screen.active");
    const nextScreen = document.getElementById(screenId);

    if (!nextScreen) {
        console.error("No existe la pantalla:", screenId);
        return;
    }

    // Ocultar pantalla actual
    if (currentScreen) {
        currentScreen.classList.remove("active");
    }

    // Mostrar siguiente pantalla
    setTimeout(() => {
        nextScreen.classList.add("active");
    }, 700);
}


// ======================================
// INICIO
// ======================================

startButton.addEventListener("click", () => {

    welcomeScreen.style.opacity = "0";

    setTimeout(() => {

        welcomeScreen.style.visibility = "hidden";

        showScreen("question1");

    }, 700);

});


// ======================================
// RESPUESTAS
// ======================================

const answerButtons = document.querySelectorAll(".answer");

answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.dataset.answer;

        console.log("Respuesta:", answer);

        // Saber en qué pregunta estamos
        const currentQuestion = button.closest(".screen");

        if (currentQuestion.id === "question1") {

            showScreen("clue1");

        }

        else if (currentQuestion.id === "question2") {

            showScreen("clue2");

        }

        else if (currentQuestion.id === "question3") {

            showScreen("clue3");

        }

        else if (currentQuestion.id === "question4") {

            showScreen("clue4");

        }

    });

});


// ======================================
// BOTONES CONTINUAR
// ======================================

const continueButtons = document.querySelectorAll(".continue-button");

continueButtons.forEach(button => {

    button.addEventListener("click", () => {

        const nextScreen = button.dataset.next;

        showScreen(nextScreen);

    });

});