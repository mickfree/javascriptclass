//let autos = new Array("BWM", "Mercedes benz", "Volvo");

const autos = ["BWM", "Mercedes benz", "Volvo"];

console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {
    console.log(i + " :" + autos[i]);
}

console.log(autos.length)

autos[1] = "MercedezBenz";

console.log(autos);

autos.push("Audi");

console.log(autos);


console.log(autos[3]);


console.log(autos.length);

autos[autos.length] = "Lamborgini";

console.log(autos.length);
console.log(autos);

autos[5] = "Porshe";

console.log(autos)
console.log(autos.length);

console.log(typeof autos);


//Preguntar si es un arreglo utilizando Array.isArray en consola 
console.log(Array.isArray(autos));


//Otra manera de averiguar si es un array utilizando Instanceof array en consola
console.log(autos instanceof Array);