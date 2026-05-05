const colors = require("colors");

function validarStock(nombreProducto, productos, cantidadVendida) {
    return new Promise((resolve, reject) => {
        console.log("Validando stock del producto...".yellow);

        setTimeout(() => {
            const productoEncontrado = productos.find(
                producto => producto.nombreProducto === nombreProducto
            );

            if (!productoEncontrado) {
                reject("El producto no existe");
            } else if (productoEncontrado.stock >= cantidadVendida) {
                resolve(productoEncontrado);
            } else {
                reject("No hay stock suficiente para realizar la venta");
            }
        }, 2000);
    });
}

function realizarVenta(producto, cantidadVendida) {
    return new Promise((resolve, reject) => {
        console.log("Realizando venta...".yellow);

        setTimeout(() => {
            if (producto.stock >= cantidadVendida) {
                producto.stock -= cantidadVendida;
                resolve(producto);
            } else {
                reject("No se pudo realizar la venta");
            }
        }, 1000);
    });
}

function imprimirEtiqueta(nombreProducto) {
    return new Promise((resolve) => {
        console.log("Generando etiqueta de envío...".yellow);

        setTimeout(() => {
            resolve(`Etiqueta generada para el producto: ${nombreProducto}`);
        }, 4000);
    });
}

function ejecutarMercadoRestringido(nombreProducto, productos, cantidadVendida) {
    validarStock(nombreProducto, productos, cantidadVendida)
        .then((producto) => {
            console.log("Stock disponible. Se puede realizar la venta.".green);
            return realizarVenta(producto, cantidadVendida);
        })
        .then((producto) => {
            console.log(`Venta realizada correctamente. Stock restante: ${producto.stock}`.green);
            return imprimirEtiqueta(producto.nombreProducto);
        })
        .then((mensaje) => {
            console.log(mensaje.green);
        })
        .catch((error) => {
            console.log(error.red);
        })
        .finally(() => {
            console.log("Finalizó la operación del mercado restringido".yellow);
        });
}

module.exports = {
    ejecutarMercadoRestringido
};