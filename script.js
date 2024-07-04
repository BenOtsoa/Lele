// script.js

document.addEventListener("DOMContentLoaded", (event) => {
	// Sélectionnez le bouton par son ID
	const bouton = document.getElementById("monBouton");

	// Ajoutez un écouteur d'événement pour le clic
	bouton.addEventListener("click", () => {
		// Affiche une alerte lorsqu'on clique sur le bouton
		alert("Vous avez cliqué sur le bouton !");
	});
});

function toggleImage() {
	var img = document.getElementById("imageAffichee");

	// Récupérer l'URL de l'image que vous avez
	var urlImage = "https://i.pinimg.com/736x/8e/fd/09/8efd0945271dcee4211548b1cef98a96.jpg";
	var urlImage2 = "https://img.nrj.fr/2WSaQ94vZ65iakGwaGhsefPR1xA=/420x420/smart/medias%2F2021%2F03%2Fblague-test_604656b521058.jpg";
	console.log(urlImage);
	console.log(img.src);
	if (img.src !== urlImage) {
		img.src = urlImage;
	} else {
		img.src = urlImage2;
	}
}
