
document.addEventListener("DOMContentLoaded", () => {

let carritoContador = parseInt(localStorage.getItem("carritoContador")) || 0;

const contadorElemento = document.querySelector(".carrito-conteo");
if (contadorElemento) {
    contadorElemento.textContent = carritoContador;
}

const botonesCarrito = document.querySelectorAll('input[type="submit"][value="Añadir al carrito"]');

botonesCarrito.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
  
const formulario = boton.closest("form");
const inputCantidad = formulario.querySelector('input[type="number"]');
const cantidad = parseInt(inputCantidad.value) || 0;

if (cantidad > 0) {
    carritoContador += cantidad;
    localStorage.setItem("carritoContador", carritoContador);

     if (contadorElemento) {
        contadorElemento.textContent = carritoContador;
        
        // Animación simple
        contadorElemento.style.transform = "scale(1.3)";
        setTimeout(() => {
            contadorElemento.style.transform = "scale(1)";
        }, 200);
    }

    alert(`Se añadieron ${cantidad} producto(s) al carrito. Total: ${carritoContador}`);

     formulario.reset();
} else {
    alert("Por favor, selecciona una cantidad mayor a 0");
}
});
});
});
