let arrayNumeros = [10,25,34,9,2,7,56,15,40,4]
let [pos0,,pos2,,pos4] = arrayNumeros
let arraySin024 = []
for (nro of arrayNumeros) {
    if (!(nro == pos0 || nro == pos2 || nro == pos4)) {
        arraySin024.push(nro)
    };
};

console.log(arraySin024);

let mascota = {
    nombre: "Toby",
    tipo: "Perro",
    color: "marrón",
    raza: "cocker"
};

let {nombre, tipo, color, raza} = mascota;


console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);