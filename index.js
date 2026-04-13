"use strict";

/*
========================================
Ejercicios Funciones, Callback y Arrays
========================================

A) Generar un repositorio público en Github donde se subirá el código de la práctica.
B) Ingresar como comentario en el código cada una de los enunciados de los ejercicios.
C) Inicializar un paquete con el comando npm init
*/

/* ========================================
   Ejercicio 01 – Funciones y Arrays
======================================== */

/*
1) Crear una función que reciba dos parámetros y retorne un valor.
*/
function sumarDosNumeros(a, b) {
    return a + b;
}

console.log("1) sumarDosNumeros(5, 3):", sumarDosNumeros(5, 3));

/*
2) Crear una función que se llame calcularAreaCuadrado que reciba un parámetro
que sea el lado del cuadrado, calcule el área y la retorne.
*/
function calcularAreaCuadrado(lado) {
    return lado * lado;
}

console.log("2) calcularAreaCuadrado(4):", calcularAreaCuadrado(4));

/*
3) Crear una función por declaración, puede hacer lo que quieras.
*/
function saludar(nombre) {
    return `Hola ${nombre}, bienvenido/a.`;
}

console.log("3) saludar('Juan'):", saludar("Juan"));

/*
4) Crear una función lambda por expresión que se llame autosuma, recibe un parámetro
que es un array de números y retorna la suma del total de los números
(utilizar foreach para recorrer el array)
*/
const autosuma = function (numeros) {
    let suma = 0;

    numeros.forEach(function (numero) {
        suma += numero;
    });

    return suma;
};

console.log("4) autosuma([1, 2, 3, 4, 5]):", autosuma([1, 2, 3, 4, 5]));

/*
5) Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento,
y retorne un string que diga:
“Hola -nombre- este año tenes o cumplis -numero- años”
*/
const calcularEdad = (nombre, anioNacimiento) => {
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;
    return `Hola ${nombre} este año tenes o cumplis ${edad} años`;
};

console.log("5) calcularEdad('Lucas', 2000):", calcularEdad("Lucas", 2000));

/*
6) Crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos
y un nombre, que agregue al alumno en la ultima posición del array.
*/
const inscribirAlumno = function (alumnos, nombre) {
    alumnos.push(nombre);
    return alumnos;
};

const listaAlumnos1 = ["Ana", "Pedro", "Sofía"];
console.log("6) inscribirAlumno:", inscribirAlumno(listaAlumnos1, "Martín"));

/*
7) Crear una función que se llame buscador, que reciba un array con nombres de alumnos
y un nombre a buscar, y diga si encuentra el nombre en la lista.
*/
function buscador(alumnos, nombreBuscado) {
    const encontrado = alumnos.includes(nombreBuscado);

    if (encontrado) {
        return `El alumno ${nombreBuscado} fue encontrado en la lista.`;
    }

    return `El alumno ${nombreBuscado} no fue encontrado en la lista.`;
}

console.log("7) buscador:", buscador(["Ana", "Pedro", "Sofía"], "Pedro"));
console.log("7) buscador:", buscador(["Ana", "Pedro", "Sofía"], "Carlos"));

/* ========================================
   Ejercicio 02 – Callbacks
======================================== */

/*
1) Definir una función que se llame Calculadora, que reciba un array de números, y una callback.

A) Pasarle por argumento una función arrow que realice la suma de los elementos del array.
B) Pasarle por argumento una función arrow que realice la resta de los elementos del array.
C) Pasarle por argumento una función arrow que realice la multiplicación de los elementos.
*/
function Calculadora(numeros, callback) {
    return callback(numeros);
}

const sumaArray = (numeros) => {
    let resultado = 0;

    numeros.forEach((numero) => {
        resultado += numero;
    });

    return resultado;
};

const restaArray = (numeros) => {
    if (numeros.length === 0) return 0;

    let resultado = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        resultado -= numeros[i];
    }

    return resultado;
};

const multiplicacionArray = (numeros) => {
    if (numeros.length === 0) return 0;

    let resultado = 1;

    numeros.forEach((numero) => {
        resultado *= numero;
    });

    return resultado;
};

const numerosCalculadora = [10, 2, 3];

console.log("1A) Calculadora suma:", Calculadora(numerosCalculadora, sumaArray));
console.log("1B) Calculadora resta:", Calculadora(numerosCalculadora, restaArray));
console.log("1C) Calculadora multiplicación:", Calculadora(numerosCalculadora, multiplicacionArray));

/*
2) Definir una función llamada agregarSiEstaEntreCeroYDiez, que reciba un número,
y un array, la función debe validar si el número es mayor o igual a cero y menor o
igual a 10, en caso favorable, debe agregarlo en la primera posición del array,
caso contrario debe arrojar un error informando que el número es mayor o menor
a lo establecido. Debe retornar el array con el resultado.
*/
function agregarSiEstaEntreCeroYDiez(numero, array) {
    if (numero >= 0 && numero <= 10) {
        array.unshift(numero);
        return array;
    }

    throw new Error("El número ingresado es menor que 0 o mayor que 10.");
}

try {
    const arrayNumeros1 = [20, 30, 40];
    console.log("2) agregarSiEstaEntreCeroYDiez:", agregarSiEstaEntreCeroYDiez(7, arrayNumeros1));
} catch (error) {
    console.error("2) Error:", error.message);
}

try {
    const arrayNumeros2 = [20, 30, 40];
    console.log("2) agregarSiEstaEntreCeroYDiez:", agregarSiEstaEntreCeroYDiez(15, arrayNumeros2));
} catch (error) {
    console.error("2) Error:", error.message);
}

/*
3) Definir una función similar a la del punto 2, pero que en vez de un número reciba
un array con números y valide si cada uno de los elementos cumple con la condición
de estar entre cero y diez, debe retornar un array con los números que cumplan la función.
*/
function filtrarEntreCeroYDiez(numeros) {
    return numeros.filter((numero) => numero >= 0 && numero <= 10);
}

console.log("3) filtrarEntreCeroYDiez([3, 12, -1, 8, 0, 10, 15]):", filtrarEntreCeroYDiez([3, 12, -1, 8, 0, 10, 15]));

/*
4) Momento de creatividad! – Definir una función que reciba tres parámetros,
algo, y dos callbacks, que internamente las ejecute y realice algún procedimiento.
*/
function procesarTexto(texto, callback1, callback2) {
    const resultado1 = callback1(texto);
    const resultado2 = callback2(resultado1);
    return resultado2;
}

const convertirAMayusculas = (texto) => texto.toUpperCase();
const agregarExclamacion = (texto) => `${texto}!!!`;

console.log(
    "4) procesarTexto('hola mundo'):",
    procesarTexto("hola mundo", convertirAMayusculas, agregarExclamacion)
);

/*
5) Realizar una función que se llame validarIngreso, que reciba una edad, y una callback.
Esta función debe validar por medio de un operador ternario si puede ingresar o no
(la condición es que sea mayor a 18 años). El resultado del operador ternario se debe
pasar como argumento a la ejecución de la callback.
*/
function validarIngreso(edad, callback) {
    const resultado = edad > 18 ? "Puede ingresar" : "No puede ingresar";
    return callback(resultado);
}

const mostrarResultadoIngreso = (mensaje) => `Resultado de validación: ${mensaje}`;

console.log("5) validarIngreso(20):", validarIngreso(20, mostrarResultadoIngreso));
console.log("5) validarIngreso(16):", validarIngreso(16, mostrarResultadoIngreso));