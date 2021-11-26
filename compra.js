class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }
    sumaIva() {
        this.precio = Math.trunc(this.precio * 1.21);
    }
}

const avena = new Producto("avena", 300, 25);
const harina = new Producto("harina", 150, 30);
const mascabo = new Producto("mascabo", 120, 10);
const coco = new Producto("coco", 160, 20);
const nueces = new Producto("nueces", 180, 50);
const almendras = new Producto("almendras", 200, 60);

avena.sumaIva();
harina.sumaIva();
mascabo.sumaIva();
coco.sumaIva();
nueces.sumaIva();
almendras.sumaIva();

const lista = [avena, harina, mascabo, coco, nueces, almendras];


alert("¿Que quieres comprar?")

const carrito = [];

for (let i = 0; i < lista.length; i++) {
    let compraUsuario = prompt("Ingresa los productos que desees").toLowerCase();
    if (compraUsuario === "") {

        break;

    } else if (compraUsuario != "") {

        carrito.push(compraUsuario)
        console.log(carrito)
        alert(`Has agregado ${carrito} al carrito`)
    } else {
        carrito = prompt("Ingresa los productos que desees").toLowerCase();
    }
}

alert("Has agregado " + carrito + "a tu carrito.")

