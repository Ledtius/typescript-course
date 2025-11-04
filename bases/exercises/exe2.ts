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
