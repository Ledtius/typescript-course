function identity<T>(value: T): T {
  return value;
}

const text = identity("hola");
const num = identity(10);

text.toUpperCase();
num.toFixed();
