//Ejercicios clase 7:

/*Bucles y repeticiones

1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.*/
const prompt = require("prompt-sync")({sigint:true});
let numero = parseInt (prompt ("Ingrese un numero:  "));

for(let numeroingresado = numero; numeroingresado < numero + 10; numeroingresado++) {
    console.log(`El siguiente numero es: " ${numeroingresado}`);
};

/*2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/
for(let numerosecuencia = 5; numerosecuencia <=20; numerosecuencia += 3) {
    console.log(`Los números de tres en tres a partir de 5 son los siguientes: " ${numerosecuencia}`);
};

/*3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100*/
let sumatoria=0
for(let acumuladora = 0; acumuladora <=100; acumuladora ++) {
    sumatoria += acumuladora;
    console.log(`La sumatoria es: " ${sumatoria}`);
};


/*4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.*/
let numeroParaFactorial = parseInt (prompt ("Ingrese un numero para calcular su factorial:  "));
let resultadoFactorial = 1;

for(let numeroAcumuladora=1; numeroAcumuladora <= numeroParaFactorial; numeroAcumuladora++) {
    resultadoFactorial *= numeroAcumuladora;
   
};
console.log(`El factorial de ${numeroParaFactorial} es ${resultadoFactorial}`);

/*5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.*/

function fibonacciHasta(valorMaximo) {
    let fibonacci = [0, 1];

    for (let i = 2; fibonacci[i - 1] + fibonacci[i - 2] <= valorMaximo; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

let valorIngresado = parseInt(prompt("Ingrese un valor máximo para la serie Fibonacci: "));
let secuenciaFibonacci = fibonacciHasta(valorIngresado);

console.log("Secuencia de Fibonacci hasta " + valorIngresado + ":");
console.log(secuenciaFibonacci);





