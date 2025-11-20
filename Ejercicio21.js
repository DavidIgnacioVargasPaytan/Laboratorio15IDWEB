const contenedor = document.getElementById("contenedor-ej21"); 

if (contenedor) {
    for (let i = 1; i <= 3; i++) {
        const p = document.createElement("p");
        p.textContent = `Párrafo NUEVO número ${i}`;
        p.className = `parrafo-nuevo-${i}`;
        contenedor.appendChild(p); 
    }

    const parrafosHijos = contenedor.children;

    const segundoNuevoParrafo = parrafosHijos[2]; 
    
    if (segundoNuevoParrafo) {
        segundoNuevoParrafo.remove(); 
        console.log("3 párrafos creados y el segundo nuevo (Párrafo NUEVO número 2) eliminado.");
    }
}