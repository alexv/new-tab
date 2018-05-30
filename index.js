'use strict'

// set current time
const now = new Date()
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
hours.innerHTML = (now.getHours() + 11) % 12 + 1
minutes.innerHTML = ('0' + now.getMinutes()).slice(-2)

// calc percent done with year
const firstDayOfYear = new Date(now.getFullYear(), 0, 1)
const lastDayOfYear = new Date(now.getFullYear(), 11, 31)
const percentDoneWithYear =
  (now.getTime() - firstDayOfYear.getTime()) /
  (lastDayOfYear.getTime() - firstDayOfYear.getTime())

// animate progress bar for year
let percent = 0
const totalPercent = percentDoneWithYear.toFixed(2) * 100
const progressBar = document.getElementById('progressBar')
const percentField = document.getElementById('percentField')
const progressCounter = setInterval(() => {
  progressBar.value = percent++
  percentField.innerHTML = percent
  if (percent >= totalPercent) {
    clearInterval(progressCounter)
  }
}, 10)
