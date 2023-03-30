/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const buttonPari = document.querySelector(`.cursor1`)
const buttonDispari = document.querySelector(`.cursor2`)

buttonPari.addEventListener(`click`, function(){
    let tuoNumero = parseInt(prompt(`scrivi un numero da 1 a 5`))
    console.log(tuoNumero)
})

buttonDispari.addEventListener(`click`, function(){
    let tuoNumero = parseInt(prompt(`scrivi un numero da 1 a 5`))
    console.log(tuoNumero)
})

let numeroPc =  parseInt(Math.floor(Math.random()*6)+1)
    console.log(numeroPc)


