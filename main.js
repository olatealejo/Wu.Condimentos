/*script para cambiar de tema (color a la página)*/ 
document.addEventListener("DOMContentLoaded", () => {
    const botonTema = document.getElementById("boton-tema");
    const body = document.body;
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
  const form = document.querySelector("form");
  const passwordInput = document.getElementById("cont");
  const modal = document.getElementById("modal-error");
  const modalMensaje = document.getElementById("modal-mensaje");
  const modalCerrar = document.getElementById("modal-cerrar");
  form.addEventListener("submit", (e) => {
    const password = passwordInput.value;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneSimbolos = /[^a-zA-Z0-9]/.test(password);
    if (!tieneMayuscula || !tieneNumero || tieneSimbolos) {
      e.preventDefault();
      modalMensaje.textContent = "La contraseña debe contener al menos una letra mayúscula, un número y no debe contener símbolos.";
      modal.classList.remove("oculto");
      passwordInput.focus();
    }
  });

/*script para ocultar aparecer la sección de */

const botonContactos = document.getElementById("boton-contactos");
const seccionContactos = document.getElementById("contactos");

// Ocultamos los contactos al inicio
seccionContactos.classList.add("oculto");

botonContactos.addEventListener("click", () => {
  seccionContactos.classList.toggle("oculto");

  if (seccionContactos.classList.contains("oculto")) {
    botonContactos.textContent = "Mostrar contactos";
  } else {
    botonContactos.textContent = "Ocultar contactos";
  }

});
