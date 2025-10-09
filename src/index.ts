/**
 * Variables
 * 
 * var = global
 * 
 * let = bloques
 * 
 * const = constante
 */

import console = require("console");

//variable var te deja visualizarlo desde cualquier bloque

if (true){
    var x;
    x="Alvaro";
}
x = "Morilla";
//console.log(x);

// variable let


if (true){
    let y;
    y="Alvaro";
}
// no te deja cambiarlo fuera del bloque en la que se ha declarado
// console.log(y);

//variable const
const z = "Alvaro";

//z = "Juan"  no nos permite la constante cambiarla

/**
 * Tipos de Datos primitivos
 * 
 * string = cadena de texto
 * number = numeros
 * boolean = verdadero o falso
 * 
 */

let nombre:string = "Alvaro";
let edad:number = 23;
let mayorEdad:boolean = true;

//console.log(nombre);
//console.log(edad);
//console.log(mayorEdad);

/**
 * Tipos de datos especiales
 * 
 * any = se le puede poner cualquier tipo de dato
 * unknown = desconocido
 * void = no devuelve nada la funcion
 */

//Any provocaria un error por ejemplo si ponemos un tolowercase cuando tiene un true o false
let cualquierCosa:any = "Hola";
cualquierCosa = 2;
cualquierCosa = true;
cualquierCosa = "Hola";
//console.log(cualquierCosa.toLowerCase());

// unknown

let tipoDatoDesconocido:unknown;

tipoDatoDesconocido = "Nombre";


if (typeof(tipoDatoDesconocido) === "string"){
//console.log(tipoDatoDesconocido.toUpperCase());
}

tipoDatoDesconocido = 18;
//console.log(tipoDatoDesconocido);

/**
 * Cadenas
 * */
let apellido = "Antonio";

//console.log(nombre +" "+ apellido);
//console.log("Tu nombre es "+nombre);
//console.log(`Tus nombre es ${nombre}`);

//if else
let nota: number = 7;

if (nota >= 9) {
  //console.log("Sobresaliente");
} else if (nota >= 7) {
  //console.log("Notable");
} else if (nota >= 5) {
  //console.log("Aprobado");
} else {
  //console.log("Suspenso");
}


//If else ternario
    let edad1: number = 10;
let tipo = edad1 >= 18 ? "Adulto" : "Menor";
//console.log(tipo); // "Adulto"
/**
 * Bucles
 * 
 * switch
 * for
 * for..of
 * while
 * do while
 */

//switch
let dia: number = 1;

switch (dia) {
  case 1:
    //console.log("Lunes");
    break;
  case 2:
    //console.log("Martes");
    break;
  case 3:
    //console.log("Miércoles");
    break;
  default:
    //console.log("Otro día");
}

//for
for (let i = 0; i <= 5; i++) {
  //console.log(i);
}

//for..of
let frutas: string[] = ["Manzana", "Banana", "Naranja", "Pera"];

for (let fruta of frutas) {
  //console.log(fruta);
}

//while
let contador = 0;

while (contador < 10) {
  //console.log(contador);
  contador++;
}

//do while
let contador1 = 0;

do {
    if (contador1 == 5 || contador1 == 14){
        contador1++;
        continue;
    }

    if(contador1 == 16){
        break;
    }
  //console.log(contador1);
  contador1++;
} while (contador1 < 20);

//Arrays

let numeros:number[] = [3,5,8,11];
let numeros2:number[] = [3,6,2,77];

let mixto:(number|string)[]=[5,7,"Hola","Pepe"];

let array2d:number[][]= [[2,4,6],[3,7,9],[1,9,4]]; 

//console.log(`La posicion 0 del array numeros es: ${numeros[0]}`);
//console.log(`La posicion 0 del array array2d es: ${array2d[0] != undefined ? array2d[0][0]:0}`)

let numeros3 = [...numeros,...numeros2];

console.log(numeros3);

numeros3[0] = 10;

console.log(numeros3);
console.log(numeros);

//Metodos para trabajar con arrays

let anumeros = [1,3,5,6,7]

//PUSH
anumeros.push(11); // [1,3,5,6,7,11]
console.log(anumeros)

anumeros.push(13,15,16);
console.log(anumeros)

//UNSHIFT - SHIFT
anumeros.unshift(0)
console.log(anumeros)

console.log(anumeros.shift());

//ACCESO , REMPLAZO

anumeros[0] = 1;
console.log(anumeros[0]);
console.log(anumeros[anumeros.length])

//BUSQUEDA DE ELEMENTOS 

let afrutas = ["manzana","pera","platano","mandarina","uva","kiwi"]

//INDEXOF
console.log(afrutas.indexOf("mandarina"))

//INCLUDES
console.log(afrutas.includes("pera"))

//FIND: busqueda primer elemento que cumple una determinada condicion

console.log(afrutas.find((value:string)=> { return value.length > 5;}))

//FINDINDEX: busca el indice del primer elemento que cumple una determinada condicion
console.log(afrutas.findIndex((value:string)=> { return value.length > 5;}))

//FOREACH
afrutas.forEach((value:string)=>{value.length > 5 ? console.log(value):null;});

//MAP -> TRANSFORMA LOS ELEMENTOS DE UN ARRAY SIN MODIFICAR EL ORIGINAL
let frutasUpper = afrutas.map((valor:string)=>{return valor.toUpperCase()})
console.log(frutasUpper)

//FILTER -> FILTRA LOS ELEMENTOS DE UN ARRAY QUE CUMPLEN UNA DETERMINADA CONDICION
let frutasFilter = afrutas.filter((valor:string)=>{return valor.length > 5})
console.log(frutasFilter)

//REDUCE -> ACUMULA EL VALOR DE LOS ELEMENTOS DE UN ARRAY
let numerosenteros = [1,3,5,7,9];

let number = numerosenteros.reduce((acumulador:number, elementoActual:number)=>{return acumulador + elementoActual})
console.log(number)

let minombre=["Alvaro","Villatoro","Morilla"]

let nombreconcatenado = minombre.reduce((elementoAnterior:string, elementoActual:string)=>{return elementoAnterior+=" "+elementoActual;},"")
console.log(nombreconcatenado)

//SORT -> ORDENA LOS ELEMENTOS DE UN ARRAY
let numeroordenado = [6,3,8,1,9,2,5,4,7]
console.log(numeroordenado.sort((a:number,b:number)=>{return a-b})) // ascendente

//SLICE -> EXTRAER UNA SECCION DE UN ARRAY
console.log(minombre.slice(0,2)) // desde la posicion 0 hasta la 2 sin incluirla;

//JOIN -> UNE TODOS LOS ELEMENTOS DE UN ARRAY Y LOS CONVIERTE EN UN STRING
console.log(minombre.join(" - "))

//TUPLAS

let nombreEdad: [string,number] 
nombreEdad = ["Alvaro",33];
console.log(`Mi nombre es ${nombreEdad[0]} y mi edad es ${nombreEdad[1]}`)

//Diccionarios

let diccionario = {1:"Jose",2:"Pepe",3:"Juanma"}
console.log(diccionario)

//FUNCIONES DECLARADAS

/**
 * Función para sumar dos elementos
 * @param a  primer parametro para sumar
 * @param b  segundo parametro para sumar
 * @returns  devolvemos el numero sumado
 */
function sumar(a:number, b:number):number{
  return a + b;
}
console.log("La suma es de "+sumar(43,5));

//Funciones anonimas = No tiene hoisting
const fSuma = function(a:number, b:number){return a+b}

//Si concatenamos con una , nos añade un salto y con + no
console.log("La suma anonima es de",fSuma(4,8)) //La suma anonima es de 12
//console.log("La suma anonima es de"+fSuma(4,8)) La suma anonima es de12

let arrayNombres = ["Jose","Alvaro","Juanma","Fernando"]

const printelementos = function(elemento:string){console.log(elemento)}
arrayNombres.forEach(printelementos);

//Funcion con elemento opcional
function saludar (nombre:string, apellido?:string){
  apellido != undefined ? console.log(`Hola ${nombre} ${apellido}`) : console.log(`Hola ${nombre} `)

  //console.log(`Hola ${nombre} ${apellido ?? ""}`)
}

saludar("Alvaro");
saludar("Alvaro","Villatoro")
