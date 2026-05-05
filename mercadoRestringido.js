const colors = require("colors");

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

const cantidadVendida = 2;

function validarStock(nombreProducto, productos) {
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

function realizarVenta(producto) {
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

validarStock("Notebook", productos)
    .then((producto) => {
        console.log("Stock disponible. Se puede realizar la venta.".green);
        return realizarVenta(producto);
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