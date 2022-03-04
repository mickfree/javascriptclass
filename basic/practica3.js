// tipo de dato object

var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    ID: 41425125
}

console.log(objeto);

//Tipo de dato boolean true,false

var laverdad = true;

console.log(laverdad);

//Tipo de dato function

function mifuncion() {}

console.log(typeof mifuncion);


//Tipo de dato symbol

var simbolo = Symbol("mi simbolo");

console.log(typeof simbolo);

//tipo de clase es un function

class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof persona);


//Tipo de dato undefined

var x;
console.log(typeof x);


// tipo null = ausencia de valor

var y = null;

console.log(y);
console.log(typeof y);