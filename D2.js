/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 10;
const num2 = 20;
const numMaggiore = 10;
const numMaggiore2 = 20;
if (numMaggiore > numMaggiore2) {
  console.log("IL NUMERO MAGGIORE TRA 10 E 20 è:", numMaggiore);
} else if (numMaggiore2 > numMaggiore) {
  console.log("IL NUMERO MAGGIORE TRA 10 E 20 è:", numMaggiore2);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num = 10;
const Num5 = 5;
if (num !== Num5) {
  console.log("10 NOT EQUAL", Num5);
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const div5 = 25;
const divisore = 5;
if (div5 % divisore === 0) {
  console.log("IL SEGUENTE NUMERO è PEFETTAMENTE DIVISIBILE PER 5", div5);
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const div8 = 9;
const div82 = 1;
if (div8 === 8) {
  console.log("IL VALORE DI QUESTO NUMERO è UGAULE AL SEGUENTE", div8);
} else if (div82 === 8) {
  console.log("IL VALORE DI QUESTO NUMERO è UGAULE AL SEGUENTE", div82);
} else if (div8 + div82 === 8) {
  console.log("LA SOMMA DI 9 E 1 è IL SEGUENTE NUMERO", div8);
} else if (div8 - div82 === 8) {
  console.log("LA DIFFERENZA TRA 9 E 1 è IL SEGUENTE NUMERO", 8);
} else if (div82 - div8 === 8) {
  console.log("LA DIFFERENZA TRA 1 E 9 è IL SEGUENTE NUMERO", 8);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let promo = "free";
let costoSpedizione = 10;
let totalShoppingCart = 100;
if (totalShoppingCart >= 50) {
  console.log("SPEDIZIONE GRATUITA, COSTO TOALE", totalShoppingCart);
} else if (totalShoppingCart < 50) {
  console.log(
    "COSTO DELLA SPEDIZIONE + SPEDIZONE",
    totalShoppingCart + costoSpedizione
  );
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let promo1 = "free";
let costoSpedizione1 = 10;
let totalShoppingCart1 = 100;
let scontoBlackFriday = 0.2;
if (totalShoppingCart1 >= 50) {
  console.log(
    "SPEDIZIONE GRATUITA, COSTO TOTALE + PROMOZIONE BLACK FRIDAY APPLICATA",
    totalShoppingCart1 * (1 - scontoBlackFriday)
  );
} else {
  console.log(
    "COSTO DELLA SPEDIZIONE + TOTALE CON PROMOZIONE BLACK FRIDAY APPLICATA",
    totalShoppingCart1 + costoSpedizione1 * (1 - scontoBlackFriday)
  );
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
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

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
