export default function startProgress() {
  const now = new Date()

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
}
