// Funciones como objetos
function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b;

}

let suma = miFuncion(2, 5);

console.log(suma);



var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);