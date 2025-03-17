class Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  comppletado: boolean;

  constructor(
    id: number,
    titulo: string,
    descripcion: string,
    completado: boolean
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.comppletado = completado;
  }
}

const tareas: Tarea[] = [
  new Tarea(
    1,
    "Comprar viveres",
    "Comprar pan, leche y huevos en el supermercado",
    false
  ),
  new Tarea(
    2,
    "Revisar correo",
    "Leer y responder correos electronicos mas importantes",
    true
  ),
  new Tarea(3, "Hacer ejercicio", "Correr durante 30 minutos en parque", false),
  new Tarea(
    4,
    "Estudita typescript",
    "Repasar conceptos de typescript y practicar",
    true
  ),
];

function renderizarTareas() {
  var listaTareas = document.getElementById("lista-tareas");
  if (!listaTareas) {
    console.error("No se puede encontrar la lista de tareas");
    return;
  }
  listaTareas.innerHTML = "";
  tareas.forEach(function (tarea) {
    var tareaElemento = document.createElement("div");
    tareaElemento.className = "tarea ".concat(
      tarea.comppletado ? "completada" : ""
    );

    tareaElemento.innerHTML = "\n <h3>"
      .concat(tarea.titulo, "</h3>\n <p>")
      .concat(tarea.descripcion, "</p>\n <p><strong>Estado:</strong> ")
      .concat(tarea.comppletado ? "completada" : "Pendiente", "</p>\n    ");
    listaTareas?.appendChild(tareaElemento);
  });
}

document.addEventListener("DOMContentLoaded", renderizarTareas);
