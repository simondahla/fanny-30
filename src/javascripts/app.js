// import $ from 'jquery';
// import micron from 'webkul-micron';
import Noty from 'noty';
// import 'fullpage.js';
import './modules'

console.log(`app.js has loaded!`)

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date('2018-03-10 19:00');
initializeClock('clockdiv', deadline);


var options = $('input[name="status"]');
var n;

$('input[name="status"]').on('change', function(){
  
  var val = $(this).val();
  
  if (val === 'maybe') {

    n = new Noty({
      // timeout: timeout,
      theme: 'relax',
      type: 'error',
      layout: 'topCenter',
      text: '😖 Men ta & bestäm dig då för fan!',
      buttons: [
        Noty.button('Ja men okej då', 'btn btn-success', function() {
          $(options[0]).click();

          n.close();
        }),

        Noty.button('Eh skitsamma', 'btn btn-error', function() {
          $(options[2]).click();

          n.close();
      })
      ]
    }).show();

  } else {

    if (n !== null){
      n.close();  
    }
    
    
  }


});
