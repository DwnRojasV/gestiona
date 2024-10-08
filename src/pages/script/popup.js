function popup_delete() {
  fetch("./popup_ventas/popup_delete.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalContainer").innerHTML = data;
      $("#modalDelete").modal("show");
    })
    .catch((error) => console.error("Error al cargar el modal:", error));
}
function popup_act() {
  fetch("./popup_ventas/popup_actualizar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalContainer").innerHTML = data;
      $("#modalActualizar").modal("show");
    })
    .catch((error) => console.error("Error al cargar el modal:", error));
}
function popup_visu() {
  fetch("./popup_ventas/popup_visualizar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalContainer").innerHTML = data;
      $("#modalVisualizar").modal("show");
    })
    .catch((error) => console.error("Error al cargar el modal:", error));
}
function popup_insert() {
  fetch("./popup_ventas/popup_insert.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modalContainer").innerHTML = data;
      $("#modalInsert").modal("show");
    })
    .catch((error) => console.error("Error al cargar el modal:", error));
}
