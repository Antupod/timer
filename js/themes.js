/* ===> This file contains all event handlers when changing themes
            (adding and removing unnecessary classes, adding styles, 
                and then displaying stars in the night sky)          <=== */

// Changing the subject to the night
document.querySelector('#moon').addEventListener('click', function() {
    let boxshadow = "";

    // Setting random parameters to the stars
    for(let i = 0; i <= 1000; i++){
        px = Math.random() < 0.5 ? "-" : "";
        py = Math.random() < 0.5 ? "-" : "";
        x = Math.floor((Math.random() * window.innerWidth) + 1);
        y = Math.floor((Math.random() * window.innerHeight) + 1);
        s = Math.floor((Math.random() * 2) - 1);
        boxshadow += px+x+"px "+py+y+"px 0 "+s+"px #fff,";
    }
    boxshadow = boxshadow.slice(0, -1);
    skyNight.style.boxShadow = boxshadow;

    // changing styles for a specific theme
    bodyColor.style.background = 'linear-gradient(180deg, #112036, #46337a, rgb(229, 156, 156))';
    bodyColor.style.backgroundSize = "170% 170%";

    hours.style.background = '#5a78c8';
    minutes.style.background = '#5a78c8';
    seconds.style.background = '#5a78c8';

    hours.style.color = '#3319a5';
    minutes.style.color = '#3319a5';
    seconds.style.color = '#3319a5';

    hours.style.borderBottom = "5px solid rgb(86, 48, 190)";
    minutes.style.borderBottom = "5px solid rgb(86, 48, 190)";
    seconds.style.borderBottom = "5px solid rgb(86, 48, 190)";

    start.style.color = "#3f37b9";
    start.style.borderBottom = '2px solid rgb(127, 34, 248)';
    
    timerWatch.style.background = '#b3b3e9';
    timerInner.style.color = 'rgb(83, 51, 226)';

    stopTimer.style.background = '#b3b3e9';

    // changing the theme background and icon
    document.getElementById('moon').classList.toggle('notActive');
    document.getElementById('sun').classList.toggle('notActive');
    document.getElementById('backdropSun').classList.toggle('notActive');
});

    // Changing the topic to daytime
document.querySelector('#sun').addEventListener('click', function() {
    // turning off the stars
    boxshadow = "none"
    skyNight.style.boxShadow = boxshadow;

    // changing styles for a specific theme
    bodyColor.style.background = 'linear-gradient(45deg, #ffd95e, #ff9090)';
    bodyColor.style.backgroundSize = "170% 170%";

    hours.style.background = '#fad2c0';
    minutes.style.background = '#fad2c0';
    seconds.style.background = '#fad2c0';

    hours.style.color = '#fa2cde';
    minutes.style.color = '#fa2cde';
    seconds.style.color = '#fa2cde';

    hours.style.borderBottom = "5px solid rgb(233, 115, 198)";
    minutes.style.borderBottom = "5px solid rgb(233, 115, 198)";
    seconds.style.borderBottom = "5px solid rgb(233, 115, 198)";
    
    start.style.color = "#eb417a";
    start.style.borderBottom = '2px solid rgb(248, 34, 141)';

    timerWatch.style.background = '#FFCCE1';
    timerInner.style.color = 'rgb(226, 51, 197)';
   
    stopTimer.style.background = '#FFCCE1';

    // changing the theme background and icon
    document.getElementById('sun').classList.toggle('notActive');
    document.getElementById('moon').classList.toggle('notActive');
    document.getElementById('backdropSun').classList.toggle('notActive');
});