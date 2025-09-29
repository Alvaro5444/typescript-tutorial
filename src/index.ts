/**
 * Variables
 * 
 * var = global
 * 
 * let = bloques
 * 
 * const = constante
 */

//variable var te deja visualizarlo desde cualquier bloque

if (true){
    var x;
    x="Alvaro";
}
x = "Morilla";
console.log(x);

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

console.log(nombre);
console.log(edad);
console.log(mayorEdad);

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
console.log(cualquierCosa.toLowerCase());

// unknown

let tipoDatoDesconocido:unknown;

tipoDatoDesconocido = "Nombre";


if (typeof(tipoDatoDesconocido) === "string"){
console.log(tipoDatoDesconocido.toUpperCase());
}

tipoDatoDesconocido = 18;
console.log(tipoDatoDesconocido);

/**
 * Cadenas
 * */
let apellido = "Antonio";

console.log(nombre +" "+ apellido);
console.log("Tu nombre es "+nombre);
console.log(`Tus nombre es ${nombre}`);

//if else
let nota: number = 7;

if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 7) {
  console.log("Notable");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}


//If else ternario
    let edad1: number = 10;
let tipo = edad1 >= 18 ? "Adulto" : "Menor";
console.log(tipo); // "Adulto"
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
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}

//for
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//for..of
let frutas: string[] = ["Manzana", "Banana", "Naranja", "Pera"];

for (let fruta of frutas) {
  console.log(fruta);
}

//while
let contador = 0;

while (contador < 10) {
  console.log(contador);
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
  console.log(contador1);
  contador1++;
} while (contador1 < 20);
