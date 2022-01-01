/*to calculate dateDifferenceInMilliSeconds, we say
 let dateDifference = newyearsdate - todaydate

 days = dateDifference/(1000*60 * 60 * 24)
 hours = dateDifference /(1000 * 60 * 60 )%24
 minutes = dateDifference /(1000 * 60 )% 60
 seconds =dateDifference) / (1000) %60

 round-up the answer to a whole number using Math.floor() method
 */

function timeReading() {

    let year = '1 jan 2023'

    let newYearDate = new Date(year)
    let todayDate = new Date()

    let dateDifference = newYearDate - todayDate

    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
    let hours = Math.floor(dateDifference / (1000 * 60 * 60) % 24)
    let minutes = Math.floor(dateDifference / (1000 * 60) % 60)
    let seconds = Math.floor((dateDifference) / (1000) % 60)

    //console.log(days, hours, minutes, seconds)
    //store the DOMs in a variable
    let day = document.getElementById('days')
    let hr = document.getElementById('hours')
    let min = document.getElementById('minutes')
    let sec = document.getElementById('seconds')

    day.innerHTML = days
    hr.innerHTML = hours
    min.innerHTML = minutes
    sec.innerHTML = seconds

    if (days === 0) {
        alert('HAPPY NEW YEAR WORLD')
    }

}
timeReading()
setInterval(timeReading, 1000)