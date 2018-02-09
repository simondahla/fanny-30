import jQuery from 'jquery';
import micron from 'webkul-micron';
import 'fullpage.js';
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

jQuery(document).ready(function() {
  jQuery('#fullpage').fullpage({
    // //Navigation
    // menu: '#menu',
    // lockAnchors: false,
    // anchors:['firstPage', 'secondPage'],
    // navigation: false,
    // navigationPosition: 'right',
    // navigationTooltips: ['firstSlide', 'secondSlide'],
    // showActiveTooltip: false,
    // slidesNavigation: false,
    // slidesNavPosition: 'bottom',

    // //Scrolling
    // css3: true,
    // scrollingSpeed: 700,
    // autoScrolling: true,
    // fitToSection: true,
    // fitToSectionDelay: 1000,
    // scrollBar: false,
    // easing: 'easeInOutCubic',
    // easingcss3: 'ease',
    // loopBottom: false,
    // loopTop: false,
    // loopHorizontal: true,
    // continuousVertical: false,
    // continuousHorizontal: false,
    // scrollHorizontally: false,
    // interlockedSlides: false,
    // dragAndMove: false,
    // offsetSections: false,
    // resetSliders: false,
    // fadingEffect: false,
    // normalScrollElements: '#element1, .element2',
    // scrollOverflow: false,
    // scrollOverflowReset: false,
    // scrollOverflowOptions: null,
    // touchSensitivity: 15,
    // normalScrollElementTouchThreshold: 5,
    // bigSectionsDestination: null,

    // //Accessibility
    // keyboardScrolling: true,
    // animateAnchor: true,
    // recordHistory: true,

    // //Design
    // controlArrows: true,
    // verticalCentered: true,
    // sectionsColor : ['#ccc', '#fff'],
    // paddingTop: '3em',
    // paddingBottom: '10px',
    // fixedElements: '#header, .footer',
    // responsiveWidth: 0,
    // responsiveHeight: 0,
    // responsiveSlides: false,
    // parallax: false,
    // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    // //Custom selectors
    // sectionSelector: '.section',
    // slideSelector: '.slide',

    lazyLoading: true

    // //events
    // onLeave: function(index, nextIndex, direction){},
    // afterLoad: function(anchorLink, index){},
    // afterRender: function(){},
    // afterResize: function(){},
    // afterResponsive: function(isResponsive){},
    // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });

});


function myFunc(){
    micron.getEle("#clickMe").interaction("bounce");
 }

//Call Interaction
myFunc();