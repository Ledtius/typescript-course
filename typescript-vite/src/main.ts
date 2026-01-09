// Level 1

function identity(value: any) {
  return value;
}
//Lv1. exe1
const result = identity("hola");
console.log(result.toUpperCase());
// console.log(result.toFixed()); // Marca error en la ejecucion, pero no me avisa

// El compilador no me ayuda con indicarme que metodo o funcion puedo usar en el result si es un valor any

//TS no garantiza que el result sea string

// Level 2

function identity2<T>(value: T): T {
  return value;
}

const text = identity2("hola");
const num = identity2(10);

text.toUpperCase();
num.toFixed(2);
//La ventaja que tiene el generico frente al any es que me permite tener la asistencia de ts, que esto a su vez permite que no se ejecuten errores.

//Level 3 y 4
function print(value: string | number) {
  return value;
}

const r = print("hola");

r.toUpperCase(); //No permite utilizar el metodo toUpperCase, por lo que tengo entendido es que el generico es como una variable que guarda el tipo correspondiente a cambio la union de tipo no, pero igualmente sigo sin entender por que no funciona

//Level 5

function first(arr: any[]) {
  return arr[0];
}
console.log(first([1, 2, 3]));
console.log(first(["a", "b", "c"]));

function first2<T>(arr: T[]): T {
  return arr[0];
}
console.log(first2([1, 2, 3]));
console.log(first2(["a", "b", "c"]));

/* Personalmente no veo ninguna diferencia, solo se que el generico es el mas adecuado*/

/* Level 6 */

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { id: 1, name: "Ana", active: true };

getProperty(user, "name");
getProperty(user, "email");

/* Personalmente esto no lo entiendo, ¿me podrias explicar? */


//Level 7
//1. No,2. Si?, 3. No
