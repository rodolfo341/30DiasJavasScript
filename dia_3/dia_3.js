// Ejercicios: Nivel 1

// 1    Declare las siguientes variables; 
//          firstName, 
//          lastName, 
//          country, 
//          city, 
//          age, 
//          isMarried, 
//          year y 
//          asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = "Rodolfo"; 
let lastName = "Aravena"; 
let country = "Chile"; 
let city = "Santiago"; 
let age = 51; 
let isMarried = true; 
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2    Verifique si typeof '10' es igual a 10
if( typeof '10' === '10' ){
    console.log("True")
} else {
    console.log("False")
}

// 3    Verifique si parseInt('9.8') es igual a 10
if ( parseInt('9.8') === 10) {
    console.log("True");
} else {
    console.log("False");
}

// 4   Verifique cualquier valor booleano true o false.
//        Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
//        Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
let valor1 = 5 ? console.log("true"):console.log("False");
let valor2 = 5.5 ? console.log("true"):console.log("False");
let valor3 = -5 ? console.log("true"):console.log("False");
let valor4 = false ? console.log("true"):console.log("False");
let valor5 = 0 ? console.log("true"):console.log("False");
let valor6 = null ? console.log("true"):console.log("False");

// 5    Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). 
//      Después de decidir el resultado, confirmelo usando console.log()
//        4 > 3
//        4 >= 3
//        4 < 3
//        4 <= 3
//        4 == 4
//        4 === 4
//        4 != 4
//        4 !== 4
//        4 != '4'
//        4 == '4'
//        4 === '4'
let res1 = 4 > 3;
console.log(res1);
let res2 = 4 >= 3;
console.log(res2);
let res3 = 4 < 3;
console.log(res3);
let res4 = 4 <= 3;
console.log(res4);
let res5 = 4 == 4;
console.log(res5);
let res6 = 4 === 4;
console.log(res6);
let res7 = 4 != 4;
console.log(res7);
let res8 = 4 !== 4;
console.log(res8);
let res9 = 4 != '4';
console.log(res9);
let res10 = 4 == '4';
console.log(res10);
let res11 = 4 === '4';
console.log(res11);
//        Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
let long1 = "Python".length;
console.log(long1);
let long2 = "Python".length;
console.log(long2);

console.log( long1.length !== long2.length );

// 6    Calcule primero el resultado de las siguientes expresiones sin usar console.log(). 
//      Después de decidir el resultado, confirmelo usando console.log()
//        4 > 3 && 10 < 12
//        4 > 3 && 10 > 12
//        4 > 3 || 10 < 12
//        4 > 3 || 10 > 12
//        !(4 > 3)
//        !(4 < 3)
//        !(false)
//        !(4 > 3 && 10 < 12)
//        !(4 > 3 && 10 > 12)
//        !(4 === '4')
//        No hay 'on' tanto en dragon como en python

let resp1  = 4 > 3 && 10 < 12;
console.log(resp1);
let resp2  = 4 > 3 && 10 > 12;
console.log(resp2);
let resp3  = 4 > 3 || 10 < 12;
console.log(resp3);
let resp4  = 4 > 3 || 10 > 12;
console.log(resp4);
let resp5  = !(4 > 3);
console.log(resp5);
let resp6  = !(4 < 3);
console.log(resp6);
let resp7  = !(false);
console.log(resp7);
let resp8  = !(4 > 3 && 10 < 12);
console.log(resp8);
let resp9  = !(4 > 3 && 10 > 12);
console.log(resp9);
let resp10 = !(4 === '4');
console.log(resp10);
//let resp11 = No hay 'on' tanto en dragon como en python;









/*    Utilice el objeto Date para realizar las siguientes actividades
        ¿Qué año es hoy?
        ¿Qué mes es hoy con un número?
        ¿Qué fecha es hoy?
        ¿Qué día es hoy con un número?
        ¿Cuál es la hora actual?
        ¿Cuántos minutos hay actualmente?
        Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.

Ejercicios: Nivel 2

    Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

    Ingrese base: 20
    Ingrese altura: 10
    El área del triángulo es: 100

Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

Ingrese lado a: 5
Ingrese lado b: 4
Ingrese lado c: 3
El perimetro del triangulo es: 12

Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2

La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)

Compare la pendiente de las dos preguntas anteriores.

Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

Ingrese horas: 40
Introduce la tarifa por hora: 28
Su ganancia semanal es 1120

Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

let firstName = "Asabeneh";
let lastName = "Yetayeh";

Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.

Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.

let myAge = 250;
let yourAge = 25;

Soy 225 años mayor que tú.

Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

Introduzca el año de nacimiento: 1995
Tienes 25 años. Tienes la edad suficiente para conducir.

Introduzca el año de nacimiento: 2005
Tienes 15 años. Podrás conducir después de 3 años.

Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

Ingrese el número de años de vida: 100
 Viviste 3153600000 segundos.

    Cree un formato de hora legible por humanos usando el objeto Date.
        YYYY-MM-DD HH:mm
        DD-MM-YYYY HH:mm
        DD/MM/YYYY HH:mm

Ejercicios: Nivel 3

    Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
        YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/