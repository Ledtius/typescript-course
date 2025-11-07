let framework: string = "React";
const version: number = 18;
const isFrontend: true = true;

framework = "Angular";

console.log(framework);

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(1, 2));

const introduce = (name: string, age?: number): string => {
  return `Hi, I'm ${name} ${age ? `,I'm ${age}` : ""}`;
};

console.log(introduce("Calet", 24));

const book: {
  title: string;
  author: string;
  published: number;
  available: boolean;
} = {
  title: "El viejo y el mar",
  author: "None",
  published: 1234,
  available: true,
};

const printSkills = (arr: string[]): void => {
  //   arr.forEach((name) => {});
  for (const name of arr) {
    console.log(name);
  }
};

printSkills(["Sam", "Niel", "Ahitofel", "Zelofeat"]);

const formatId = (id: string | number): string | number => {
  return id;
};

console.log(formatId(132));
console.log(formatId("132"));

const logMessage = (message: string): void => {
  console.log(message);
};

logMessage("lorem");

type User = {
  name: string;
  email?: string;
  isAdmin?: boolean;
};

const greetUser = (user: User): void => {
  console.log(
    user.isAdmin ? `Welcome admin ${user.name}!` : `Welcome ${user.name}!`
  );
};

greetUser({ name: "Calet", email: "calebtius@gmail.com", isAdmin: true });

type Product = {
  readonly id: string | number;
  name: string;
  price: number;
};

const product1: Product = {
  id: "222",
  name: "Carrot",
  price: 1.2,
};

// product1.id = 2343;
product1.name = "Pear";

console.log(product1);

let input: unknown = "TypeScript";

const length = (input as string).length;

console.log(length);

let nickname: string | null;

nickname = "null";

const displayName = nickname ?? "Anonymous";

console.log(displayName);

const wrapValue = <T>(value: T): T => {
  return value;
};

console.log(wrapValue(2));
console.log(wrapValue("JS"));

type UserType = {
  name: string;
  age: number;
  skill: string[];
};

interface UserInterface {
  name: string;
  age: number;
  skill: string[];
}

type UserId = {
  id?: string;
};

type UserFull = UserId & UserType;

interface ExtendUser extends UserInterface {
  id?: string;
}

const createUser = (user: UserFull): UserType => {
  user.id = crypto.randomUUID();
  return user;
};

const createUser2 = (user: ExtendUser): ExtendUser => {
  user.id = crypto.randomUUID();
  return user;
};

console.log(
  createUser({ age: 24, name: "Carlos", skill: ["Frontend", "Etc"] })
);

console.log(
  createUser2({ age: 31, name: "Osiris", skill: ["Backend", "Etc"] })
);

/* Extra - Course */

// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

const contar = (heroes: string[]): number => {
  return heroes.length;
};
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = (llamar: boolean = true) => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
};

llamarBatman(false);

// Rest?
const unirheroes = (...personas: string[]): string => {
  return personas.join(", ");
};

// Tipo funcion
const noHaceNada = (
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: string[]
): void => {};

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: Function;
noHaceNadaTampoco = noHaceNada;
