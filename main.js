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

  // si no encuentra algo, salgo para no romper nada
  if (!form || !passwordInput || !modal || !modalMensaje || !modalCerrar) return;

  // cuando el usuario intente enviar el form
  form.addEventListener("submit", (e) => {
    const password = passwordInput.value;

    // chequeos de la contraseña
    const tieneMayuscula = /[A-Z]/.test(password); // al menos una mayúscula
    const tieneNumero = /[0-9]/.test(password); // al menos un número
    const tieneSimbolos = /[^a-zA-Z0-9]/.test(password); // si hay símbolos

    // si no cumple con lo que queremos, cancelamos el envío
    if (!tieneMayuscula || !tieneNumero || tieneSimbolos) {
      e.preventDefault(); // no se envía el form
      // muestro mensaje copado en el modal
      modalMensaje.textContent = "La contraseña debe contener al menos una letra mayúscula, un número y no debe contener símbolos.";
      modal.classList.remove("oculto"); // lo hago visible
      passwordInput.focus(); // pongo el cursor en la contraseña
    }
  });

  // cerrar modal con la "x"
  modalCerrar.addEventListener("click", () => {
    modal.classList.add("oculto");
  });

  // cerrar modal clickeando fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("oculto");
    }
  });
});


/*script para ocultar aparecer la sección de */

const botonContactos = document.getElementById("boton-contactos");
const seccionContactos = document.getElementById("contactos");
if (botonContactos && seccionContactos) {
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
};
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Evitar que Enter mande el formulario *mientras escribe en inputs*
  form.addEventListener("keydown", (e) => {
    // si la tecla no es Enter, no hacemos nada
    if (e.key !== "Enter") return;

    // si el usuario está escribiendo dentro de un input
    if (e.target.tagName === "INPUT" && e.target.type !== "submit") {
      e.preventDefault(); // evita el envío
      e.target.blur(); // solo sale del input
    }
    // si está en un botón (submit), ahí sí dejamos que lo mande
  });
});

