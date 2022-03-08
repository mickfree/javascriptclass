let horaDia = 5;
let mensaje;

if (horaDia >= 6 && horaDia <= 11) {
    mensaje = "buenos dias";
} else if (horaDia >= 12 && horaDia <= 18) {
    mensaje = "Buenas tardes";
} else if (horaDia >= 19 && horaDia <= 24) {
    mensaje = "Buenas noches";
} else if (horaDia >= 0 && horaDia < 6) {
    mensaje = "Hora de dormir";
}
console.log(mensaje);