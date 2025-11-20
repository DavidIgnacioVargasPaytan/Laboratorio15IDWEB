const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Título 3 Insertado Antes del Párrafo";

const primerP = document.querySelector("p");

if (primerP) {
    const padre = primerP.parentNode; 

    padre.insertBefore(nuevoH3, primerP);

    console.log("Nuevo <h3> insertado antes del primer <p>.");
} else {
    console.log("No se encontró <p> de referencia.");
}