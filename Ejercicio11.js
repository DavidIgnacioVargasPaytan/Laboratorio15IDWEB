const sectionContenedor = document.getElementById("contenedor-lista"); 

if (sectionContenedor) {
    const nuevaListaUl = document.createElement("ul");
    nuevaListaUl.style.border = "1px solid blue";

    for (let i = 1; i <= 5; i++) {
        const nuevoLi = document.createElement("li"); 
        if (i === 5) {
            nuevoLi.innerHTML = `Elemento ${i}<sup>''</sup>`;
        } else {
            nuevoLi.textContent = `Elemento ${i}`;
        }
        nuevaListaUl.appendChild(nuevoLi); 
    }

    sectionContenedor.appendChild(nuevaListaUl);

    console.log("Nueva lista <ul> insertada en la <section>.");
}