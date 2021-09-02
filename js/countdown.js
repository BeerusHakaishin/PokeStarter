// Set the date we're counting down to
const countDownDate = new Date("Jan 16, 2022 00:00:01").getTime();

// Update the count down every 1 second
let countdownfunction = setInterval(function() {

  // Get todays date and time
  let now = new Date().getTime();
  
  // Find the distance between now an the count down date
  let distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="countDown"
  document.getElementById("countDown").innerHTML = days + "j " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countDown").innerHTML = "JOYEUX POKE ANNIVERSAIRE !";
  }
}, 1000);