function convert() {
    var input = document.getElementById("input").value;
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");
  
    if (unit === "celsius") {
      var fahrenheit = (input * 9) / 5 + 32;
      var kelvin = parseFloat(input) + 273.15;
  
      resultElement.innerHTML =
        input + "°C = " + fahrenheit + "°F = " + kelvin + "K";
    } else if (unit === "fahrenheit") {
      var celsius = ((input - 32) * 5) / 9;
      var kelvin = ((input - 32) * 5) / 9 + 273.15;
  
      resultElement.innerHTML =
        input + "°F = " + celsius + "°C = " + kelvin + "K";
    } else if (unit === "kelvin") {
      var celsius = parseFloat(input) - 273.15;
      var fahrenheit = (input - 273.15) * (9 / 5) + 32;
  
      resultElement.innerHTML =
        input + "K = " + celsius + "°C = " + fahrenheit + "°F";
    }
  }
  