const colors = require("colors");

const { ejecutarCuentaBancaria } = require("./cuentaBancaria");
const { ejecutarInstituto } = require("./instituto");
const { ejecutarMercadoRestringido } = require("./mercadoRestringido");

console.log("Ejercicio 4".rainbow);

// cuenta bancaria

console.log("\n--- Cuenta bancaria ---".yellow);

ejecutarCuentaBancaria(3000);

// instituto

const alumno = {
    nombre: "Facundo",
    edad: 24,
    inscriptoAMaterias: ["Programación I", "Base de Datos"],
    debeCorrelativa: false
};

setTimeout(() => {
    console.log("\n--- Instituto ---".yellow);
    ejecutarInstituto(alumno, "Programación II");
}, 17000);

// mercado restringido

const producto1 = {
    id: 1,
    nombreProducto: "Notebook",
    precio: 800000,
    stock: 5
};

const producto2 = {
    id: 2,
    nombreProducto: "Mouse",
    precio: 15000,
    stock: 10
};

const producto3 = {
    id: 3,
    nombreProducto: "Teclado",
    precio: 30000,
    stock: 7
};

const producto4 = {
    id: 4,
    nombreProducto: "Monitor",
    precio: 250000,
    stock: 3
};

const producto5 = {
    id: 5,
    nombreProducto: "Auriculares",
    precio: 50000,
    stock: 0
};

const productos = [producto1, producto2, producto3, producto4, producto5];

setTimeout(() => {
    console.log("\n--- Mercado restringido ---".yellow);
    ejecutarMercadoRestringido("Notebook", productos, 2);
}, 26000);