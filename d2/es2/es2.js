// Initial time in seconds
let timePassed = sessionStorage.getItem('timePassed') ? parseInt(sessionStorage.getItem('timePassed')) : 0;

// update the timer 
function updateTimer() {
    timePassed++;
    document.getElementById("timer").textContent = timePassed;
    sessionStorage.setItem('timePassed', timePassed); // Store the updated time in sessionStorage
}

// updateTimer every second
setInterval(updateTimer, 1000);
