const contenedor = document.getElementById("contenido"); 

if (contenedor) {
    contenedor.innerHTML = ""; 

    console.log("Contenido del div 'contenido' vaciado.");
    console.log("El contenedor (marco verde) debe estar vacío.");
} else {
    console.log("No se encontró el contenedor con id 'contenido'.");
}