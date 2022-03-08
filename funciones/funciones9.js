// Paso por valor 
//Tipo primitivo
let x = 10;


function cambiarValor(a) {
    a = 20;
    return;
}

cambiarValor(x);

console.log(x);

//Paso por Referencia


const persona = {
    nombre: "Juan",
    Apellido: "Lopez",
    Dni: 4145124
}

function cambiarValorObjeto(p1) {
    p1.nombre = "MIGUEL";
    p1.Apellido = "Souza";
    p1.Dni = "51241242";
    return;
}

cambiarValorObjeto(persona);

console.log(persona);