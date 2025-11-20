const divs = document.querySelectorAll("div"); 
const cantidadDivs = divs.length;

const resultadoP = document.createElement("p"); 
resultadoP.textContent = `Total de nodos <div> en el documento: ${cantidadDivs}`;
resultadoP.style.color = "red";

document.body.appendChild(resultadoP); 

console.log(`Se encontraron ${cantidadDivs} nodos <div>. Resultado mostrado.`);