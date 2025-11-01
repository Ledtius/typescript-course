var username;
var age;
var isDev;
var skills;
function greet(name) {
    return "Hello ".concat(name.toUpperCase);
}
var name = greet("Calet");
console.log(name);
function printId(id) {
    console.log("Your ID is : ".concat(id));
}
printId(101);
printId("abc");
var user = {
    name: "Calet",
    age: 23,
    isOnline: true,
};
// user.name = "3ss♦";
console.log(user.name);
function getTotal(numbers) {
    return numbers.reduce(function (acc, n) { return acc + n; }, 0);
}
console.log(getTotal([1, 23, 4, 50]));
function welcome(name, age) {
    if (name === void 0) { name = "Guest"; }
    if (age) {
        return "Welcome ".concat(name, ", age ").concat(age);
    }
    return "Welcome ".concat(name);
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
            console.log("Welcome ".concat(role, " - Max level"));
            break;
        case "editor":
            console.log("Welcome ".concat(role, " - Medium level"));
            break;
        case "viewer":
            console.log("Welcome ".concat(role, " - Min level"));
            break;
        default:
            console.log("User no valid");
            break;
    }
}
checkPermission(UserRole.VIEWER);
