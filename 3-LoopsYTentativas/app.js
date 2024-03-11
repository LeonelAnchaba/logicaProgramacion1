//Variables
// let numeroSecreto = 4;
// let numeroUsuario = 0;
// let intentos = 1;
// let palabraIntento = 'intento';


// //Mientras el numero que ingresa sea distinto al número secreto...
// while (numeroUsuario != numeroSecreto) {
//     numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

//     console.log(numeroUsuario);
//     if (numeroUsuario == numeroSecreto) {
//         //Acertamos, fue verdadera la condición
//         alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraIntento}`);
//     } else {
//         if (numeroUsuario > numeroSecreto) {
//             alert('El número secreto es menor');
//         } else {
//             alert('El número secreto es mayor');
//         }
//         //Incrementamos el contador cuando no acierta
//         intentos = intentos + 1;
//         palabraIntento = 'intentos';
//         //La condición no se cumplió
//         //alert('Lo siento, no acertaste el número');
//     }
// }


let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
    contador--;
}

let promedio = soma / qtdNumeros;

console.log(promedio);
