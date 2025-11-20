const primerArticle = document.querySelector("article"); 
const mainContenedor = document.querySelector("main"); 

if (primerArticle && mainContenedor) {
    const clonArticle = primerArticle.cloneNode(true); 
    
    clonArticle.classList.add("clonado");
    clonArticle.querySelector("h2").textContent = "Artículo Clonado";
    
    mainContenedor.appendChild(clonArticle); 

    console.log("Primer <article> clonado y agregado al <main>.");
} else {
    console.log("Faltan elementos <article> o <main>.");
}