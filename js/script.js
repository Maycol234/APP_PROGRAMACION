const conceptos = [
  "Algoritmo: conjunto de pasos para resolver un problema.",
  "Variable: espacio en memoria para guardar datos.",
  "Función: bloque de código que realiza una tarea.",
  "Bucles: estructuras para repetir acciones.",
  "Objeto: entidad que agrupa propiedades y métodos.",
  "Compilador: traduce código a lenguaje máquina.",
  "Framework: conjunto de herramientas para facilitar el desarrollo.",
  "API: interfaz que conecta aplicaciones entre sí."
];

document.getElementById("btnConcepto").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * conceptos.length);
  document.getElementById("concepto").textContent = conceptos[randomIndex];
});
