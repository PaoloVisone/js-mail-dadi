// EX-MAIL

// Creo una lista di email
let mail = ["pippo@gmail.com", "paolo@gmail.com", "matteo@gmail.com", "ale@gmail.com", "sandra@gmail.com", "giulia@gmail.com"];

// Chiedi all'utente la sua mail
let userMail = (prompt("Email"))

// Controllo email

// Cicla l'array
for (let i = 0; i <= 6; i++) {

    // Se è ugale
    if (userMail === mail[i]) {
        console.log("BUONE FESTE!");
    }
    // Se non ha inserito nulla 
    else if (userMail === '') {
        alert("Devi indicare un indirizzo email");
    }
    // Se è diversa
    else {
        console.log("EMAIL NON IN LISTA");
    }
}

// EX-DADI

// Generare un numero random

let userNumber = parseInt(Math.random() * (6) + 1);
let pcNumber = parseInt(Math.random() * (6) + 1);

console.log(userNumber, pcNumber)

if (userNumber < pcNumber) {
    console.log("HAI PERSO");
} else if (userNumber === pcNumber) {
    console.log("PAREGGIO");
} else {
    console.log("VITTORIA!");
}




