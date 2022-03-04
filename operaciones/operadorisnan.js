let miNumero = "16x";
let edad = Number(miNumero);

/*console.log(miNumero);
console.log(typeof miNumero);


//Number--- para convertir de un string a un int o number.


console.log(edad);
console.log(typeof edad);

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("No es mayor de edad");

}

let resultado = (edad >= 18) ? "puede votar" : "No puede votar";

console.log(resultado);*/


if (isNaN(edad)) {
    console.log("no es un numero");
} else {
    if (edad >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("no es mayor de edad");
    }
}

if (isNaN(edad)) {
    console.log("No es un numero");
} else {
    let resultado = (edad >= 18) ? "Puede votar" : "No puede votar";
    console.log(resultado);
}