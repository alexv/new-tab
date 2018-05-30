export default function startClock() {
  const now = new Date()
  const hours = document.getElementById('hours')
  const minutes = document.getElementById('minutes')
  hours.innerHTML = (now.getHours() + 11) % 12 + 1
  minutes.innerHTML = ('0' + now.getMinutes()).slice(-2)
}
