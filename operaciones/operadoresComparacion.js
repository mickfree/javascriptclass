let a = 3,
    b = 2,
    c = "3";

let z = a == b;

console.log(z);

z = a == c; // lo evalua sin importar el tipo
console.log(z);

console.log(typeof c);

z = a === c; //lo evalua estrictamente con tipos

console.log(z);

// Utilizando si son diferentes
z = a != c;
console.log(z);

z = a !== c;
console.log(z);