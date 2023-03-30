/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedi all'utente di inserire una parola
const parola = prompt("Inserisci una parola:");

// Definisci la funzione per verificare se la parola è palindroma
function isPalindroma(parola) {
  // Confronta la parola originale con la parola invertita (googlato)
    return parola == parola.split("").reverse().join("");

}

//scrivo se la parola è palindroma
if (isPalindroma(parola)) {
  console.log(`${parola} è palindroma!`);
} else {
  console.log(`${parola} non è palindroma.`);
}