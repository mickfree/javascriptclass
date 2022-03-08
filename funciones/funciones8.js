let resultado = sumarTodo(1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 14);

function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; //suma = suma +arguments[i];

    }
    return suma;
}

console.log(resultado);


let rpta = restaTodo(10, 9, 8, 7, 6, 5, 4, 80)

function restaTodo() {
    let resta = 0;
    for (let i = 0; i < arguments.length; i++) {
        resta -= arguments[i];

    }
    return resta

}

console.log(rpta);