// Crea una función que convierta grados celsius a grados fahrenheit.

let enCelsius = prompt("Introduzca temperatura en grados Celsius para convertir a grados Fahrenheit");
let enFahrenheit = celsiusAfahrenheit(enCelsius);


function celsiusAfahrenheit(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
    }

console.log(enFahrenheit); // debería mostrar "68" en la consola
alert(enCelsius + " grados Celsius = " + enFahrenheit + " gradosFahrenheit")