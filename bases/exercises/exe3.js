/* Echo function
Crea una función genérica echo que reciba un valor de cualquier tipo y lo devuelva sin modificarlo.
Debe mantener el tipo del valor que se pasa como argumento. */
var _a;
var echo = function (value) {
    return value;
};
console.log(echo("Hello world"));
console.log(echo(12));
console.log(echo(true));
console.log(echo({ value: true, greet: "Hi" }));
/* Array to first element
Crea una función genérica getFirstElement que reciba un array de tipo genérico T y devuelva el primer elemento.
Si el array está vacío, debe devolver undefined. */
var getFirstElement = function (arr) {
    return arr[0];
    // return arr;
};
console.log(getFirstElement([1, 2, 3, 4, 4]));
console.log(getFirstElement(["a", "b"]));
var table = {
    first: "Moloc",
    second: false,
};
/* Wrap in array
Crea una función wrapInArray que reciba un valor de tipo genérico y devuelva ese valor dentro de un array. */
var wrapInArray = function (value) {
    return [value];
};
console.log(wrapInArray("Hallow"));
console.log(wrapInArray(1));
// console.log([2]);
var flash = {
    name: "Barry",
    age: 24,
    powers: ["Run", "Travel in the time"],
    getName: function () {
        return this.name;
    },
};
console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        // El metodo disparar es opcional
        console.log("Disparando");
    },
};
var villanos = [
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
var charles = {
    poder: "psiquico",
    estatura: 1.78,
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique;
mystique = charles;
mystique = apocalipsis;
