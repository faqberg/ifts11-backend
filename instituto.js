const colors = require("colors");

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

function ejecutarInstituto(alumno, materia) {
    validarCorrelativa(alumno)
        .then((mensaje) => {
            console.log(mensaje.green);
            return inscribirMateria(alumno, materia);
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
}

module.exports = {
    ejecutarInstituto
};