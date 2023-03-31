/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

Dichiariamo chi ha vinto.
*/



/***************************** PRIMO METODO ********************************** */
 let chiVince = document.querySelector(`#button`)
 let sceltaPariDispari  = document.querySelector(`#pardis`).value

 function numeroRandom(){
     let numeroPc =  parseInt(Math.floor(Math.random()*6)+1)
     return numeroPc
 }



 // console.log(numeroRandom())

 chiVince.addEventListener(`click`, function(){
     let tuoNumero = parseInt(document.querySelector(`#numero`).value)
     console.log("tuonum:", tuoNumero)
     let random = numeroRandom();
     console.log("random:" + random);
     let somma = random + tuoNumero
     console.log("somma:" + somma)
    //  document.querySelector(`.risultati`).innerHTML += `la somma del tuo numero con quella del pc è : ${somma}`

    sceltaPariDispari  = document.querySelector(`#pardis`).value

    // decido chi vince
    if(pariOrDispari(somma) == sceltaPariDispari){
        console.log("hai vinto")
        document.querySelector(`.risultati`).innerHTML += "hai vinto"
       }else{
           console.log("hai perso")
           document.querySelector(`.risultati`).innerHTML += "hai perso"
       }
 })



 //verifica se la somma dei numeri è pari o dispari
 function pariOrDispari(somma){
     if(somma % 2 == 0){
         return "pari"
        
     }else{
         return "dispari"
     }
 }






