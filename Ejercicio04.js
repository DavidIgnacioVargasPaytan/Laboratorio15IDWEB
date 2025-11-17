const parrafos = document.querySelectorAll("p");

parrafos.forEach(parrafo => {
    parrafo.textContent = "Texto actualizado dinámicamente"; 
});

console.log("Contenido de todos los párrafos actualizado.");