/* Echo function
Crea una función genérica echo que reciba un valor de cualquier tipo y lo devuelva sin modificarlo.
Debe mantener el tipo del valor que se pasa como argumento. */

const echo = <T>(value: T): T => {
  return value;
};

console.log(echo("Hello world"));
console.log(echo(12));
console.log(echo(true));
console.log(echo({ value: true, greet: "Hi" }));

/* Array to first element
Crea una función genérica getFirstElement que reciba un array de tipo genérico T y devuelva el primer elemento.
Si el array está vacío, debe devolver undefined. */

const getFirstElement = <T>(arr: T[]): T | undefined => {
  return arr[0];
  // return arr;
};

console.log(getFirstElement([1, 2, 3, 4, 4]));
console.log(getFirstElement(["a", "b"]));

/* Pair type
Crea un type genérico Pair<T, U> que represente un par de valores (first y second) de tipos diferentes.
Ejemplo: { first: number, second: string }. */

type Pair<T, U> = {
  first: T;
  second: U;
};

const table: Pair<string, boolean> = {
  first: "Moloc",
  second: false,
};

/* Wrap in array
Crea una función wrapInArray que reciba un valor de tipo genérico y devuelva ese valor dentro de un array. */

const wrapInArray = <T>(value: T): T[] => {
  return [value];
};

console.log(wrapInArray("Hallow"));
console.log(wrapInArray(1));

// console.log([2]);

let flash: {
  name: string;
  age?: number;
  powers: string[];
  getName?: () => string;
} = {
  name: "Barry",
  age: 24,
  powers: ["Run", "Travel in the time"],
  getName() {
    return this.name;
  },
};

console.log(flash.getName?.());

/* Bonus */

// Objetos

type Vehiculos = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

const batimovil: Vehiculos = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

const bumblebee: Vehiculos = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    // El metodo disparar es opcional
    console.log("Disparando");
  },
};

// Villanos debe de ser un arreglo de objetos personalizados

type Villano = {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;
};

const villanos: Villano[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false,
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true,
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true,
  },
];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Charles = {
  poder: string;
  estatura: number;
};

type Apocalipsis = {
  lider: boolean;
  miembros: string[];
};

const charles: Charles = {
  poder: "psiquico",
  estatura: 1.78,
};

const apocalipsis: Apocalipsis = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;
mystique = charles;
mystique = apocalipsis;

