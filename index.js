document.addEventListener("DOMContentLoaded", function () {
    // Getting today
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayDate = new Date();
    const dayOfTheWeek = weekDay[todayDate.getDay()];
    const dayOfTheWeekParagraph = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfTheWeekParagraph.textContent = `Current Day of the Week: ${dayOfTheWeek}`;

    // getting the UTC time
    const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
    const timeInUtc = todayDate.toUTCString();
    currentTime.textContent = `Current UTC Time: ${timeInUtc}`;
});



