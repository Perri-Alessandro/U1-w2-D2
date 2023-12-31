/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numMaggiore = 10;
const numMaggiore2 = 20;
if (numMaggiore > numMaggiore2) {
  console.log("IL NUMERO MAGGIORE TRA 10 E 20 è:", numMaggiore);
} else if (numMaggiore2 > numMaggiore) {
  console.log("IL NUMERO MAGGIORE TRA 10 E 20 è:", numMaggiore2);
} else {
  console.log("I 2 NUMERI SONO UGUALI");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num = 10;
if (num !== 5) {
  console.log("10 NOT EQUAL", 5);
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const div5 = 25;
if (div5 % 5 === 0) {
  console.log("IL SEGUENTE NUMERO è PEFETTAMENTE DIVISIBILE PER 5", div5);
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const div8 = 9;
const div82 = 1;
if (
  div8 === 8 ||
  div82 === 8 ||
  div8 + div82 === 8 ||
  div8 - div82 === 8 ||
  div82 - div8 === 8
) {
  console.log("VERIFICATO", 8);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let costoSpedizione = 10;
let totalShoppingCart = 80;
if (totalShoppingCart < 50) {
  totalShoppingCart += costoSpedizione;
}

console.log("TOTALE DA PAGARE:", totalShoppingCart);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let costoSpedizione1 = 10;
let totalShoppingCart1 = 20 * 0.8;
if (totalShoppingCart1 < 50) {
  totalShoppingCart1 += costoSpedizione1;
}

console.log("TOTALE DA PAGARE:", totalShoppingCart1);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// lo so non ho inserito tutte le casistiche possibili ma non volevo rimanere indietro sul resto XD
let primo = 10;
let secondo = 5;
let terzo = 20;
if (primo > secondo && secondo > terzo) {
  console.log("VALORI IN ORDINE DECRESCENTE", primo, secondo, terzo);
} else if (secondo > primo && primo > terzo) {
  console.log("VALORI IN ORDINE DECRESCENTE", secondo, primo, terzo);
} else if (terzo > primo && primo > secondo) {
  console.log("VALORI IN ORDINE DECRESCENTE", terzo, primo, secondo);
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 90;
let numeroForse = "70";
if (typeof numero === "number") {
  console.log("QUESO VALORE è UN NUMERO", numero);
} else if (typeof numeroForse === "number") {
  console.log("QUESO VALORE è UN NUMERO", numeroForse);
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pOd = 5;
let pOd2 = 12;
if (pOd % 2 === 0) {
  console.log("IL NUMERO PARI è", pOd);
} else {
  console.log("IL NUMERO DISPARI è", pOd);
}
if (pOd2 % 2 === 0) {
  console.log("IL NUMERO PARI è", pOd2);
} else {
  console.log("IL NUMERO DISPARI è", pOd2);
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5", val);
} else if (val < 10) {
  console.log("Meno di 10", val);
} else {
  console.log("Uguale a 10 o maggiore", val);
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: "John",
//   lastName: "Doe",
//   skills: ["javascript", "html", "css"],
// };

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me2 = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me2.city = "Toronto";
delete me2.lastName;
console.log(me2);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me3 = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me3.city = "Toronto";
delete me3.lastName;
me3.skills.splice(2, 2);
console.log(me3);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numerii = {
  numeri: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
console.log("NUMERI DA 1 A 10", numerii);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeriii = {
  numeri: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
numeriii.numeri[9] = 100;
console.log("NUMERI DA 1 A 9 poi 100", numeriii);
