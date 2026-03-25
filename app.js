function convert() {
  let value = parseFloat(document.getElementById("tempInput").value);
  let unit = document.getElementById("unitSelect").value;
  let resultBox = document.getElementById("resultBox");

  if (isNaN(value)) {
      resultBox.innerHTML = " Iltimos son kiriting";
      return;
  }

  if (unit === "K" && value < 0) {
      resultBox.innerHTML = " Kelvin 0 dan past bo‘lishi mumkin emas";
      return;
  }
  if (unit === "C" && value < -273) {
      resultBox.innerHTML = " Celsius -273°C dan past bo‘lishi mumkin emas";
      return;
  }

  let C, F, K;

  if (unit === "C") {
      C = value;
      F = (value * 9/5) + 32;
      K = value + 273.15;
  } 
  else if (unit === "F") {
      C = (value - 32) * 5/9;
      F = value;
      K = C + 273.15;
  } 
  else if (unit === "K") {
      C = value - 273.15;
      F = (C * 9/5) + 32;
      K = value;
  }

  resultBox.innerHTML =
      " Celsius: " + C.toFixed(2) + "°C<br>" +
      " Fahrenheit: " + F.toFixed(2) + "°F<br>" +
      " Kelvin: " + K.toFixed(2) + "K";

}