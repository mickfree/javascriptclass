//Argumentos y parametros

let sumar = function(a, b) { return a + b };
// parametros a, b son conocidos como parametros ya que no poseen aun valores en dicha funcion.
resultado = sumar(2, 4);

// Y argumentos se les conoce como los valores que se le da a los parametros para resolver la funcion.


let resta = function(c, d) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return c - d
};

respuesta = resta(8, 2);

console.log(respuesta);

//Podemos añadir a los parametros valores por default
let indefinido = function(a = 8, b = 3) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

rpta = indefinido();
console.log(rpta);

// Podemos usar un argumento en la funcion.
let cualquier = function(a, b) {
    arguments[0];
    arguments[1];
    arguments[2];
    return a * b + arguments[2]
};

treasure = cualquier(2, 3, 6)

console.log(treasure);