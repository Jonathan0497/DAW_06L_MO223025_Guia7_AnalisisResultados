const imagenes = [
    "img/imagen1.png",
    "img/imagen2.jpg",
    "img/imagen3.jpg",
    "img/imagen4.png"
];

let indiceActual = 0;

function mostrarImagen() {
    const imagen = document.getElementById("imagen");
    imagen.src = imagenes[indiceActual];
}

function avanzarImagen() {
    indiceActual++;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    mostrarImagen();
}

function retrocederImagen() {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }
    mostrarImagen();
}

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

botonAnterior.addEventListener("click", retrocederImagen);
botonSiguiente.addEventListener("click", avanzarImagen);

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        retrocederImagen();
    } else if (event.key === "ArrowRight") {
        avanzarImagen();
    }
});

mostrarImagen();
