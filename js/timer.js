/* ===> All the basic timer functions happen here! 
            Here the time is calculated and displayed for the user, 
                  as well as an event handler for stopping the timer is added here <=== */

document.querySelector("#start").onclick = function() {
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  // adding user values to the current ones
  let currentHours = Number(document.getElementById("hours").value) + new Date().getHours();
  let currentMinutes = Number(document.getElementById("minutes").value) + new Date().getMinutes();
  let currentSeconds = Number(document.getElementById("seconds").value) + new Date().getSeconds() +1;

  // Forming the end date
  let deadline = new Date(currentYear, currentMonth, currentDay, currentHours, currentMinutes, currentSeconds);
  let differentsDate = 0;
 
  let timerId = null;

  // calculate the date difference and set the remaining time as the content of the elements
  function countdownTimer() {
    differentsDate = deadline - new Date();

    // Checking if the timer is not over
    if (differentsDate <= 0) { 
      clearInterval(timerId); 
    }

    const convertSeconds = differentsDate > 0 ? Math.floor(differentsDate / 1000) % 60 : 0;
    const convertHours = differentsDate > 0 ? Math.floor(differentsDate / 1000 / 60 / 60) % 24 : 0;
    const convertMinutes = differentsDate > 0 ? Math.floor(differentsDate / 1000 / 60) % 60 : 0;

    // adding zeros if necessary
    hoursUser.textContent = convertHours < 10 ? '0' + convertHours : convertHours;
    minutesUser.textContent = convertMinutes < 10 ? '0' + convertMinutes : convertMinutes;
    secondsUser.textContent = convertSeconds < 10 ? '0' + convertSeconds : convertSeconds;
  }

  // get the time elements for our timer
  const hoursUser = document.querySelector('.timer-hours');
  const minutesUser = document.querySelector('.timer-minutes');
  const secondsUser = document.querySelector('.timer-seconds');
 
  timerId = setInterval(countdownTimer, 1000);
  countdownTimer();

  // stop  timer
  document.querySelector('#stopTimer').addEventListener('click', function() {
    // off timer content
    hoursUser.textContent = '00';
    minutesUser.textContent = '00';
    secondsUser.textContent = '00';
    
    document.getElementById('stopTimer').classList.remove('active');
    document.getElementById('timer-form').classList.remove('blocking');

    // off function
    clearInterval(timerId);
  });
};
