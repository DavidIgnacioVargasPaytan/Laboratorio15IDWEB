const listaAnidadaUl = document.createElement("ul");
listaAnidadaUl.style.listStyleType = "square";

for (let i = 1; i <= 3; i++) { 
    const li = document.createElement("li");
    li.textContent = `Item principal ${i}: `;

    const span = document.createElement("span");
    span.textContent = "Nivel interno";
    span.style.fontWeight = "bold";

    li.appendChild(span); 
    listaAnidadaUl.appendChild(li); 
}

document.body.appendChild(listaAnidadaUl); 

console.log("Lista anidada creada dinámicamente.");