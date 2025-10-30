/*script para cambiar de tema (color a la página)*/ 
document.addEventListener("DOMContentLoaded", () => {
    const botonTema = document.getElementById("boton-tema");
    const body = document.body;
    if (!botonTema) return;
/*Verificar si ya se guardo un tema*/ 
    if (localStorage.getItem("tema") === "claro") {
    body.classList.add("modo-claro");
    botonTema.textContent = "🌙 Modo oscuro";
}
botonTema.addEventListener("click", () => {
    body.classList.toggle("modo-claro");

    if (body.classList.contains("modo-claro")) {
  botonTema.textContent = "🌙 Modo oscuro";
  localStorage.setItem("tema", "claro");
} else {
  botonTema.textContent = "☀ Modo claro";
  localStorage.setItem("tema", "oscuro");
}

});
});
document.addEventListener("DOMContentLoaded", () => {
  // agarro el form, la contraseña y el modal para mostrar errores
  const form = document.querySelector("form");
  const passwordInput = document.getElementById("cont");
  const modal = document.getElementById("modal-error");
  const modalMensaje = document.getElementById("modal-mensaje");
  const modalCerrar = document.getElementById("modal-cerrar");

  // si falta algo del HTML, directamente no hacemos nada
  if (!form || !passwordInput || !modal || !modalMensaje || !modalCerrar) return;

  // cuando quiera enviar el form
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // frenamos el envío para chequear primero la contraseña

    const password = passwordInput.value;

    // requisitos de la contraseña
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneSimbolos = /[^a-zA-Z0-9]/.test(password);

    // si no cumple, mostramos el modal
    if (!tieneMayuscula || !tieneNumero || tieneSimbolos) {
      modalMensaje.textContent = "La contraseña debe contener al menos una letra mayúscula, un número y no debe contener símbolos.";
      modal.classList.remove("oculto");
      passwordInput.focus();
    } 
    else {
      // si está todo bien → lo mandamos a la página de inicio
      window.location.href = "index.html";
    }
  });

  // cerrar modal tocando la X
  modalCerrar.addEventListener("click", () => {
    modal.classList.add("oculto");
  });

  // cerrar clickeando afuera del modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("oculto");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  // Todos los inputs que no sean botones de submit/reset
  const inputs = Array.from(form.querySelectorAll("input:not([type=submit]):not([type=reset]), select, textarea"));

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // evita enviar el form directamente

        const nextInput = inputs[index + 1];

        if (nextInput) {
          // pasa al siguiente input si hay
          nextInput.focus();
        } else {
          // si es el último input, solo quitamos foco
          input.blur();
          // dejamos que el usuario haga click en el botón submit
        }
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {

let carritoContador = parseInt(localStorage.getItem("carritoContador")) || 0;

function formatearContador(cantidad) {
    return cantidad > 9 ? "9+" : cantidad.toString();
}

const contadorElemento = document.querySelector(".carrito-conteo");
if (contadorElemento) {
    contadorElemento.textContent = formatearContador(carritoContador);
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
        contadorElemento.textContent = formatearContador(carritoContador);
        
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

js
document.addEventListener("DOMContentLoaded", () => {
  js
  let carritoContador = parseInt(localStorage.getItem("carritoContador")) || 0;
  js
  function formatearContador(cantidad) {
      return cantidad > 9 ? "9+" : cantidad.toString();
  }
  js
  const contadorElemento = document.querySelector(".carrito-conteo");
  if (contadorElemento) {
      contadorElemento.textContent = formatearContador(carritoContador);
  }
  js
  botonesCarrito.forEach(boton => {
      boton.addEventListener("click", (e) => {
          e.preventDefault();
          js
  const formulario = boton.closest("form");
  const inputCantidad = formulario.querySelector('input[type="number"]');
  const cantidad = parseInt(inputCantidad.value) || 0;
  js
  if (cantidad > 0) {
      carritoContador += cantidad;
      localStorage.setItem("carritoContador", carritoContador);
      js
       if (contadorElemento) {
          contadorElemento.textContent = formatearContador(carritoContador);
          



