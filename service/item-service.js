const listaItems = () => fetch("http://localhost:3000/articulo").then((respuesta) => respuesta.json());

const crearItem = (img, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/articulo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({img, categoria, nombre, precio, descripcion, id: uuid.v4() }),
    });
};

const eliminarItem  = (id) => {
    return fetch(`http://localhost:3000/articulo/${id}`, {
        method: "DELETE",
    })
}

export const itemServices = {
    listaItems,
    crearItem,
    eliminarItem,
};
