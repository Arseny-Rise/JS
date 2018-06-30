
window.addEventListener('DOMContentLoaded', function() {
  let tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info_header = document.getElementsByClassName('info-header')[0],
      info = document.getElementsByClassName('info')[0],
      descrBtn = document.getElementsByClassName('description-btn');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1)

  function showTabContent(b) {
    if ( tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.add('show');
    }
  };

  info_header.addEventListener('click', function(event) {
    let target = event.target;
    if (target.className == 'info-header-tab'){
      for (let i = 0; i < tab.length ; i++) {
        if (target == tab[i]) {
          showTabContent(i);
        }
      }
    }
  });

  //Overlay

  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  info.addEventListener('click', function(event) {
    let target = event.target;

    if (target.className == 'description-btn') {
      console.log('ebat');
      this.classList.add('more-splash');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  });

  more.addEventListener('click', function(e) {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function(e) {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });


  // Timer
  let deadline = new Date('2018-06-31T15:22');

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor( (t/1000) % 60 ),
    minutes = Math.floor( (t/1000/60) % 60 ),
    hours = Math.floor( (t/(1000*60*60)) );

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        timeInterval = setInterval(updateClock, 1000),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime),
          h = t.hours.toString(), m = t.minutes.toString(), s = t.seconds.toString();

      if(t.hours < 10) h = '0' + h;
      if(t.minutes < 10) m = '0' + m;
      if(t.seconds < 10) s = '0' + s;

      if (t.total <= 0) {
        clearInterval(timeInterval);
        if(t.total == 0) ViewClock(h, m, s);
        return false;
      }

      ViewClock(h, m, s);
    }

    function ViewClock(h = '00', m = '00', s = '00') {
      hours.innerHTML = h;
      minutes.innerHTML = m;
      seconds.innerHTML = s;
    }

    updateClock();
  }

  setClock('timer', deadline);

});
