/* ===> Hiding the menu in the inactive timer 
       and hiding the form and start in the active timer <=== */

document.querySelector('#start').addEventListener('click', function() {
    // checking for empty forms
    let hours = Number(document.getElementById('hours').value);
    let minutes = Number(document.getElementById('minutes').value);
    let seconds = Number(document.getElementById('seconds').value);

    if (hours == 0 && minutes == 0 && seconds == 0) return;

    // changing classes for timer-form and stopTimer
    document.getElementById('timer-form').classList.toggle('blocking');
    document.getElementById('stopTimer').classList.add('active');
});
