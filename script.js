const timerForm = document.querySelector(".timer-form");
const timerInput = document.querySelector(".timer-input");
const timerButton = document.querySelector(".timer-button");
const timer = document.querySelector(".timer");

const daysValue = document.querySelector(".days-value");
const daysLabel = document.querySelector(".days-label");

const hoursValue = document.querySelector(".hours-value");
const hoursLabel = document.querySelector(".hours-label");

const minsValue = document.querySelector(".mins-value");
const minsLabel = document.querySelector(".mins-label");

const secsValue = document.querySelector(".secs-value");
const secsLabel = document.querySelector(".secs-label");

let intervalId = null;
let targetDate = null;

timerForm.addEventListener("submit", event => {
  event.preventDefault();

  const seconds = Number(timerInput.value);

  if (!Number.isInteger(seconds) || seconds < 1) {
    return;
  }

  clearInterval(intervalId);

  targetDate = Date.now() + seconds * 1000;

  updateTimer();

  intervalId = setInterval(() => {
    updateTimer();
  }, 1000);
});

function updateTimer() {
  const time = Math.max(0, targetDate - Date.now());

  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const mins = Math.floor(
    (time % (1000 * 60 * 60)) / (1000 * 60)
  );

  const secs = Math.floor(
    (time % (1000 * 60)) / 1000
  );

  daysValue.textContent = days;
  hoursValue.textContent = String(hours).padStart(2, "0");
  minsValue.textContent = String(mins).padStart(2, "0");
  secsValue.textContent = String(secs).padStart(2, "0");

  if (time === 0) {
    clearInterval(intervalId);
  }
}