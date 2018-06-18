let time = function() {
  let date = new Date(),
      hours = document.getElementById('hours'),
      minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds');

  if(hours.innerText < 9) {
    hours.textContent = '0'+ date.getHours();
  } else {
    hours.textContent = date.getHours();
  }

  if(minutes.innerText < 9) {
    minutes.textContent = '0'+ date.getMinutes();
  } else {
    minutes.textContent = date.getMinutes();
  }

  if(seconds.innerText < 9) {
    seconds.textContent = '0'+ date.getSeconds();
  } else {
    seconds.textContent = date.getSeconds();
  }
  console.log(seconds.innerText.length);
};
setInterval (time,1000);
