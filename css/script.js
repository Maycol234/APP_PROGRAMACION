const conceptos = [
  "Algoritmo: conjunto de pasos para resolver un problema.",
  "Variable: espacio en memoria para guardar datos.",
  "Función: bloque de código que realiza una tarea.",
  "Bucles: estructuras para repetir acciones.",
  "Objeto: entidad que agrupa propiedades y métodos."
];

function mostrarConcepto() {
  const randomIndex = Math.floor(Math.random() * conceptos.length);
  document.getElementById("concepto").textContent = conceptos[randomIndex];
}
