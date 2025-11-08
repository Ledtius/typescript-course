let username;
let age;
let isDev;
let skills;
function greet(name) {
    return `Hello ${name.toUpperCase}`;
}
const name = greet("Calet");
console.log(name);
function printId(id) {
    console.log(`Your ID is : ${id}`);
}
printId(101);
printId("abc");
const user = {
    name: "Calet",
    age: 23,
    isOnline: true,
};
console.log(user.name);
function getTotal(numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(getTotal([1, 23, 4, 50]));
function welcome(name = "Guest", age) {
    if (age) {
        return `Welcome ${name}, age ${age}`;
    }
    return `Welcome ${name}`;
}
console.log(welcome("Goku", 18));
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["EDITOR"] = "editor";
    UserRole["VIEWER"] = "viewer";
})(UserRole || (UserRole = {}));
function checkPermission(role) {
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
export {};
//# sourceMappingURL=app.js.map