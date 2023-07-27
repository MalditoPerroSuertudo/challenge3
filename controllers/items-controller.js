import { itemServices } from "../service/item-service.js";

const crearNuevoItem = (img, nombre, precio, id) => {
    const item = document.createElement("div");
    const contenido = `
        <img class="catalogo__contenedor__item__img" src="${img}" alt="">
        <p class="catalogo__contenedor__item-nombre">${nombre}</p>
        <p class="catalogo__contenedor__item-precio">${precio}</p>
        <button class="catalogo__contenedor__btn" type="button" id="${id}">Eliminar</button>
    `;
    item.innerHTML = contenido;
    const btn = item.querySelector("button");
    btn.addEventListener("click", () =>{
        const id = btn.id
        itemServices
            .eliminarItem(id)
            .then((respuesta) => {
                console.log(respuesta);
            })
            .catch((err) => alert("Ocurrio un error"));
    });
    return item;
};

const div = document.querySelector("[data-div]");

itemServices.listaItems()
  .then((data) => {
    data.forEach(({img, nombre, precio, id}) => {
        const nuevoItem = crearNuevoItem(img, nombre, precio, id);
        div.appendChild(nuevoItem);
    });
})
.catch((error) => alert("Ocurrio un error"));

