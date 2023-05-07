function setAllTimezones() {
  // Texas
  let texasElement = document.querySelector("#texas");
  let texasDateElement = texasElement.querySelector(".date");
  let texasTimeElement = texasElement.querySelector(".time");
  setTimezone("America/Chicago", texasDateElement, texasTimeElement);
  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  setTimezone("Australia/Sydney", sydneyDateElement, sydneyTimeElement);
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  setTimezone("Asia/Tokyo", tokyoDateElement, tokyoTimeElement);
}

function setTimezone(timezone, dateElement, timeElement) {
  let currentTime = moment().tz(timezone);
  dateElement.innerHTML = currentTime.format("MMMM Do, YYYY");
  timeElement.innerHTML = currentTime.format("h:mm:ss[<small>]A[</small>]");
}

setInterval(setAllTimezones, 1000);
