//Primer curso, módulo 2:

// // Ejercicio 1:
//  Pregunta al usuario qué día de la semana es. 
// Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
// De lo contrario, muestra "¡Buena semana!".

// let dia = prompt("¿Qué dia de la semana es?")

// if(dia == "Sábado" || dia == "Domingo") {
//     alert("Buen fin de semana")
// } else if (dia == "Lunes" || dia =="Martes" || dia == "Miércoles" || dia == "Jueves" || dia == "Viernes"){
//     alert("¡Buena semana!")
// } else {
//     alert("Debes ingresar un día")
// }


// // Ejercicio 2:
//  Verifica si un número ingresado por el usuario es positivo o negativo. 
// Muestra una alerta informativa.

// let numeroIngresado = prompt("Ingresa un número");

// if (numeroIngresado < 0 ) {
//     alert("El número es negativo")
// } else if (numeroIngresado > 0 ) {
//     alert("El número es positivo")
// } else {
//     alert("El número ingresado es " + numeroIngresado)
// }


// // Ejercicio 3:
//  Crea un sistema de puntuación para un juego. 
// Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
//  En caso contrario, muestra "Intenta nuevamente para ganar.".
// let puntuacion = 60;

// if (puntuacion >= 100) {
//     alert("¡Felicidades, has ganado!")
// } else {
//     alert("Intenta nuevamente para ganar.")
// }


// // Ejercicio 4:
//  Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
// utilizando un template string para incluir el valor del saldo.

// let saldo = 100000

// alert("Estimado usuario, su saldo disponible es de: $" + saldo)


// // Ejercicio 5:
//  Pide al usuario que ingrese su nombre mediante un prompt.
// Luego, muestra una alerta de bienvenida usando ese nombre.

// let nombre = prompt("Ingrese su nombre");

// alert(nombre)