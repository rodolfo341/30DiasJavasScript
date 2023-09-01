// Día 1: Ejercicios

// 1  Escribe un comentario de una sola línea que diga 
//    "los comentarios pueden hacer que el código sea legible"
// 2  Escribe otro comentario que diga, "Bienvenido a 30DaysOfJavaScript"
// 3  Escribe un comentario multilínea que diga, 
//    "Los comentarios pueden hacer el código legible, fácil de usar e informativo"
// 4  Crea un archivo variable.js y declarar variables y asignar tipos de datos string,
//    booleanos, indefinidos y nulos
// 5  Crea el archivo datatypes.js y utilizar el operador "typeof" de JavaScript para 
//    comprobar los diferentes tipos de datos. Comprueba el tipo de datos de cada variable
// 6  Declara cuatro variables sin asignar valores
// 7  Declara cuatro variables con valores asignados
// 8  Declara variables para almacenar su nombre, apellido, estado civil, país y edad en múltiples líneas
// 9  Declara variables para almacenar su nombre, apellido, estado civil, país y edad en una sola línea
// 10  Declara dos variables miEdad y tuEdad y asígneles valores iniciales y regístrese en la consola del navegador.
//         Tengo 25 años.
//         Tú tienes 30 años.


// 1  Escribe un comentario de una sola línea que diga 
//    //"los comentarios pueden hacer que el código sea legible"

// 2  Escribe otro comentario que diga, 
//    //"Bienvenido a 30DaysOfJavaScript"

// 3  Escribe un comentario multilínea que diga, 
/*
        "Los comentarios pueden hacer el código 
            legible, 
            fácil de usar e 
            informativo"
*/

// 4  Crea un archivo variable.js y declarar variables y asignar tipos de datos string,
//    booleanos, indefinidos y nulos
let cadena = "esto es una cadena";
let noDefinido = undefined;
let nulo = null;

// 5  Crea el archivo datatypes.js y utilizar el operador "typeof" de JavaScript para 
//    comprobar los diferentes tipos de datos. Comprueba el tipo de datos de cada variable
console.log(typeof(cadena))
console.log(typeof(noDefinido))
console.log(typeof(nulo))

// 6  Declara cuatro variables sin asignar valores
let variable1;
let variable2;
let variable3;
let variable4;

// 7  Declara cuatro variables con valores asignados
let variable5 = "cadena";
let variable6 = true;
let variable7 = 5;
let variable8 = 5.0;

// 8  Declara variables para almacenar su nombre, apellido, estado civil, país y edad en múltiples líneas
/*
let nombre = "Rodolfo"
let apellido = "Aravena"
let estadoCivil = false
let país = "Chile"
let edad = 51
*/

// 9  Declara variables para almacenar su nombre, apellido, estado civil, país y edad en una sola línea
let nombre = "Rodolfo", apellido = "Aravena", estadoCivil = false, país = "Chile", edad = 51;

// 10  Declara dos variables miEdad y tuEdad y asígneles valores iniciales y regístrese en la consola del navegador.
//         Tengo 25 años.
//         Tú tienes 30 años.
let miEdad = 51;
let tuEdad = 54;
console.log("tengo " + miEdad + "años")
console.log("tu tienes " + tuEdad + "años")
 
// 🎉 ¡FELICIDADES! 🎉
