const todosParrafos = document.querySelectorAll("p"); 

if (todosParrafos.length > 0) {
    const ultimoParrafo = todosParrafos[todosParrafos.length - 1]; 
    
    ultimoParrafo.remove(); 

    console.log("Último párrafo <p> eliminado.");
} else {
    console.log("No hay párrafos <p> en el documento para eliminar.");
}