const primerH2 = document.querySelector("h2");

if (primerH2) {
    console.log("Texto del primer <h2>:", primerH2.textContent);
} else {
    console.log("No se encontró ningún elemento <h2>.");
}