function setAllTimezones() {
  // Texas
  let texasElement = document.querySelector("#texas");
  if (texasElement) {
    let texasDateElement = texasElement.querySelector(".date");
    let texasTimeElement = texasElement.querySelector(".time");
    setTimezone("America/Chicago", texasDateElement, texasTimeElement);
  }

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    setTimezone("Australia/Sydney", sydneyDateElement, sydneyTimeElement);
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    setTimezone("Asia/Tokyo", tokyoDateElement, tokyoTimeElement);
  }
}

function setTimezone(timezone, dateElement, timeElement) {
  let currentTime = moment().tz(timezone);
  dateElement.innerHTML = currentTime.format("MMMM Do, YYYY");
  timeElement.innerHTML = currentTime.format("h:mm:ss[<small>]A[</small>]");
}

setInterval(setAllTimezones, 1000);

function updateCity(event) {
  let selectedCityTimezone = event.target.value;
  let cityName = event.target.selectedOptions[0].text;

  if (!cityName) {
    cityName = document.querySelector("#city-search").value;
  }

  let selectedCityTime = moment().tz(selectedCityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${selectedCityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${selectedCityTime.format(
        "h:mm:ss"
      )}<small>${selectedCityTime.format(" A")}</small></div>
    </div>
  `;
}

function searchCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-search").value;

  // Try to find the timezone using moment-timezone
  let timezone = moment.tz.names().find((name) => {
    return name.toLowerCase().includes(cityName.toLowerCase());
  });

  if (timezone) {
    let selectedCityTime = moment().tz(timezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${selectedCityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${selectedCityTime.format(
          "h:mm:ss"
        )}<small>${selectedCityTime.format(" A")}</small></div>
      </div>
    `;
  } else {
    alert(`Sorry, we couldn't find the timezone for "${cityName}".`);
  }
  document.querySelector("#city-search").value = "";
}

let citiesSelectElement = document.querySelector("#city-select");
let citySearchElement = document.querySelector("#city-search");
let searchFormElement = document.querySelector("#search-form");

citiesSelectElement.addEventListener("change", updateCity);
searchFormElement.addEventListener("submit", searchCity);
