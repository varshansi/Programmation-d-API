// identifier le btn
const btn = document.getElementById("btn")

// definir une function
function handleClick(e) {
	e.target.innerHTML = "Bonjour" // Correction de "bonjour" avec la majuscule
}

// ajouter un click event
btn.addEventListener("click", handleClick)

// log pour tester
console.log("test ...", btn)
