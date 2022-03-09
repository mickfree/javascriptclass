//Agregar objetos

let persona = {
    nombre: "Michael",
    apellidos: "Luna",
    nombreCompleto: function() {
        return this.nombre + " " + this.apellidos;
    }
};

persona.tel = "93723131";

console.log(persona);

persona.tel = "97732132";

console.log(persona);