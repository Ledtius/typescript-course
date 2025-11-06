/* Echo function
Crea una función genérica echo que reciba un valor de cualquier tipo y lo devuelva sin modificarlo.
Debe mantener el tipo del valor que se pasa como argumento. */
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
};
console.log(getFirstElement([1, 2, 3, 4, 4]));
console.log(getFirstElement(["a", "b"]));
var table = {
    first: "Moloc",
    second: false,
};
