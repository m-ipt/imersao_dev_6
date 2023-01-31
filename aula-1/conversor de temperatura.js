// Conversor de escalas de temperatura //

var temperatura = prompt("Insira um valor para ser convertido de Celsius para Kelvin e Fahrenheit.");

var temperatura = parseInt(temperatura);
var kelvin = 273 + temperatura;
var fahrenheit = (temperatura * 1.8) + 32;
fahrenheit = fahrenheit.toFixed(2);

alert("A temperatura de " + temperatura + " graus em Celsius será de " + kelvin + " em Kelvin e em Fahrenheit será de " + fahrenheit)