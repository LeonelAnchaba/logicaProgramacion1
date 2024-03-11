//Variables
let numeroSecreto = 3;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
    //La condición no se cumplió y estamos fuera de los parámetros esperados
} else if (numeroUsuario < 1 || numeroUsuario > 10){
    alert(`No cumples con los parámetros esperados. Recuerda ingresar un número entre 1 y 10`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}