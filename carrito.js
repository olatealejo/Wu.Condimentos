
document.addEventListener("DOMContentLoaded", () => {
});

let carritoContador = parseInt(localStorage.getItem("carritoContador")) || 0;

const contadorElemento = document.querySelector(".carrito-conteo");
if (contadorElemento) {
    contadorElemento.textContent = carritoContador;
}

const botonesCarrito = document.querySelectorAll('input[type="submit"][value="Añadir al carrito"]');

botonesCarrito.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
    });
});