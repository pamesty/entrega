/*
El cliente tiene una pastelería. Quiere ofrecer descuentos a las empresas
que compran sus productos (en este caso, tortas) en cantidad.  Estos
descuentos dependen de la cantidad de tortas compradas por cada empresa
precargada en el sistema.

*Si una empresa compra más de 100 tortas, tienen un 10% de descuento en 
sus próximas compras.

*Si una empresa compra más de 500 tortas, tienen un 15% de descuento.

*Independientemente de cuántas tortas compre, si compra 
más de 10 tortas, recibe 1 torta extra cada 15 tortas compradas.

Al cliente le gustaría saber en cada pedido de las empresas que tiene 
precargadas cuánto debería cobrarles, teniendo en cuenta si tienen 
descuentos o no y si debería darle tortas extras y cuántas.

Requerimientos

* Hacer un programa que modele los descuentos y tortas extras.

* Utilizar los descuentos y tortas extras a la hora de hacer un pedido y que en 
base a ellos indique cuánto cobrarle a la empresa y cuántas tortas enviarle.

*/

const $eventoBoton = document.getElementById("idBoton");

let cantidad = 0;
let descuento500 = 0.15;
let descuento100 = 0.1;
let precioTorta = 500;
let total = 0;
let precioUnitarioAPagar = 0;
let promocion = 15;
let tortaGratis = 0;

// Compra 100U = 100 * 0.1
// Compra 500U = 500 * 0.15
// Compra 15U = tortas +1

document.getElementById("precio").innerHTML = `El precio de la unidad es de $${precioTorta}`;

const calcularDescuento = (cantidad) => {
    // Cálculo de las tortas gratis
    if (cantidad >= 15) {
        tortaGratis = Math.floor(cantidad / promocion);
        document.getElementById("tortasGratis").innerHTML = `Ud recibe ${tortaGratis} tortas gratis, ¡Que la(s) disfrute!.`;
    } else {
        document.getElementById("tortasGratis").innerHTML = `Si desea aprovechar la promoción de las tortas gratis debe comprar un mínimo de ${promocion} tortas.`;
    }

    // Cálculo de los descuentos
    if (cantidad >= 500) {
        total = (precioTorta * cantidad) - ((precioTorta * cantidad) * descuento500);
        precioUnitarioAPagar = total / cantidad;

        document.getElementById("descuento").innerHTML = `El total a pagar por ${cantidad} tortas es de $${total}, quedándo la unidad a un valor de ${precioUnitarioAPagar}`;
    } else if (cantidad >= 100) {
        total = (precioTorta * cantidad) - ((precioTorta * cantidad) * descuento100);
        precioUnitarioAPagar = total / cantidad;
        document.getElementById("descuento").innerHTML = `El total a pagar por ${cantidad} tortas es de $${total}, quedándo la unidad a un valor de ${precioUnitarioAPagar}`;
    } else {
        total = precioTorta * cantidad
        document.getElementById("descuento").innerHTML = `El total a pagar por ${cantidad} tortas es de $${total}. Para recibir descuentos debe comprar 100 o más tortas.`;
    }

}

$eventoBoton.addEventListener("click", () => {
    cantidad = document.getElementById("cantidad").value;
    calcularDescuento(cantidad);
});