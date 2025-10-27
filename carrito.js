
document.addEventListener("DOMContentLoaded", () => {
});

let carritoContador = parseInt(localStorage.getItem("carritoContador")) || 0;

const contadorElemento = document.querySelector(".carrito-conteo");
if (contadorElemento) {
    contadorElemento.textContent = carritoContador;
}