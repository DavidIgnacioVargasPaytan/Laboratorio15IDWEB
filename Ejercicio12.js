const parrafoViejo = document.getElementById("p-reemplazar");

if (parrafoViejo) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "Párrafo reemplazado";
    nuevoDiv.classList.add("reemplazo");

    const padre = parrafoViejo.parentElement; 

    padre.insertBefore(nuevoDiv, parrafoViejo); 

    parrafoViejo.remove(); 

    console.log("Párrafo reemplazado por un nuevo <div>.");
} else {
    console.log("No se encontró el párrafo a reemplazar.");
}