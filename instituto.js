const colors = require("colors");

const alumno = {
    nombre: "Facundo Berguerand",
    edad: 24,
    inscriptoAMaterias: ["Programación", "Base de Datos"],
    debeCorrelativa: false
};

function validarCorrelativa(alumno) {
    return new Promise((resolve, reject) => {
        console.log("Validando correlativas...".yellow);

        setTimeout(() => {
            if (alumno.debeCorrelativa === false) {
                resolve("El alumno tiene las correlativas aprobadas");
            } else {
                reject("El alumno debe correlativas y no puede inscribirse");
            }
        }, 2000);
    });
}

function inscribirMateria(alumno, materia) {
    return new Promise((resolve, reject) => {
        console.log("Realizando inscripción a materia...".yellow);

        setTimeout(() => {
            if (alumno.debeCorrelativa === false) {
                alumno.inscriptoAMaterias.push(materia);
                resolve(`Inscripción realizada correctamente a la materia: ${materia}`);
            } else {
                reject("No se pudo realizar la inscripción porque debe correlativas");
            }
        }, 5000);
    });
}

validarCorrelativa(alumno)
    .then((mensaje) => {
        console.log(mensaje.green);
        return inscribirMateria(alumno, "Programación II");
    })
    .then((mensaje) => {
        console.log(mensaje.green);
        console.log("Materias inscriptas:".yellow);
        console.log(alumno.inscriptoAMaterias);
    })
    .catch((error) => {
        console.log(error.red);
    })
    .finally(() => {
        console.log("Finalizó la operación de inscripción".yellow);
    });