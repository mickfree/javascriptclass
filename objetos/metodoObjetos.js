let persona = {
    nombre: "Michael",
    apellidos: "Luna",
    nombreCompleto: function() {
        return this.nombre + " " + this.apellidos;
    }
};

console.log(persona.nombreCompleto());