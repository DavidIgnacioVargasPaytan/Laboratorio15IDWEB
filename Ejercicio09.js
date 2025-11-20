const nuevoParrafo = document.createElement("p"); 

nuevoParrafo.textContent = "Elemento insertado con JS"; 
nuevoParrafo.style.color = "purple"; 

document.body.appendChild(nuevoParrafo);

console.log("Nuevo <p> insertado al final del body.");