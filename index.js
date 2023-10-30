var inputTarea = document.getElementById("inputTarea");
var listaTareaRealizadas = document.getElementById("realizadas");
var listaTareaPendientes = document.getElementById("pendientes");

inputTarea.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && inputTarea.value) {
    agregarTarea(inputTarea.value, false);
    inputTarea.value = "";
  }
});

function agregarTarea(textoTarea, completada) {
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completada;
  checkbox.addEventListener("change", function () {
    li.classList.toggle("completed");
    if (checkbox.checked) {
      listaTareaRealizadas.appendChild(li);
    } else {
      listaTareaPendientes.appendChild(li);
    }
    actualizarLocalStorage();
  });

  var texto = document.createElement("p");
  texto.innerHTML = textoTarea;
  var botonEliminar = document.createElement("span");
  botonEliminar.classList.add("delete");
  botonEliminar.innerHTML = "<ion-icon name='trash-outline'></ion-icon>";

  botonEliminar.addEventListener("click", function () {
    li.parentNode.removeChild(li);
    actualizarLocalStorage();
  });

  li.appendChild(checkbox);
  li.appendChild(texto);
  li.appendChild(botonEliminar);

  if (completada) {
    listaTareaRealizadas.appendChild(li);
  } else {
    listaTareaPendientes.appendChild(li);
  }

  actualizarLocalStorage();
}

window.addEventListener("load", function () {
  var loader = document.getElementById("loader");
  // Ocultar el loader
  loader.style.display = "none";
  cargarTareasDesdeLocalStorage();
});

function actualizarLocalStorage() {
  var tareasRealizadas = Array.from(listaTareaRealizadas.children).map(li => ({
    texto: li.querySelector("p").textContent,
    completada: true
  }));
  var tareasPendientes = Array.from(listaTareaPendientes.children).map(li => ({
    texto: li.querySelector("p").textContent,
    completada: false
  }));
  var tareas = tareasRealizadas.concat(tareasPendientes);
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargarTareasDesdeLocalStorage() {
  var tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.forEach(function (tarea) {
    agregarTarea(tarea.texto, tarea.completada);
  });
}
