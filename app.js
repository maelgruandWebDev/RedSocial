var validarBtn = document.getElementById('validar');
// Afficher le nom et l'email
var nom = document.getElementById('nom');
var email = document.getElementById('email');
// Définir les utilisateurs
var Mael = {
    id: 1,
    name: "Mael",
    email: "maelgruand@hotmail.com",
};
var Pedro = {
    id: 2,
    name: "Pedro",
    email: "pedro.test@test.com",
};
function validar(username, input_email) {
    // Vérification si les champs sont vides
    if (username.trim() === "" || input_email.trim() === "") {
        return 2; // Champs vides
    }
    // Vérification des informations de l'utilisateur
    if ((username !== Mael.name && username !== Pedro.name) || (input_email !== Mael.email && input_email !== Pedro.email)) {
        return 1; // Identifiants incorrects
    }
    return 0; // Connexion réussie
}
function auth() {
    // Récupérer les valeurs des champs de saisie au moment du clic
    var username = document.getElementById('username').value;
    var input_email = document.getElementById('input').value;
    var connected = validar(username, input_email);
    if (connected === 2) {
        nom.innerText = "Name not found";
        email.innerText = "Email not found";
    }
    else if (connected === 1) {
        nom.innerText = "Error credentials";
        email.innerText = "Error credentials";
    }
    else {
        nom.innerText = "".concat(username);
        email.innerText = "".concat(input_email);
    }
}
// Ajouter l'événement de clic au bouton
validarBtn.addEventListener("click", auth);
