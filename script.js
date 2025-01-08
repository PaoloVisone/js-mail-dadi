// EX-MAIL

// Creo una lista di email
let mail = ["pippo@gmail.com", "paolo@gmail.com", "matteo@gmail.com", "ale@gmail.com", "sandra@gmail.com", "giulia@gmail.com"];

// Chiedi all'utente la sua mail
let userMail = (prompt("Email"))

// Controllo email

let found = false;

// Cicla l'array
for (let i = 0; i < mail.length; i++) {

    // Se è ugale
    if (userMail === mail[i]) {
        found = true;
    }
}

// Se non ha inserito nulla 
if (userMail === '') {
    alert("Devi indicare un indirizzo email");
}// Se è diversa
else if (!found) {
    console.log("EMAIL NON IN LISTA");
} else {
    console.log(userMail, "Buone feste!");
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




