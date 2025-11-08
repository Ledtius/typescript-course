const echo = (value) => {
    return value;
};
console.log(echo("Hello world"));
console.log(echo(12));
console.log(echo(true));
console.log(echo({ value: true, greet: "Hi" }));
const getFirstElement = (arr) => {
    return arr[0];
};
console.log(getFirstElement([1, 2, 3, 4, 4]));
console.log(getFirstElement(["a", "b"]));
const table = {
    first: "Moloc",
    second: false,
};
const wrapInArray = (value) => {
    return [value];
};
console.log(wrapInArray("Hallow"));
console.log(wrapInArray(1));
let flash = {
    name: "Barry",
    age: 24,
    powers: ["Run", "Travel in the time"],
    getName() {
        return this.name;
    },
};
console.log(flash.getName?.());
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
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
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
let mystique;
mystique = charles;
mystique = apocalipsis;
export {};
//# sourceMappingURL=exe3.js.map