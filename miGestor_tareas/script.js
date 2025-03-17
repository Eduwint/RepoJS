var Tarea = /** @class */ (function () {
    function Tarea(id, titulo, descripcion, completado) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.comppletado = completado;
    }
    return Tarea;
}());
var tareas = [
    new Tarea(1, "Comprar viveres", "Comprar pan, leche y huevos en el supermercado", false),
    new Tarea(2, "Revisar correo", "Leer y responder correos electronicos mas importantes", true),
    new Tarea(3, "Hacer ejercicio", "Correr durante 30 minutos en parque", false),
    new Tarea(4, "Estudita typescript", "Repasar conceptos de typescript y practicar", true),
];
function renderizarTareas() {
    var listaTareas = document.getElementById("lista-tareas");
    if (!listaTareas) {
        console.error("No se encontró el contenedor de la lista");
        return;
    }
    listaTareas.innerHTML = "";
    tareas.forEach(function (tarea) {
        var tareaElemento = document.createElement("div");
        tareaElemento.className = "tareas ".concat(tarea.comppletado ? "completada" : "");
        tareaElemento.innerHTML = "\n        <h3>$tarea.titulo}</h3>\n        <p>$tarea.descripcion</p>\n        <p><stronge>Estado: </stronge>".concat(tarea.comppletado ? "Completada" : "Pendiente", "</p>");
        listaTareas.appendChild(tareaElemento);
    });
}
document.addEventListener("DOMContentLoaded", renderizarTareas);
