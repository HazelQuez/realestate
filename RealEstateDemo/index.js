let imagenes = [
  "img/caroussel-1.png",
  "img/caroussel-2.png",
  "img/caroussel-3.png",
];

let cont = 0;

function caroussel(contenedor) {
  contenedor.addEventListener("click", (e) => {
    let atras = contenedor.querySelector(".caroussel__back");
    let adelante = contenedor.querySelector(".caroussel__forward");
    let img = contenedor.querySelector(".caroussel__photo");
    let tgt = e.target;

    if (tgt == atras) {
      if (cont > 0) {
        img.src = imagenes[cont - 1];
        cont--;
      } else {
        img.src = imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (cont < imagenes.length - 1) {
        img.src = imagenes[cont + 1];
        cont++;
      } else {
        img.src = imagenes[0];
        cont = 0;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector(".caroussel__background");
  caroussel(contenedor);
});
