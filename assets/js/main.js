/* 
!!!PROBLEMA!!!
-CHIEDERE KM DA PERCORRERE ED ETA' ALL'UTENTE
-COSTO 0,21€ AL KM
-SCONTO 20% UNDER 18
-SCONTO 40% OVER 65
-PREZZO SCRITTO CON 2 CIFRE DECIMALI
*/

// --VARIABILI--
const lunghezzaPercorso = parseFloat(prompt(`Quanti km misura il percorso che vuoi fare?`));

const age = parseFloat(prompt(`Quanti anni hai?`));

// PREZZO NORMALE
let price = (lunghezzaPercorso * (0.21));
price = price.toFixed(2)

// SCONTO UNDER 18
let price1 = ((lunghezzaPercorso * (0.21))-(price/100*20));
price1 = price1.toFixed(2)

// SCONTO OVER 65
let price2 = ((lunghezzaPercorso * (0.21))-(price/100*40));
price2 = price2.toFixed(2)

// --LOGICA--
if (age<18) {
    document.writeln(`<p> ${price1} €</p>`);
} else if (age>65) {
    document.writeln(`<p> ${price2} €</p>`);
} else {
    document.writeln(`<p> ${price} €</p>`);
}