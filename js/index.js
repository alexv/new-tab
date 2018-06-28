import startClock from './clock.js'
import startProgress from './progress.js'

startClock()
startProgress()

let darkMode = false;
let darkStorage = localStorage.getItem('darkMode')
if(darkStorage === 'true'){
  // dark mode is on
  console.log('Dark mode cookie found', darkStorage)
  darkMode = true
  document.getElementById('checkbox').removeAttribute('checked')
  const elements = document.getElementsByTagName('*')
  for (let i=0; i < elements.length; i++){
     elements[i].classList.add('dark')
  }
}
function toggleDarkMode (){
  console.log('Dark Mode Toggled')
  darkMode = !darkMode
  const elements = document.getElementsByTagName('*')
  for (let i=0; i < elements.length; i++){
    elements[i].classList.toggle('dark')
  }
  localStorage.setItem('darkMode', darkMode)
}
const darkBtn = document.getElementById('checkbox')
darkBtn.onclick = () => toggleDarkMode()


