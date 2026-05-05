const colors = require("colors");

let saldoDisponible = 1000;

function validarSaldo(montoTransferencia) {
    return new Promise((resolve, reject) => {
        console.log("Validando saldo disponible...".yellow);

        setTimeout(() => {
            if (saldoDisponible >= montoTransferencia) {
                resolve("Saldo suficiente para realizar la transferencia");
            } else {
                reject("Saldo insuficiente para realizar la transferencia");
            }
        }, 5000);
    });
}

function realizarTransferencia(montoTransferencia) {
    return new Promise((resolve, reject) => {
        console.log("Realizando transferencia...".yellow);

        setTimeout(() => {
            if (montoTransferencia > 0) {
                saldoDisponible -= montoTransferencia;
                resolve(`Transferencia realizada correctamente. Saldo restante: $${saldoDisponible}`);
            } else {
                reject("El monto de la transferencia debe ser mayor a 0");
            }
        }, 10000);
    });
}

function ejecutarCuentaBancaria(montoTransferencia) {
    validarSaldo(montoTransferencia)
        .then((mensaje) => {
            console.log(mensaje.green);
            return realizarTransferencia(montoTransferencia);
        })
        .then((mensaje) => {
            console.log(mensaje.green);
        })
        .catch((error) => {
            console.log(error.red);
        })
        .finally(() => {
            console.log("Finalizó la operación bancaria".yellow);
        });
}

module.exports = {
    ejecutarCuentaBancaria
};