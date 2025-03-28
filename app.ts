let validarBtn: HTMLElement = document.getElementById('validar') as HTMLButtonElement;

// Afficher le nom et l'email
let nom: HTMLElement = document.getElementById('nom') as HTMLParagraphElement;
let email: HTMLElement = document.getElementById('email') as HTMLParagraphElement;

// Définir l'interface User
interface User {
    id: number;
    name: string;
    email: string;
}

// Définir les utilisateurs
const Mael: User = {
    id: 1,
    name: "Mael",
    email: "maelgruand@hotmail.com",
};

const Pedro: User = {
    id: 2,
    name: "Pedro",
    email: "pedro.test@test.com",
};

function validar(username: string, input_email: string): number {
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
    let username: string = (document.getElementById('username') as HTMLInputElement).value;
    let input_email: string = (document.getElementById('input') as HTMLInputElement).value;

    let connected = validar(username, input_email);
    
    if (connected === 2) {
        nom.innerText = "Name not found";
        email.innerText = "Email not found";
    } else if (connected === 1) {
        nom.innerText = "Error credentials";
        email.innerText = "Error credentials";
    } else {
        nom.innerText = `${username}`;
        email.innerText = `${input_email}`;
    }
}

// Ajouter l'événement de clic au bouton
validarBtn.addEventListener("click", auth);
