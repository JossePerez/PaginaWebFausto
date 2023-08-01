const imageContainer = document.getElementById("image-container");

const imagenes = [];
for (let i = 1; i <= 11; i++) {
    imagenes.push(`../FotosFausto/Bodas/boda${i}.jpeg`);
}

function crearImagen(imagen) {
    const divImagen = document.createElement("div");
    divImagen.classList.add("div-imagen");

    const img = document.createElement("img");
    img.src = imagen;
    img.alt = "";

    divImagen.appendChild(img);
    imageContainer.appendChild(divImagen);
}
for (let i = 0; i < imagenes.length; i++) {
    crearImagen(imagenes[i], i);
}
