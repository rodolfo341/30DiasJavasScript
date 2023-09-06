// Día 2: Ejercicios
// Ejercicio: Nivel 1

// 1    Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio = '30 días de JavaScript';

// 2    Imprima la cadena en la consola del navegador usando console.log()
console.log(desafio);

// 3    Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafio.length);

// 4    Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
desafioMayus = desafio.toUpperCase();
console.log(desafioMayus);

// 5    Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
desafioMinus = desafio.toLowerCase();
console.log(desafioMinus);

// 6    Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
let subCadena = desafio.substr(0,2)
console.log(subCadena);
let subCadena2 = desafio.substring(0,2)
console.log(subCadena2)

// 7    Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
let subCadena3 = desafio.substring(3,desafio.length)
console.log(subCadena3)

// 8    Verifique si la cadena contiene una palabra Script usando el método includes()
let palabra = "Script";
if (desafio.includes(palabra)){
    console.log("Palabra: " + palabra + " esta incluida")
} else {
    console.log("Palabra: " + palabra + " no esta incluida")
}
// 9   Divide la cadena en un array usando el método split()
let partes = desafio.split(" ");
console.log(partes)

// 10    Divida la cadena 30 días de JavaScript en el espacio usando el método split()
let partes2 = desafio.split(" ");
console.log(partes2)

// 11    'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let it = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let arrayIt = it.split(",");
console.log(arrayIt)

// 12    Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(desafio);
desafio2 = desafio.replace("JavaScript","Python")
console.log(desafio2);

// 13    ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log("El caracter del indice 15 es: " , desafio.charAt([15]));

// 14    ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
const letra = "J";
const indice = desafio.indexOf(letra);
if ( indice != -1 ){
    const valorUnicode = desafio.charCodeAt(indice);
    console.log(valorUnicode)
}else{
    console.log("no se encuentra");
}

// 15    Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(`La primera aparicion de la letra 'a' 
es en el indice: ${desafio.indexOf("a")}`);

// 16    Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(`La ultima aparicion de la letra 'a' 
es en el indice: ${desafio.lastIndexOf("a")}`);

// 17   Usa indexOf para encontrar la posición de la primera aparición de la palabra 
//      porque en la siguiente oración:
//      'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(`LA primera aparicion de la palabra 
"porque" es en el indice: ${oracion.indexOf("porque")}`);

// 18   Usa lastIndexOf para encontrar la posición de la última aparición de la palabra 
//      porque en la siguiente oración:
//      'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(`LA primera aparicion de la palabra 
"porque" es en el indice: ${oracion.lastIndexOf("porque")}`);

// 19    Usa search para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:
//      'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(`La primera aparicion de la palabra 
"porque" es en el indice: ${oracion.search("porque")}"`);

// 20   Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. 
//      Por ejemplo, '        30 días de JavaScript                '.
let espacios = '        30 días de JavaScript                ';
console.log(`La cadena sin espacios al final y al princicio 
${espacios}`);
console.log(`La cadena sin espacios al final y al princicio 
${espacios.trim()}`);

// 21    Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio)
console.log(desafio.startsWith("30 días de JavaScript"));

// 22    Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
// 23    Usa el método match() para encontrar todos los a en 30 días de JavaScript
// 24    Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
// 25    Use el método repeat() para imprimir 30 días de JavaScript 2 veces

// Ejercicio: Nivel 2

// 1    Usando console.log() imprima la siguiente declaración:
//      The quote 'There is no exercise better for the heart than reaching down and lifting people up.' 
//      by John Holmes teaches us to help one another.
// 2    Usando console.log() imprima la siguiente cita de la Madre Teresa:
//      "Love is not patronizing and charity isn't about pity, it is about love. 
//      Charity and love are the same -- with charity you give love, 
//      so don't just give money but reach out your hand instead."
// 3    Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
// 4    Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
// 5    Verifique si 'on' se encuentra tanto en Python como en la jerga
// 6    Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
// 7    Genere un número aleatorio entre 0 y 100 inclusive.
// 8    Genere un número aleatorio entre 50 y 100 inclusive.
// 9    Genere un número aleatorio entre 0 y 255 inclusive.
// 10   Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
// 11   Use console.log() y caracteres de escape para imprimir el siguiente patrón.


//   Divide la cadena en un array usando el método split()
//   Divida la cadena 30 días de JavaScript en el espacio usando el método split()
//   'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
//   Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
//   ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
//   ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
//   Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
//   Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
//   Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
//   Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
//   Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
//   Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
//   Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
//   Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
//   Usa el método match() para encontrar todos los a en 30 días de JavaScript
//   Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
//   Use el método repeat() para imprimir 30 días de JavaScript 2 veces

// Ejercicio: Nivel 2

// 1  Usando console.log() imprima la siguiente declaración:
//   The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

//  Usando console.log() imprima la siguiente cita de la Madre Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

// Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.

// Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.

// Verifique si 'on' se encuentra tanto en Python como en la jerga

// Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.

// Genere un número aleatorio entre 0 y 100 inclusive.

// Genere un número aleatorio entre 50 y 100 inclusive.

// Genere un número aleatorio entre 0 y 255 inclusive.

// Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.

// Use console.log() y caracteres de escape para imprimir el siguiente patrón.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// 12    Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

// Ejercicios: Nivel 3

// 1    'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.

// 2   Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

// 3    Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).

// 4    const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. 
//      The@re $is no@th@ing; &as& mo@re rewarding a educa@ting &and& @emp%o@weri@ng peo@ple. ;
//      I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. 
//      %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so 
//      $the $resu@lt of &love& of tea&ching";

// 5    Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 
//      'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, 
//      cursos en línea de 15000 euros por mes.'

// 🎉 ¡FELICITACIONES! 🎉