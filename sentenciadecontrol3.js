let mes = 5;
let estacion;

if (mes == 1) {
    console.log("Invierno");

} else if (mes == 2) {
    console.log("Otoño");

} else if (mes == 3) {
    console.log("verano");

} else if (mes == 4) {
    console.log("Primavera");

} else {
    console.log("El mes solicitado no tiene estacion");
}



if (mes == 1 || mes == 2 || mes == 3) {
    console.log("Estacion de Invierno");

} else if (mes == 4 || mes == 5 || mes == 6) {
    console.log("Estacion de verano");
} else if (mes == 7 || mes == 8 || mes == 9) {
    console.log("Estacion de otoño");

} else if (mes == 10 || mes == 11 || mes == 12) {
    console.log("Estacion de primavera");
} else {
    console.log("El mes que solicito no existe");
}

if (mes == 1 || mes == 2 || mes == 3) {
    estacion = "Invierno";

} else if (mes == 4 || mes == 5 || mes == 6) {
    estacion = "verano";
} else if (mes == 7 || mes == 8 || mes == 9) {
    estacion = "otoño";

} else if (mes == 10 || mes == 11 || mes == 12) {
    estacion = "primavera";
} else {
    estacion = "el valor que solicito no exite";
}
console.log(estacion);