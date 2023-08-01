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

