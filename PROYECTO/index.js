var inputTarea = document.getElementById("inputTarea");
var listaTarea = document.getElementById("listaTarea");

inputTarea.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && inputTarea.value) {
    agregarTarea(inputTarea.value);
    inputTarea.value = "";
  }
});

function agregarTarea(textoTarea) {
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    li.classList.toggle("completed");
  });

  var texto = document.createElement("p");
  texto.innerHTML = textoTarea;
  var botonEliminar = document.createElement("span");
  botonEliminar.classList.add("delete");
  botonEliminar.innerHTML = "<ion-icon name='trash-outline'></ion-icon>";

  botonEliminar.addEventListener("click", function () {
    li.parentNode.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(texto);
  li.appendChild(botonEliminar);
  listaTarea.appendChild(li);
}

window.addEventListener("load", function () {
  var loader = document.getElementById("loader");
  // Ocultar el loader
  loader.style.display = "none";
});

