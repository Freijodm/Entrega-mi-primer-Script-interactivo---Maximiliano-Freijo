// Solicitar datos al usuario
const nombre = prompt("¿Cuál es tu nombre?");
const anioNacimiento = parseInt(prompt("¿En qué año naciste?"));
const ciudad = prompt("¿En qué ciudad vives?");

// Procesar información
const anioActual = new Date().getFullYear();
let edad = anioActual - anioNacimiento;

// Concatenar strings con variables
let mensaje = "Hola " + nombre + ", actualmente tienes " + edad + " años y vives en " + ciudad + ".";

// Comunicar resultados
console.log(mensaje);
alert(mensaje);