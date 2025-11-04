document.addEventListener("DOMContentLoaded", () => {
  // --- Cambio de tema ---
  const botonTema = document.getElementById("boton-tema");
  const body = document.body;

  if (botonTema) {
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
  }

  // --- Mostrar/Ocultar contactos ---
  const botonContactos = document.getElementById("boton-contactos");
  const seccionContactos = document.getElementById("contactos");
  if (botonContactos && seccionContactos) {
    seccionContactos.classList.add("oculto");
    botonContactos.addEventListener("click", () => {
      seccionContactos.classList.toggle("oculto");
      botonContactos.textContent = seccionContactos.classList.contains("oculto")
        ? "Mostrar contactos"
        : "Ocultar contactos";
    });
  }

  // --- Verificación de contraseña ---
  const form = document.querySelector("form");
  const passwordInput = document.getElementById("cont");
  const modal = document.getElementById("modal-error");
  const modalMensaje = document.getElementById("modal-mensaje");
  const modalCerrar = document.getElementById("modal-cerrar");

  if (form && passwordInput && modal && modalMensaje && modalCerrar) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const password = passwordInput.value;
      const tieneMayuscula = /[A-Z]/.test(password);
      const tieneNumero = /[0-9]/.test(password);
      const tieneSimbolos = /[^a-zA-Z0-9]/.test(password);

      if (!tieneMayuscula || !tieneNumero || tieneSimbolos) {
        modalMensaje.textContent =
          "La contraseña debe contener al menos una letra mayúscula, un número y no debe contener símbolos.";
        modal.classList.remove("oculto");
        passwordInput.focus();
      } else {
        window.location.href = "index.html";
      }
    });

    modalCerrar.addEventListener("click", () => modal.classList.add("oculto"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("oculto");
    });
  }

  // --- Carrito ---
  let carritoContador = parseInt(localStorage.getItem("carritoContador")) || 0;
  const contadorElemento = document.querySelector(".carrito-conteo");
  const botonesCarrito = document.querySelectorAll(
    'input[type="submit"][value="Añadir al carrito"]'
  );

  function formatearContador(cantidad) {
    return cantidad > 9 ? "9+" : cantidad.toString();
  }

  if (contadorElemento)
    contadorElemento.textContent = formatearContador(carritoContador);

  botonesCarrito.forEach((boton) => {
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
          contadorElemento.style.transform = "scale(1.3)";
          setTimeout(() => (contadorElemento.style.transform = "scale(1)"), 200);
        }
        alert(`Se añadieron ${cantidad} producto(s) al carrito. Total: ${carritoContador}`);
        formulario.reset();
      } else {
        alert("Por favor, selecciona una cantidad mayor a 0");
      }
    });
  });
});
