import { itemServices } from "../service/item-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const img = document.querySelector("[data-img]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    itemServices
        .crearItem(img, categoria, nombre, precio, descripcion)
        .then(() => {
            alert("Se agregó el producto");
    })
    .catch((err) => console.log(err));
});