// DARK MODE TOGGLE
document.querySelector('.dark-mode-switch').onclick = () => {
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('body').classList.toggle('light')
}

//CHECK LEAP YEAR
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400
        !==0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

let calendar = document.querySelector('calendar')

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December']

let monthPicker = document.querySelector('#month-picker')

// GENERATE CALENDAR
generateCalendar = (month, year) => {
    let calendardays = document.querySelector('.calendar-days')
    let calendarHeaderYear = document.querySelector('#year')

    let daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30,
        31]

        let currData = new Date()

        monthPicker.innerHTML = monthNames[month]
        calendarHeaderYear.innerHTML = year 

        let firstDay = new Date(month, year, 1)

        for (let i = 0; i<= daysOfMonth[month] + firs .getDay() -1; i++) {
            
        }

}


