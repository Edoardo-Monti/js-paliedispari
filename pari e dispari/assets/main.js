/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// let buttonPari = document.querySelector(`.cursor1`)
// let buttonDispari = document.querySelector(`.cursor2`)
// let chiVince = document.querySelector(`.cursor3`)
// let tuoNumero 
// buttonPari.addEventListener(`click`, function(){
    
//     tuoNumero = parseInt(prompt(`scrivi un numero da 1 a 6`))
   
    
// })
// console.log(tuoNumero)

// buttonDispari.addEventListener(`click`, function(){
//     let tuoNumero = parseInt(prompt(`scrivi un numero da 1 a 6`)).value
//     // console.log(tuoNumero)
// })

//genero un numero random da 1 a 6 con una funzione
// function numeroRandom(){
//     let numeroPc =  parseInt(Math.floor(Math.random()*6)+1)
//     // console.log(numeroPc)
//     return numeroPc
//}
//richiamo la funzione, se no non vedo il risultato
// numeroRandom();
// console.log(numeroRandom())
//sommo i due numeri
// function sommaNumeri(num1, num2){
//     console.log(num1 + num2)
// }

// chiVince.addEventListener(`click`, function(){
//     let sommaNumeri =  + numeroRandom()
//     // console.log(sommaNumeri)

// })

/***************************** SECONDO METODO ********************************** */
let chiVince = document.querySelector(`#button`)
let pariDispari = parseInt(document.querySelector(`#pardis`).value)

let tuoNumero = parseInt(document.querySelector(`#numero`).value)


function numeroRandom(){
    let numeroPc =  parseInt(Math.floor(Math.random()*6)+1)
    return numeroPc
}
numeroRandom()


// console.log(numeroRandom())

chiVince.addEventListener(`click`, function(){
    let tuoNumero = parseInt(document.querySelector(`#numero`).value)
    console.log(tuoNumero)
    let somma = numeroRandom() + tuoNumero
    console.log(somma)
    document.querySelector(`.risultati`).innerHTML += `la somma del tuo numero con quella del pc è : ${somma}`
})

// let pari = `pari`
// function results(){
//     if(){

//     }
// }