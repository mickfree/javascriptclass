let persona = {
    nombre: "Michael",
    apellidos: "Luna",
    nombreCompleto: function() {
        return this.nombre + " " + this.apellidos;
    }
};

console.log(persona.nombreCompleto());

console.log(persona["nombre"]);

let direccionTel = {
    direccion: "Leoncion Prado ",
    tel: 9383123,
    telefonoDireccion: function() {
        return this.direccion + " y el telefono es: " + this.tel;

    }

}

console.log(direccionTel.telefonoDireccion());



let fechaNacimiento = {
    dia: 10,
    mes: 08,
    año: 1998,
    fechaCompleta: function() {
        return "La fecha de nacimiento es: " +
            this.dia + "/" + this.mes + "/" + this.año;

    }
}

console.log(fechaNacimiento.fechaCompleta());

console.log(fechaNacimiento["año"]);

console.log(fechaNacimiento["mes"]);

console.log(fechaNacimiento["dia"]);

//For 

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}