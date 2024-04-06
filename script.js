const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const lapsList = document.getElementById('laps'); // Optional: Lap list element

let startTime = 0;
let elapsedTime = 0;
let intervalId;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);


function startTimer() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 10); // Update every 10 milliseconds
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);
  elapsedTime = Date.now() - startTime;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  display.textContent = '00:00:000';
  stopBtn.disabled = true; // Disable stop button on reset
  lapsList.innerHTML = ''; // Optional: Clear lap list on reset
}

function updateTime() {
  const currentTime = elapsedTime + Date.now() - startTime;
  const milliseconds = Math.floor((currentTime % 1000) / 10);
  const seconds = Math.floor((currentTime / 1000) % 60);
  const minutes = Math.floor((currentTime / (1000 * 60)) % 60);
  const formattedTime = `<span class="math-inline">\{minutes\.toString\(\)\.padStart\(2, '0'\)\}\:</span>{seconds.toString().padStart()}`;
}
