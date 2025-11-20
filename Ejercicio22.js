const section = document.getElementById("contenedor-ej22"); 
const h2Original = document.getElementById("h2-original"); 

if (section) {
    const h2Nuevo = document.createElement("h2");
    h2Nuevo.textContent = "Título nuevo (Generado)";
    section.appendChild(h2Nuevo); 

    const pDescripcion = document.createElement("p");
    pDescripcion.textContent = "Descripción generada";
    section.appendChild(pDescripcion); 

    const lista = document.createElement("ul");
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = `Item generado ${i}`;
        lista.appendChild(li);
    }
    section.appendChild(lista); 

    if (h2Original) {
        h2Original.remove(); 
        console.log("Estructura compleja creada y <h2> original eliminado.");
    } else {
        console.log("Estructura compleja creada. No existía <h2> original.");
    }
}