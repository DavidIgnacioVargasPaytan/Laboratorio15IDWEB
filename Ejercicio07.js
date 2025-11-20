const listaUl = document.getElementById("lista-elementos"); 

console.log("Textos de los hijos <li>:");

if (listaUl) {
    for (const li of listaUl.children) {
        console.log(li.textContent); 
    }
} else {
    console.log("No se encontró el <ul> con id 'lista-elementos'.");
}