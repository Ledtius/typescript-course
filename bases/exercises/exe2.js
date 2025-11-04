var framework = "React";
var version = 18;
var isFrontend = true;
framework = "Angular";
console.log(framework);
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));
var introduce = function (name, age) {
    return "Hi, I'm ".concat(name, " ").concat(age ? ",I'm ".concat(age) : "");
};
console.log(introduce("Calet", 24));
var book = {
    title: "El viejo y el mar",
    author: "None",
    published: 1234,
    available: true,
};
var printSkills = function (arr) {
    //   arr.forEach((name) => {});
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var name_1 = arr_1[_i];
        console.log(name_1);
    }
};
printSkills(["Sam", "Niel", "Ahitofel", "Zelofeat"]);
var formatId = function (id) {
    return id;
};
console.log(formatId(132));
console.log(formatId("132"));
var logMessage = function (message) {
    console.log(message);
};
logMessage("lorem");
var greetUser = function (user) {
    console.log(user.isAdmin ? "Welcome admin ".concat(user.name, "!") : "Welcome ".concat(user.name, "!"));
};
greetUser({ name: "Calet", email: "calebtius@gmail.com", isAdmin: true });
