// Manejo de menú: activar secciones
const botonesMenu = document.querySelectorAll(".menu button");
const secciones = document.querySelectorAll(".seccion");

botonesMenu.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Ocultar todas las secciones
    secciones.forEach(sec => sec.classList.remove("activa"));
    // Mostrar la sección correspondiente
    secciones[index].classList.add("activa");
  });
});

// Mostrar/ocultar información extra
document.getElementById("btnInfo").addEventListener("click", () => {
  const extraInfo = document.getElementById("extraInfo");
  extraInfo.classList.toggle("hidden");
});
