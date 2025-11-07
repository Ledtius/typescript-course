let framework = "React";
const version = 18;
const isFrontend = true;
framework = "Angular";
console.log(framework);
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));
const introduce = (name, age) => {
    return `Hi, I'm ${name} ${age ? `,I'm ${age}` : ""}`;
};
console.log(introduce("Calet", 24));
const book = {
    title: "El viejo y el mar",
    author: "None",
    published: 1234,
    available: true,
};
const printSkills = (arr) => {
    //   arr.forEach((name) => {});
    for (const name of arr) {
        console.log(name);
    }
};
printSkills(["Sam", "Niel", "Ahitofel", "Zelofeat"]);
const formatId = (id) => {
    return id;
};
console.log(formatId(132));
console.log(formatId("132"));
const logMessage = (message) => {
    console.log(message);
};
logMessage("lorem");
const greetUser = (user) => {
    console.log(user.isAdmin ? `Welcome admin ${user.name}!` : `Welcome ${user.name}!`);
};
greetUser({ name: "Calet", email: "calebtius@gmail.com", isAdmin: true });
const product1 = {
    id: "222",
    name: "Carrot",
    price: 1.2,
};
// product1.id = 2343;
product1.name = "Pear";
console.log(product1);
let input = "TypeScript";
const length = input.length;
console.log(length);
let nickname;
nickname = "null";
const displayName = nickname ?? "Anonymous";
console.log(displayName);
const wrapValue = (value) => {
    return value;
};
console.log(wrapValue(2));
console.log(wrapValue("JS"));
const createUser = (user) => {
    user.id = crypto.randomUUID();
    return user;
};
const createUser2 = (user) => {
    user.id = crypto.randomUUID();
    return user;
};
console.log(createUser({ age: 24, name: "Carlos", skill: ["Frontend", "Etc"] }));
console.log(createUser2({ age: 31, name: "Osiris", skill: ["Backend", "Etc"] }));
/* Extra - Course */
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman(false);
// Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
export {};
//# sourceMappingURL=exe2.js.map