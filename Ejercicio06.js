const elementosLi = document.querySelectorAll("li"); 

elementosLi.forEach(li => {
    li.classList.add("resaltado");
  
    li.classList.remove("oculto");
});

console.log("Clases actualizadas.");