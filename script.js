/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/
const chilometri = parseInt(prompt("Quanti chilometri devi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));
const centesimiPerKm = 0.21;
const prezzoBigliettoPerKm = chilometri * centesimiPerKm ;
if (eta < 18){
     const prezzoFinale=Math.round((prezzoBigliettoPerKm - (prezzoBigliettoPerKm * 0.20)) * 100) / 100;
     console.log(prezzoFinale);
}else if (eta > 65){
    const prezzoFinale1=Math.round((prezzoBigliettoPerKm - (prezzoBigliettoPerKm * 0.40)) * 100) / 100;
    console.log(prezzoFinale1);
}