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