export default function startClock() {
  // "tick" every second (and first second).
  const now = new Date();

  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  hours.innerHTML = ((now.getHours() + 11) % 12) + 1;
  minutes.innerHTML = ('0' + now.getMinutes()).slice(-2);
  seconds.innerHTML = ('0' + now.getSeconds()).slice(-2);
}

// register clock to tick every second.
setInterval(() => {
  startClock();
}, 1000);
