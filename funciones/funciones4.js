// Funcion tipo sefl-invoking
(function() {
    console.log("Ejecutando la funcion: " + (a + b));
})();

(function(a, b) {
    console.log("Ejecutando la funcion: " + (a + b));
})(3, 5);