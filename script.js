console.log('JS OK')

/* Traccia 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere  e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto secondo queste regole:

- Il prezzo del biglietto è definito in base ai km (0.21 al km)
- Va applicato uno sconto del 20% per i minorenni
- Va applicato uno sconto del 40% per gli over 65
- L'output del prezzo finale va messo fuori in forma umana, ossia con massimo due decimali, per indicare centesimi sul prezzo.
*/

/*  Procedimento

1 - Chiediamo all'utente i Km che vuole percorrere in treno e la sua età
2 - Calcoliamo il prezzo del biglietto in base alle varie variabili della traccia
3 - Recuperiamo un elemento in pagina e stampiamo il risultato
*/

// Punto 1

const distanceKm = parseInt(prompt('A quanto ammonta la distanza che vuoi percorrere? (Indicare la distanza in chilometri)').trim());
console.log(distanceKm);
const age = parseInt(prompt('Quanti anni hai?').trim());
console.log(age);

// Punto 2

let ticketPrice = distanceKm * 0.21;
console.log(ticketPrice);

if (age < 18) {
    ticketPrice = ticketPrice * 0.8;
} else if (age > 65) {
    ticketPrice = ticketPrice * 0.6;
}
console.log(ticketPrice);

ticketPrice = ticketPrice.toFixed(2)
console.log(ticketPrice)

// Punto 3

document.getElementById('result').innerText = `Il prezzo del suo biglietto è ${ticketPrice}`