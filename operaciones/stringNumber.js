let miNumero = "23";

console.log(miNumero);
console.log(typeof miNumero);


//Number--- para convertir de un string a un int o number.
let edad = Number(miNumero);

console.log(edad);
console.log(typeof edad);

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("No es mayor de edad");

}

let resultado = (edad >= 18) ? "puede votar" : "No puede votar";

console.log(resultado);