const misBotones = document.querySelectorAll("button");

misBotones.forEach((bNav, i) => { //Recorremos cada botón.
    bNav.addEventListener('click', () => { //Cuando se clickee uno.

        misBotones.forEach(bNav => bNav.classList.remove("activo")); //Le sacamos el click a los demás botones-
        //(no nos interesa verlo activo si no estamos en ese submenú).
        bNav.classList.add("activo"); //Le damos el activo al botón que se clickeó actualmente.

    });
});

const contenido = document.getElementById("cont");

function cargarEnContenido(html){ //Desde el botón obtenemos el html correspondiente.
    fetch(html) //Documento html que quiero visualizar en la página.
    .then(response => response.text()) //Lo obtenemos y lo convertimos en texto.
    .then(data => {
        contenido.innerHTML = data; //Ese texto lo mostramos en nuestro div con id = contenido.
    })
    const cab = document.getElementById("cab");
    cab.style.display = "none";
}


const mql = window.matchMedia("(max-width: 750px)");

mql.addEventListener("change", (event) =>{

    const icon1 = document.getElementById("icon");
    const butons = document.querySelectorAll("#botones button");
    const b = document.getElementById("botones");

    icon1.addEventListener('click', () => {
            b.classList.toggle("show");
    });
    icon1.addEventListener('touchend', () => {
            b.classList.toggle("show");
});
    butons.forEach(item => {
        item.addEventListener('click', () => {
            b.classList.remove("show");
        });
    })

});
