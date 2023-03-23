/* 
!!!PROBLEMA!!!
-CHIEDERE KM DA PERCORRERE ED ETA' ALL'UTENTE
-COSTO 0,21€ AL KM
-SCONTO 20% UNDER 18
-SCONTO 40% OVER 65
-PREZZO SCRITTO CON 2 CIFRE DECIMALI
*/

// --VARIABILI--
function makeTicket(){
    // NOME E COGNOME
    let firstLastName = document.querySelector(`#firstlastname`).value;
    // DESTINAZIONE
    let destination = document.querySelector(`#destination`).value;
    // ETA'
    let age = document.querySelector(`#age`).value;
    // LUNGHEZZA PERCORSO
    let lunghezzaPercorso = document.querySelector(`#lunghezzapercorso`).value;
    // PREZZO NORMALE
    let price = (lunghezzaPercorso * (0.21));
    price = price.toFixed(2);
    // SCONTO UNDER 18
    let price1 = ((lunghezzaPercorso * (0.21))-(price/100*20));
    price1 = price1.toFixed(2);
    // SCONTO OVER 65
    let price2 = ((lunghezzaPercorso * (0.21))-(price/100*40));
    price2 = price2.toFixed(2);
    // --LOGICA--
    document.querySelector(`#clientname`).innerHTML = `<h3>${firstLastName}</h3>`

    document.querySelector(`#destinationTicket`).innerHTML = `<h3>${destination}</h3>`
    
    if (age<18) {
        document.querySelector(`#price`).innerHTML = `<p>Price: ${price1}€</p>`;
        document.querySelector(`#identity`).innerHTML = `<p>Underage</p>`;
    } else if (age>65) {
        document.querySelector(`#price`).innerHTML = `<p>Price: ${price2}€</p>`;
        document.querySelector(`#identity`).innerHTML = `<p>Of age</p>`;
    } else {
        document.querySelector(`#price`).innerHTML = `<p>Price: ${price}€</p>`;
        document.querySelector(`#identity`).innerHTML = `<p>Of age, over 65</p>`;
    }
}