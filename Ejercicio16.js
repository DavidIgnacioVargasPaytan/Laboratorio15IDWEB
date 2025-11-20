const listaUl = document.querySelector("ul"); 

if (listaUl && listaUl.children.length >= 2) {
    const ultimoLi = listaUl.lastElementChild; 

    listaUl.prepend(ultimoLi); 

    console.log("Último <li> movido al principio.");
} else {
    console.log("No se encontró un <ul> con al menos dos elementos.");
}