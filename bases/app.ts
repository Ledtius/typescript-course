let username: string;

let age: number;

let isDev: boolean;

let skills: [];

function greet(name: string) {
  return `Hello ${name.toUpperCase}`;
}

const name: string = greet("Calet");

console.log(name);

function printId(id: string | number) {
  console.log(`Your ID is : ${id}`);
}

printId(101);
printId("abc");

type User = {
  name: string;
  age: number;
  isOnline: boolean;
};

const user: User = {
  name: "Calet",
  age: 23,
  isOnline: true,
};

// user.name = "3ss♦";

console.log(user.name);

function getTotal(numbers: number[]) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(getTotal([1, 23, 4, 50]));

function welcome(name: string = "Guest", age?: number) {
  if (age) {
    return `Welcome ${name}, age ${age}`;
  }

  return `Welcome ${name}`;
}

console.log(welcome("Goku", 18));

enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  VIEWER = "viewer",
}

function checkPermission(role: UserRole) {
  switch (role) {
    case "admin":
      console.log(`Welcome ${role} - Max level`);
      break;
    case "editor":
      console.log(`Welcome ${role} - Medium level`);
      break;
    case "viewer":
      console.log(`Welcome ${role} - Min level`);
      break;

    default:
      console.log("User no valid");
      break;
  }
}

checkPermission(UserRole.VIEWER);
