const divs = document.querySelectorAll("div"); 
const colores = ["lightblue", "lightgreen", "lightcoral", "gold", "lightsalmon"];

divs.forEach((div, index) => {
    const colorIndex = index % colores.length;
    div.style.backgroundColor = colores[colorIndex];
});

console.log("Colores de fondo de los <div> cambiados.");