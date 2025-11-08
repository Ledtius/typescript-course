System.register("app", [], function (exports_1, context_1) {
    "use strict";
    var username, age, isDev, skills, name, user, UserRole;
    var __moduleName = context_1 && context_1.id;
    function greet(name) {
        return `Hello ${name.toUpperCase}`;
    }
    function printId(id) {
        console.log(`Your ID is : ${id}`);
    }
    function getTotal(numbers) {
        return numbers.reduce((acc, n) => acc + n, 0);
    }
    function welcome(name = "Guest", age) {
        if (age) {
            return `Welcome ${name}, age ${age}`;
        }
        return `Welcome ${name}`;
    }
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
    return {
        setters: [],
        execute: function () {
            name = greet("Calet");
            console.log(name);
            printId(101);
            printId("abc");
            user = {
                name: "Calet",
                age: 23,
                isOnline: true,
            };
            console.log(user.name);
            console.log(getTotal([1, 23, 4, 50]));
            console.log(welcome("Goku", 18));
            (function (UserRole) {
                UserRole["ADMIN"] = "admin";
                UserRole["EDITOR"] = "editor";
                UserRole["VIEWER"] = "viewer";
            })(UserRole || (UserRole = {}));
            checkPermission(UserRole.VIEWER);
        }
    };
});
//# sourceMappingURL=main.js.map