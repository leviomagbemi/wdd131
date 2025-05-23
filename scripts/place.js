const temperature = 9.8; // °C
const windSpeed = 5; // km/h
const windChillElement = document.querySelector("#wind-chill");

const BASELINE = 13.12;
const TEMP_COEFF = 0.6215;
const WIND_COEFF = 11.37;
const INTERACTION_COEFF = 0.3965;


function calculateWindChill(temperature, windSpeed){
 if (windSpeed < temperature) {
  return `${temperature}°C`;
 }

 const windChill = (BASELINE + TEMP_COEFF * temperature) - (WIND_COEFF * Math.pow(windSpeed, 0.16) + INTERACTION_COEFF * temperature * Math.pow(windSpeed, 0.16))

  return `${windChill}°C`;
}

document.addEventListener("DOMContentLoaded", function(){
  windChillElement.textContent = calculateWindChill(temperature, windSpeed);
})