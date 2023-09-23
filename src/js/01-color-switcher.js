const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerColor = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomHexColor();
    timerColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerColor);
    startBtn.disabled = false;
});
