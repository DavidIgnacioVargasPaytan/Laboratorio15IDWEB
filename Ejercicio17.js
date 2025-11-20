const contenedor = document.getElementById("contenedor-parrafos"); 

if (contenedor) {
    const parrafos = Array.from(contenedor.querySelectorAll("p")); 

    parrafos.sort((a, b) => {
        const textoA = a.textContent.toLowerCase();
        const textoB = b.textContent.toLowerCase();
        if (textoA < textoB) return -1;
        if (textoA > textoB) return 1;
        return 0;
    });

    parrafos.forEach(parrafo => {
        contenedor.appendChild(parrafo); 
    });

    console.log("Párrafos reordenados alfabéticamente.");
} else {
    console.log("No se encontró el contenedor.");
}