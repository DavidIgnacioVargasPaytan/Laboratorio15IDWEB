const primeraImagen = document.querySelector("img"); 

if (primeraImagen) {
    primeraImagen.setAttribute("src", "img/foto-nueva.jpeg"); 
    primeraImagen.setAttribute("alt", "Mi foto de WhatsApp");
    
    console.log("Atributos 'src' y 'alt' actualizados");
}