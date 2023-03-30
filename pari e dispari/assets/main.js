/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

Dichiariamo chi ha vinto.
*/



/***************************** SECONDO METODO ********************************** */
 let chiVince = document.querySelector(`#button`)
 let sceltaPariDispari 


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


    // richiamo la funzione in fondo di chi vince
    document.querySelector(`.risultati`).innerHTML += sceltaVincitore(sceltaPariDispari, somma)
 })

 // function sceltaVincitore(){
 //     //se la somma è pari
 //     if(somma % 3 != 0){
 //         if(tuoNumero % 3 != 0){
 //             console.log(`hai vinto`)
 //         }else{
 //             console.log(`ha vinto il pc`)
 //         }
 //         //se la somma non è pari
 //     }else{
 //         if(tuoNumero % 3 == 0){
 //             console.log(`hai vinto`)
 //         }else{
 //             console.log(`ha vinto il pc`)
 //         }
 //     }
 // }



 //verifica se la somma dei numeri è pari o dispari
 function pariOrDispari(somma){
     if(somma % 2 == 0){
         return console.log("pari")
        
     }else{
         return console.log("dispari")
     }
 }

 //funzione per decidere chi vince 
 function sceltaVincitore(sceltaPariDispari, somma){
     sceltaPariDispari = document.querySelector(`#pardis`).value
     console.log(sceltaPariDispari)
     const isSommaPari = pariOrDispari(somma)


       if(sceltaPariDispari == isSommaPari){
        return "hai vinto"
       } else {
         return "hai perso"
       }
 }




