import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import changeTab from "./tabs.js";
import { startTimer, stopTimer } from "./timer.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

const tabButtons = document.querySelector('.nav-tabs');
tabButtons.addEventListener('click', changeTab);

const startTimerBtn = document.querySelector('.timer-start');
const stopTimerBtn = document.querySelector('.timer-stop');

let timerId = null;

dateCalcForm.addEventListener("submit", handleCalcDates);
startTimerBtn.addEventListener("click", function () {
  timerId = startTimer();
});
stopTimerBtn.addEventListener("click", function () {
  stopTimer(timerId);
});

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;
  firstDate = firstDate.value;
  secondDate = secondDate.value;

  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);
  }
  else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}