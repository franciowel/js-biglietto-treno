//chiedo l'età del passeggero
const userAge = parseInt(prompt('Digita la tua età'));

//chiedo quanti chilometri deve percorrere
const tripDistance = parseInt(prompt('Quanti Km dovresti percorrere?'));
console.log(tripDistance)

//calcolo il prezzo della tratta basandomi su una quota di 0,21€ moltiplicati per i km
const TotalPrice = tripDistance * '0.21' ;

//applico uno sconto sul totale se:

//il passeggero supera i 65 anni 
let SeniorDiscount;

if (userAge  > '65'){
    SeniorDiscount = TotalPrice * 40 / 100;
}

//il passeggero ha meno di 18 anni
let JuniorDiscount

if (userAge < 18){
    JuniorDiscount = TotalPrice * 20 / 100;
}

//altrimenti il totale rimane 0,21€ x tot km

let TicketPrice = TotalPrice;

if (userAge > '65'){
    TicketPrice = TotalPrice - SeniorDiscount;
} else if (userAge < '18'){
    TicketPrice = TotalPrice - JuniorDiscount;
}

//sistemo il prezzo finale, arrotondando a due decimali per ottenere un prezzo meglio visibile
let TrainTicket = TicketPrice.toFixed(2)

console.log(TrainTicket)

//preparo il messaggio per notificare l'utente del prezzo
const yourPreventivo = 'Il prezzo del tuo biglietto sarà:'  + TrainTicket +  '\u20AC' ;

//stampo in pagina per far vedere all'utente il prezzo finale
document.getElementById('FinalPrice').innerHTML = yourPreventivo;